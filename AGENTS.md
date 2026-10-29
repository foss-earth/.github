# foss-earth agent entry point

Applies to every repository in this organization. Read this file, then follow
only the task-relevant rows below. Linked guides are required for the work they
cover; do not preload the whole documentation tree. Prefer adjacent checkouts
(`../.github/`, `~/gh/foss-earth/docs/`); use the GitHub links when unavailable.

- Write modular, reusable code. Put a behavior in one shared module and call it. Do not copy it into a feature, a screen, or a package.
- No vendor lock-in. Do not bind the program, its files, or its reports to one editor, one agent product, one host, or one vendor SDK when a standard interface exists.
- Preserve existing uncommitted work; stage explicit paths only.
- Put scratch files, logs and screenshots in the target repo’s ignored `build/`.
- Specifications, design documents and proposals belong in the repository documentation tree (`docs/docs/proposals/` in FOSS Earth, `docs/proposals/` in 0SFS/owning repos). Never write them into tool artifact directories, `~/.gemini/`, or outside the workspace.
- Never write project files or documentation into `~/.gemini/`.
- Never expose/commit credentials or send personal data to another service.
- Never push source, branches, tags or deployment output unless the user explicitly
  requests that specific push. Publishing/deploying (including GitHub Pages)
  requires its own explicit request; building, prototyping, creating a repository
  or naming a URL/path does not authorize it. Let the user test locally first;
  agent tests are not the user's approval to publish. Check scripts for hidden pushes.
- When local work is ready, give the exact source push command(s) and offer to
  run them if the user asks. Inspect each affected repository's branch and push
  remote first; keep unrelated uncommitted work out of any suggested commit.
- For autonomous checks, use `npm run llm-dev` when a server is needed.
  Before returning, stop every server and child process you started unless the
  user explicitly asked to keep it running. Never stop someone else's server.
- For user testing, give an exact `cd ~/gh/<org>/<app> && npm run dev` command
  for their own terminal and what to test. Do not leave a background server as
  the handoff; normal user startup includes the network link and QR code.
- New UI belongs in the app's tabbed interface. Add a tab unless the user requests
  an existing tab; do not add top bars, floating panels or overlays unless explicitly requested.
- Rewrite published history or change repository settings only if asked.
- Never add AI author, committer or co-author attribution.
- Keep laptop checks short: one quick configuration first; stop when clear.
  Hand off runs longer than a few minutes with commands and expected duration.
- When a task needs hands-on feedback, also provide a custom test link and
  downloadable feedback bundle using the guide below. The link must work after
  the user starts their own server.

| When the task touches… | Read / inspect |
| --- | --- |
| Setup, commands, exports | The target repository’s README headings and `package.json`; open relevant sections only |
| Find the owner / cross-repo work | [Repository map](https://github.com/foss-earth/docs/blob/main/docs/agent-start.md) |
| UI / visible controls | [UI](agent-reference.md#ui); full shared layout spec linked there |
| Maps / height preparation / key access | [Maps and prepared data](agent-reference.md#maps-and-prepared-data) |
| Camera / touch / panorama | [Camera and input](agent-reference.md#camera-and-input) |
| Checks / performance / app code | [Checks](agent-reference.md#checks) |
| UI screenshots / browser automation | [Browser testing](agent-reference.md#browser-testing) |
| Phone, tablet or VR headset tests | [Testing as an agent](https://github.com/foss-earth/docs/blob/main/docs/agent-testing.md) |
| Custom test link / user feedback file | [Test feedback](https://github.com/foss-earth/docs/blob/main/docs/test-feedback.md) |
| Deploy / publish (only when requested) | [Publishing](agent-reference.md#publishing) |
| Commit / release / licensing | [Contributions](agent-reference.md#contributions) and [CONTRIBUTING.md](CONTRIBUTING.md) |
| Previous conversation supplied | [History](agent-reference.md#history) |

Keep future AGENTS.md files as entry points: essential universal rules plus
a task index. Put detailed procedures in linked guides, retain their information,
and update the relevant index when adding a workflow.
