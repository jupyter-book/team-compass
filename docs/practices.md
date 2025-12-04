# Team practices

These are team practices that we try to follow across all repositories of `jupyter-book`.
They are not _strictly_ enforced, but we ask that you prioritize following them, and provide a clear rationale if you don't intend to.

## When to merge pull requests

We want to encourage fluid contributions and a bias towards action, rather than worrying about getting it perfect.
We aim for optimistic merges, with [core-team contributors](./team.md) using their best judgement of when they think something might be controversial. Here are a few guidelines to follow:

- **Aim to merge only changes you understand fully**, if not seek review from the rest of the team.
- **Smaller, iterative changes**: are low risk - aim to seek feedback, but don't block yourself if you're not getting a response! 
    - Examples: targeted bug fixes, typos, docs changes.
- **Larger changes for maintainers or users**: more important to get review - seek input and post messages in both GitHub and Discord.
    - Examples: An AST change, a change to core processing infrastructure, a change to team practices everybody will need to follow, a new directive, a breaking change for users we can't easily walk back. 
- **Use the GitHub UI to review your own pull request**! If you'd like to merge without another person reviewing first, this is a helpful way to show you've done some due-diligence.

In general, we trust those with merge rights to make the right decision. You should use your best judgment and it's OK if you make a mistake - we can always revert changes if we haven't made a release.


## Share notes and materials in our team drive

We use a [shared Google Drive](#team-drive) to make it easier for us to re-use the same content, and to have shared spaces for notes. We encourage you to use this space to facilitate collaboration and sharing!

## When merging PRs, use squash commits

When you merge a pull request, **use Squash Commits** before merging.

:::{note} Have a rationale if you don't want to follow this practice
If you _really want_ to use a Merge Commit, that's OK, but you should have a strong reason for why it's better to break with team guidelines before doing so.
For example, it is sometimes useful to use Merge Commits for certain bot or CI/CD workflows.
:::
