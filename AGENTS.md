## Precision Rule

Only change exactly what the user asks for. Do not modify, add, or remove anything beyond the explicit request. Every edit must be strictly scoped to the user's exact words.

## Preview Rule (after every important edit)

After any significant UI/content/design edit: open the preview in the browser immediately (for this site: open the local `portfolio.html` or a version file). Then iterate based on user feedback — do not move to the next step before the user sees the result.

## Security Rule (before every push)

Run the mandatory security scan before any push: grep token patterns, check git status, review .gitignore, audit git history. Show results to the user and get "go" before pushing.
