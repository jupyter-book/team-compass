# Development tips

## Enable publishing with GitHub Actions in new repositories

By default, GitHub disables **`write`** privileges in any repository in the [`jupyter-book` organization](https://github.com/jupyter-book).
This prevents repositories from being able to publish new releases from GitHub Actions.

To enable write access in GitHub Actions, add the following to the relevant GitHub Action in the repository.

```{code-block} yaml
:filename: .github/publish.yml
permissions:
  contents: write
  pull-requests: write
```

For more information, see [the GitHub Actions documentation](https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs#defining-access-for-the-github_token-permissions).

For examples of this pattern in use in the Jupyter Book organization, see [this GitHub search query of using this configuration](https://github.com/search?q=org:jupyter-book+%22contents:+write%22+language:YAML&type=code).
