# Scripts

## `scripts/fix-merge.sh`
This script resolves outstanding merge conflicts by retaining the current branch's implementation, removes legacy multi-route directories and conflicting Netlify artifacts, stages the single-page structure, and runs `npm install`, `npm run lint`, and `npm run build` to validate the project before committing the merge resolution. It finishes by pushing the branch (forcing if a rebase is in progress). Run it from the repository root with:

```bash
bash scripts/fix-merge.sh
```
