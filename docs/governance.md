# Governance and decision making

This page describes the groups with decision-making authority in the Jupyter Book community.

## Overview

In short, here is the decision making process that we follow:

- All organizational policy is defined in this Team Compass.
- Most day to day decisions are made by [Core Team](#core-team) members.
- Team members are expected to follow inclusive team practices when making decisions, and to actively share information and collaborate with one another.
- Members of the [Steering Council](#steering-council) may vote to break ties if decision making is at an impasse in any part of the organization.
- Changing team policy or the MyST specification has some extra process.

## Sources of Truth

### Team policy

This Team Compass repository is the source of truth for all team policy, unless explicitly delegated elsewhere.

### Code of Conduct

Our Code of Conduct defines acceptable and unacceptable behavior for any individual participating in an Executable Books space (online or in-person).
It also defines mechanisms for reporting violations and processes for dealing with them.

See [](code-of-conduct.md) for more information.

### MyST specification

MyST is a special project of the Jupyter Book community, here are two sources of truth:

:::{list-table}
:header-rows: 1
- * Name
  * Documentation
  * Repository
- * **MyST document structure and markdown standard**
  * [mystmd.org/spec](https://mystmd.org/spec)
  * [jupyter-book/myst-spec](https://github.com/jupyter-book/myst-spec)
- * **MyST enhancement proposals**
  * [mep.mystmd.org](https://mep.mystmd.org/)
  * [jupyter-book/myst-enhancement-proposals](https://github.com/jupyter-book/myst-enhancement-proposals)
:::

## Changing Policy

(governance:policy-decision)=
### Team Policy

Take the following steps for changing any policy, strategy, or governance aspect of the Team Compass.

1. **Open an issue** to explain the policy that you'd like to change, and why. Here is a rough template to follow:
   ```
   ## Context
   
   provide context needed to understand this proposal. Describe the problem this proposal will solve.
   
   ## Proposal
   
   describe your proposal in informal but specific terms.
   
   ## Impact
   
   describe the implications of this proposal and the impact it will have.
   ```
2. **Discuss and incorporate feedback** with others on the team. If there are objections or suggestions, do your best to incorporate them into your proposal.
3. **Make a pull request** to the `Team Compass` repository (or another location if appropriate) and link it to the issue. This is the "formal change" that you wish to make.
4. **Make a decision**. Steering Council members may approve PRs to change policy. To approve a change, use the "Approve" feature in the GitHub UI. To request blocking changes, use the "Request Changes" feature in the GitHub UI (see [](#decisions:blocking)). PRs to change organizational policy may be merged when the following conditions are met:
   - Have been open either for five working days or up until all Steering Council members `Approve` the PR.
   - Have `Approval` from at least **one  Steering Council member**
   - Have no `Request Changes` from a Steering Council member.
   - If there are unresolveable objections from a Steering Council member, a decision to merge is made with a majority vote.

### The MyST Specification

We use a special process called **MyST Enhancement Proposals** to change the MyST Specification.
See [](xref:mep) for more details.

## Guidelines for decision making

(decisions:blocking)=
### How and when to block proposals

When blocking any change or objecting to a proposal, provide a rationale for what must be changed and why you believe it is critically important.
_Do not disapprove because of differences in opinion. Only disapprove if you have a major strategic concern_.
See [Strategies for integrating objections](https://www.sociocracyforall.org/strategies-for-integrating-objections/) for what we are aiming for.