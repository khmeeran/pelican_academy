import { NextResponse } from 'next/server';

const REPO_OWNER = 'khmeeran';
const REPO_NAME = 'pelican_academy';
const BRANCH = 'main';

export async function POST(req: Request) {
  try {
    const { path, content, message, isBase64 } = await req.json();
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      return NextResponse.json({ error: 'GitHub token not configured on server' }, { status: 500 });
    }

    // 1. Get current file SHA to update it
    const getRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?ref=${BRANCH}`, {
      headers: { Authorization: `token ${token}` },
    });

    let sha;
    if (getRes.ok) {
      const data = await getRes.json();
      sha = data.sha;
    }

    // 2. Prepare content
    let finalContent = content;
    if (!isBase64) {
      finalContent = Buffer.from(typeof content === 'string' ? content : JSON.stringify(content, null, 2)).toString('base64');
    }

    // 3. Put new file content
    console.log(`[GitHub API] Request: PUT https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`);
    const body = {
      message: message || `Admin Update: ${path}`,
      content: finalContent,
      sha,
      branch: BRANCH,
    };
    
    const putRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`, {
      method: 'PUT',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!putRes.ok) {
      const errorData = await putRes.json();
      console.error(`[GitHub API] Error ${putRes.status}:`, JSON.stringify(errorData, null, 2));
      return NextResponse.json({ 
        error: `GitHub API error: ${errorData.message}`,
        details: {
          status: putRes.status,
          response: errorData,
          endpoint: `PUT /repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`
        }
      }, { status: putRes.status });
    }

    const responseData = await putRes.json();
    console.log(`[GitHub API] Success: ${path} updated.`);
    return NextResponse.json({ success: true, data: responseData });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
