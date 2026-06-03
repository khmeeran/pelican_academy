import { NextResponse } from 'next/server';

const REPO_OWNER = 'khmeeran';
const REPO_NAME = 'pelican_academy';
const BRANCH = 'main';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const path = searchParams.get('path');
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      return NextResponse.json({ error: 'GitHub token not configured on server' }, { status: 500 });
    }

    if (!path) {
       return NextResponse.json({ error: 'Path is required' }, { status: 400 });
    }

    const getRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?ref=${BRANCH}`, {
      headers: { Authorization: `token ${token}` },
    });

    if (!getRes.ok) {
      return NextResponse.json({ error: 'Failed to fetch from GitHub' }, { status: getRes.status });
    }

    const data = await getRes.json();
    const content = JSON.parse(Buffer.from(data.content, 'base64').toString('utf-8'));

    return NextResponse.json(content);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
