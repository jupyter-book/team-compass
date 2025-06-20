# Collaboration Cafe - June 2025

## Attendees

- Angus Hollands
- Steve Purves
- Franklin Koch
- Chris Holdgraf
- Stéfan van der Walt
- Freek

## Summary

- We will release Jupyter Book 2 "beta" version before SciPy, July 7, 2025. This is primarily a marketing/communication bump (as opposed to a significant technical change),
- There are two outstanding technical regressions from JB1:  (1) rendering markdown cell outputs and (2) allowing edits for executable code cells. These issues are still top priorities, but they will not block "beta" - If we are not able to complete these before "beta" we will make sure to have a clear, well-scoped initiative for each that is easy to point to (e.g. when new users ask questions about them).
- The other important aspect of a "beta" release is prep for a potential influx of users (and hopefully contributors). Part of this just setting expectations for ourselves as maintainers, but there are some tangible steps around organization/documentation/example galleries that we can take (most of the conversation today has been related to this last point).

## Next actions

- [x] Create a source of truth for the Markdown outputs issue — https://github.com/jupyter-book/mystmd/issues/1026
- [x] Merge the "SciPy" and the "Beta" columns in the project board.
    - [ ] Make it clear that the two items in this meeting are the blockers for beta
- [ ] Signal-boost the need for a Jupyter Book 2 gallery.

## Agenda

- Jupyter Book talk @ SciPy
  - Angus and Franklin splitting talk
  - [Talk Abstract & Schedule Entry](https://cfp.scipy.org/scipy2025/talk/NYPUVH/)
      - Franklin's bio needs update
  - [Proceedings submission](https://github.com/scipy-conference/scipy_proceedings/pull/1096) - reviews and suggestions there are open to the entire JB2 team
  - Rowan's suggestion 
    - MyST overview
    - Success stories
- Jupyter Book 2 releases
  - What is "beta"?
    - Suggestion that we think about this through the lens of safety.
    - We can also query existing users (`@agoose77`) but I'm not advocating that we actually do this.
    - What is needed for beta?
        - [In-browser execution allow readers to edit cell content](https://github.com/jupyter-book/mystmd/issues/443)
            - Why not Binder? Might not be GDPR compliant. Students don't know lab/notebook interfaces. Jupyter Book helps it remain as simple as possible.
        - Generate and show markdown with cell outputs` (see below for more links)
            - Showing "unsupported" outputs from code-cells, e.g. Markdown
- Other items:
    - [remove-input PR](https://github.com/jupyter-book/mystmd/pull/1937)
      - Franklin will try to take a look at this one this week - I think this is very small.
    - [Lightweight team practices](https://github.com/jupyter-book/team-compass/issues/28) -> team priority buckets
        - Stefan shared his ideas around a "side quests" column
        - Refined issues that we'd like somebody to tackle, but may not be roadmap priorities.
        - A way to encourage others to pick them up w/ more confidence that the issue is well-scoped and of interest to maintainers. ([see description here](https://github.com/jupyter-book/team-compass/issues/28#issuecomment-2960806850))

### Alpha vs. beta

- Decision: We need to decide when to call Jupyter Book 2 and MyST "Beta" rather than "alpha".

- Freek: user onboarding is difficult because of a lack of examples to work from. More like https://executablebooks.org/en/latest/gallery/ where there are complete examples, and you can pick up more than you can from the small examples on the docs alone. Has already prepped [a cheetsheet](https://tud-seed.github.io/IVO/features) pulling things together as a start point for students.

### More details on the "Outputs" work:

* [User stories](https://hackmd.io/H7ERZTycQlKy52JIlEWhDw)
* [myst-theme Outputs AST change prep](https://github.com/jupyter-book/myst-theme/pull/571)
* [mystmd Outputs AST](https://github.com/jupyter-book/mystmd/pull/1903)
* [mystmd Markdown 7 Latex changes](https://github.com/jupyter-book/mystmd/pull/1961)
* [long-running issue mystmd#1026](https://github.com/jupyter-book/mystmd/issues/1026)
