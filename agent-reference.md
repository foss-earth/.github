# Task-specific agent guidance

Read only the sections selected by [AGENTS.md](AGENTS.md). These are the
full organization rules, moved out of the always-read entry point.

## History

When given a previous agent's local JSONL conversation, use the shared
[conversation reader](https://github.com/foss-earth/docs/blob/main/docs/agent-conversations.md):
`node ~/gh/foss-earth/docs/scripts/read-agent-conversation.mjs <file> --prompts --all`,
then search or read a bounded tail. It supports Claude and Codex logs without
dumping snapshots or reasoning. Verify historical claims against today's code.

## Contributions

- You cannot have AI as a co-author, or your contributions will be rejected.
  Never add AI author, committer or co-author attribution to commits (see
  [CONTRIBUTING.md](CONTRIBUTING.md)).

- Versions follow [CONTRIBUTING.md](CONTRIBUTING.md): `YY.MM.DD#N` for
  commits and `YY.MM.DD LTS` for long-term support releases.

## Workspace

- Keep scratch files, logs and screenshots in the repository's gitignored
  `build/` directory, not in system temp folders.

- Don't discard uncommitted work you didn't make. Several agents may work in
  one checkout at once, so stage by explicit path, never `git add -A` or `.`.

- Don't send personal data, accounts or credentials to another service without
  consent.

## Checks

- 0SFS fly type-checks FOSS Earth's sources with its own types, among them
  `@webgpu/types`, and its deploy stops on any error. After changing app code,
  run `npm run typecheck` in `~/gh/0sfs/fly` too.

- Improve performance and code quality whenever practical while carrying out
  the requested work. If a suggested improvement could degrade other behavior,
  and automated tests would not catch that degradation, first add practical
  coverage. If extending the tests to catch it is impractical, propose the
  improvement and its tradeoffs to the user before implementing it.

## Maps and prepared data

- **Google Maps key:** before asking for a key, check `GOOGLE_3D_TILES_KEY`
  in the environment and ignored `.env.local` files in `~/gh/foss-earth/app`,
  `~/gh/UMN-VR/tour`, and `~/gh/0sfs/fly`. `FOSS_EARTH_GOOGLE_KEY` remains a
  legacy fallback. Either environment name beats files; the new name beats the
  legacy name across files. Read only these named variables; never
  print the key in agent logs or commit the file. The user-facing `npm run dev`
  startup intentionally includes `gkey` in its local/network URLs and QR; agents
  use `npm run llm-dev` to omit it. Build-time photo height preparation uses
  Google 3D geometry first; another source is a recorded fallback only.

- **Prefer build-time work over runtime work.** Resolve stable data (including
  tour/photo placement heights) in explicit preparation scripts and store the
  result in authored/generated assets. Runtime loads those results; it must not
  silently recompute image heights as map tiles or LOD change. Use the finest
  available source data for explicit height preparation, record its provenance,
  and fail rather than quietly using coarse or missing data. Before removing a
  legacy runtime path, generate and validate its replacement data and verify
  every consuming scene still displays its content. Do not land only one half
  of that migration.

## Publishing

- Don't deploy, rewrite published history or change repository settings
  unless asked. When asked to publish the live site, use the steps in
  [docs/deploying.md](https://github.com/foss-earth/docs/blob/main/docs/deploying.md)
  (`../docs/docs/deploying.md` from an Earth repository). Pushing `main` does
  not publish it. From a side-by-side checkout:

  ```sh
  cd ~/gh/foss-earth/foss-earth.github.io && npm run deploy
  ```

  That builds the app and the site only when the app has something new since
  the published one, otherwise keeping the published app; it puts the app
  under https://foss-earth.github.io/app/ and pushes the `gh-pages` branch of
  `foss-earth/foss-earth.github.io`, keeping `/eac-prototype/` and
  `/examples/`, and pushes nothing when nothing changed. The campus tour is a second publish,
  because it links these checkouts: `cd ~/gh/UMN-VR/tour && npm run deploy`
  builds and pushes https://umn-vr.github.io/tour/.

## UI

- New on-screen controls go in a tab. Create a new tab unless the person
  asked to add them to a tab that already exists. Never float a panel,
  overlay, or corner plate outside the window tabs unless they explicitly
  ask for that. A gizmo drawn in the world is not a substitute for that tab.
  Layout rules: [docs/docs/ui-layout.md](https://github.com/foss-earth/docs/blob/main/docs/ui-layout.md)
  (`../docs/docs/ui-layout.md` from an Earth repository).

- **Explanation on demand:** use a compact **?** button by default for
  supplementary information, diagnostics and rationale, rather than a wordy
  Details/More info action. Keep it last and available on collapsed components.
  Keep only essential terse state, errors/fallbacks,
  pending/apply feedback and decision-critical instructions visible by default.
  Do not hide information needed to understand the current state or avoid mistakes.

- **Readable control phrases:** choose label/control order by grammatical
  sense, usually `Implementation [TS / WASM] ?`. Prefix/suffix text is allowed;
  do not impose a universal slider-first or label-first order. Keep help last.

- **Paragraph grouping:** each logical component in a paragraph grid has its
  own compact rounded rectangle by default, including collapsed component
  overrides. Keep a choice's segments together inside one track within its group.
  Show what a part holds by nesting its parts' rounded rectangles inside its
  own, as matryoshka dolls hold each other, never by indentation
  ([rule](https://github.com/foss-earth/docs/blob/main/docs/ui-layout.md#nested-rectangles-show-what-holds-what)).
  Expanded component/group titles are the first naturally sized item in the
  same wrapping paragraph grid as their controls, not a separate header row.
  Full section headings are the exception and can occupy their own row.
  Paragraph grids with expandable items show expanded items first, then
  minimized items, using an order override that preserves relative order
  within each group and retains focus/control state.

- **Card actions:** when an item card has one primary action, make the whole
  card its native button/link target, including its image, title, status,
  padding and compact action label. A selected/current item stays actionable:
  open its settings/editor when available. Selection alone never disables it.
  Keep the label inside that same control; never nest interactive controls.
  Preserve separate controls for genuinely distinct secondary actions.

- **Compact controls:** arrange content as compactly as practical, using natural
  widths and wrapping paragraph grids where useful. Discrete choices use one
  rounded segmented slider with short text buttons (digits for counts: 1
  worker), selected by fill/outline; no visible radio circles. Use **Global /
  Auto / Manual**, never verbose sentences inside buttons. The **?** help button
  is last in the control row; source-link icons belong inline at the end of its
  tooltip text, never in another row button. Prefer existing recognizable icons
  over verbose action text, with accessible names. Reuse the shared UI factory
  and follow the full [control design
  spec](https://github.com/foss-earth/docs/blob/main/docs/ui-layout.md#compact-segmented-choices).

- **Sliders:** a number reads `Label [060] fps ?`, and its track shows on
  demand in a popover. Only a setting set by feel keeps its track shown
  (`alwaysShowTrack`), and that track's handle is its field. A value keeps one
  character count across its range, and **?** comes after the track. See the
  [slider rules](https://github.com/foss-earth/docs/blob/main/docs/ui-layout.md#sliders).

- **Fields and sections:** text and number fields are as wide as their text
  and read as a phrase with their label, `Date (UTC) [2026-04-20] ?`. A tab's everyday
  controls go on the tab itself (its `main` section); use a section only where
  grouping or tucking away advanced/debug settings helps, never for one
  everyday control or a title that repeats the tab. Keep titles terse
  (`Resolution/FPS`, not `Resolution and frame rate`).

## Browser testing

- **Screenshots for UI changes:** after a visible UI change, look at it in
  screenshots before saying it works, and give the person the new and changed
  images, or `build/shots/index.html`, to review. Take them with
  `node ~/gh/foss-earth/browser-testing/scripts/shots.mjs`: put every shot in
  one list in `build/` and run it once against a dev server for that test session,
  stopping any server you started before returning unless the user asked otherwise;
  crop each shot to what changed with `selector`, wait for conditions rather
  than fixed times, and hide live parts such as the frame rate and the map.
  Open only the shots it reports `new` or `changed`, and read values with a
  `print` step rather than from an image. A changed shot's old image moves to
  `build/shots/archive/<UTC time>/`. The FOSS Earth app is ready for input
  once `.foss-earth-overlay-root` exists; its frame rate shows sooner. See
  [docs/screenshots.md](https://github.com/foss-earth/browser-testing/blob/main/docs/screenshots.md).

- **Stranded Chrome clones:** a run of the installed Google Chrome that is
  killed instead of closed leaves a copy of the app, about 2 GB by `du`, under
  `/private/var/folders`. After a Chrome run you stopped, that timed out or that
  crashed, and whenever disk space comes up, run
  `~/gh/foss-earth/browser-testing/scripts/chrome-clones.sh --clean`. It keeps
  the clones of running browsers.
  [chrome-code-sign-clones.md](https://github.com/foss-earth/docs/blob/main/docs/validation/chrome-code-sign-clones.md)
  says why they appear.

## Camera and input

- **Physical UX:** camera and image navigation must feel like a physical object
  with mass and momentum. Globe drags hold the world under the contact.
  Panorama one-finger/mouse drags default to **Scroll**, mapping relative XY to
  FOV-scaled heading/pitch without an anchor; preserve this phone-tested choice
  and its release inertia. Explicit **Grab** drags and two-touch pinches hold
  the sphere ray. Two-finger trackpad swipes inside 360 spheres act as
  FOV-scaled angular impulses without cursor anchoring. Pan, turn, and zoom
  share exponential glide inertia. Follow
  [docs/docs/physical-ux.md](https://github.com/foss-earth/docs/blob/main/docs/physical-ux.md)
  and [docs/docs/camera-motion.md](https://github.com/foss-earth/docs/blob/main/docs/camera-motion.md).
