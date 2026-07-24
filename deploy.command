#!/bin/bash
# Double-click this file in Finder to publish the latest changes.
# It commits everything and pushes to GitHub; Vercel then auto-deploys.

cd "$(dirname "$0")" || exit 1

echo "Publishing SPANEX…"

# Clear any stale git locks that can block committing.
rm -f .git/index.lock .git/HEAD.lock .git/objects/maintenance.lock 2>/dev/null

git add -A

if git diff --cached --quiet; then
  echo "No new changes to publish — pushing anything already committed."
else
  git commit -m "Update $(date '+%Y-%m-%d %H:%M')"
  echo "Committed changes."
fi

if git push origin main; then
  echo ""
  echo "✅ Done. Vercel is now deploying — check your Vercel dashboard."
else
  echo ""
  echo "⚠️  Push failed — copy the message above and send it to Claude."
fi

echo ""
echo "You can close this window."
