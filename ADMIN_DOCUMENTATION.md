# Admin Dashboard Documentation

## Authentication Method
The `/admin` dashboard is protected by a simple login screen. Currently, access is granted using hardcoded credentials (ID: `admin`, Password: `admin123`). When successfully authenticated, a session token is stored in the browser's `sessionStorage`, ensuring unauthorized users cannot access the `/admin/dashboard` route.

## Storage Method
Content is stored directly within the repository in structured JSON format under the `src/data/` directory:
- `src/data/content.json`: Stores editable text content for major website sections like About Us and Contact Details.
- `src/data/gallery.json`: Manages the image gallery, storing URLs and captions.
- `src/data/updates.json`: Manages announcements and the hero subtitle.

Images added via the dashboard are stored as URLs pointing to external sources or previously uploaded public assets.

## Publish Workflow
The publish system is a secure, automated Git-based workflow:
1. When an administrator clicks **"Publish Changes"** on the dashboard, the Next.js frontend sends the updated JSON data to a secure backend API route (`/api/admin/save`).
2. The backend API route authenticates with GitHub using a securely stored Personal Access Token (`GITHUB_TOKEN` environment variable).
3. The API fetches the current state of the repository, determines the SHA hash of the target files, and executes a Git commit directly via the GitHub REST API.
4. The automated Git commit pushes the changes directly to the `main` branch.
5. Vercel (or any linked CI/CD hosting provider) detects the commit, automatically triggers a new deployment, and the live website is updated without developer intervention.

**Important Setup Requirement:**
To enable publishing, the repository owner must create a GitHub Personal Access Token with repository write permissions and add it to the hosting provider's Environment Variables as `GITHUB_TOKEN`.

## Rollback Process
Since the entire workflow is Git-based, rolling back changes is extremely simple and reliable:
1. Open the repository on GitHub.
2. Navigate to the **Commits** history.
3. Locate the specific automated commit you wish to undo (typically named "Admin Update: src/data/...").
4. Click the **Revert** button on GitHub.
5. A new commit is created that undoes the changes. The hosting provider will automatically rebuild the site with the restored previous content.
