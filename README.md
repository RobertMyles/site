[![Netlify Status](https://api.netlify.com/api/v1/badges/e58c5062-44f5-4aa6-a7f9-6e3ca53240df/deploy-status)](https://app.netlify.com/sites/robertmylesmcdonnell/deploys)

Repo for my personal website. 👻

Built with Quarto for R stuff, mainly. 

## Writing a post

1. Add `posts/my-post.qmd` (copy the front matter from an existing post). Drafts go in `drafts/`.
2. Commit to `main`, or open a pull request to get a preview link first.
3. GitHub Actions renders the site with a pinned Quarto version and deploys it to Netlify. `_site/` is not committed.

Code chunks don't run in CI (`execute.eval: false`); CI installs only base R with knitr to print them. To include live R output in a post, set `eval: true` in that post, run `quarto render posts/my-post.qmd` locally once, and commit the post's folder under `_freeze/`.
