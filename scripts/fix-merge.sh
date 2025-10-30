#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Checking for conflicted files..."
conflicts="$(git diff --name-only --diff-filter=U || true)"
if [[ -n "$conflicts" ]]; then
  echo "Resolving conflicts in:
$conflicts"
  while IFS= read -r file; do
    [[ -z "$file" ]] && continue
    if git checkout --ours -- "$file" 2>/dev/null; then
      :
    else
      git restore --ours -- "$file"
    fi
    git add -- "$file"
  done <<<"$conflicts"
else
  echo "No conflicted files detected."
fi

if [[ -d "app/(marketing)" ]]; then
  echo "Removing legacy marketing routes..."
  rm -rf "app/(marketing)"
fi

for redirects in "_redirects" "public/_redirects"; do
  if [[ -f "$redirects" ]]; then
    echo "Removing $redirects to avoid Netlify conflicts..."
    rm "$redirects"
  fi
  git rm -f --cached "$redirects" 2>/dev/null || true
done

required_files=(
  "app/page.tsx"
  "app/layout.tsx"
  "app/globals.css"
  "tailwind.config.ts"
  "netlify.toml"
)

for file in "${required_files[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "Required file missing: $file" >&2
    exit 1
  fi
done

echo "Installing dependencies..."
npm install

echo "Running lint..."
npm run lint

echo "Building project..."
npm run build

git add -A

if ! git diff --cached --quiet; then
  echo "Creating merge resolution commit..."
  git commit -m "Resolve merge: keep new single-page site; remove legacy marketing routes"
else
  echo "No changes to commit."
fi

current_branch="$(git rev-parse --abbrev-ref HEAD)"
if git rev-parse --abbrev-ref --symbolic-full-name @{u} >/dev/null 2>&1; then
  upstream_set=true
else
  upstream_set=false
fi

if [[ -d .git/rebase-apply || -d .git/rebase-merge ]]; then
  echo "Rebase in progress; pushing with --force-with-lease..."
  if [[ "$upstream_set" == true ]]; then
    git push --force-with-lease
  else
    git push --force-with-lease --set-upstream origin "$current_branch"
  fi
else
  echo "Pushing branch..."
  if [[ "$upstream_set" == true ]]; then
    git push
  else
    git push --set-upstream origin "$current_branch"
  fi
fi
