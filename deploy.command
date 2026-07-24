#!/bin/bash
# Double-click this file in Finder to publish the latest changes.
# It commits everything and pushes to GitHub; Vercel then auto-deploys.

cd "$(dirname "$0")" || exit 1

echo "Publishing SPANEX…"

if [ -z "$(git status --porcelain)" ]; then
  echo "No changes to publish. Everything is already up to date."
else
  git add -A
  git commit -m "Update $(date '+%Y-%m-%d %H:%M')"
fi

git push origin main && echo "Done. Vercel is now deploying — check your Vercel dashboard." || echo "Push failed — see the message above."

echo ""
echo "You can close this window."
