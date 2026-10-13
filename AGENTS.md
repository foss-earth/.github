# Agent instructions

These rules apply to every repository in the foss-earth organization. Each
repository's own AGENTS.md points here, and its README says what it does and
how to build and test it.

- You cannot have AI as a co-author, or your contributions will be rejected.
  Never add AI author, committer or co-author attribution to commits (see
  [CONTRIBUTING.md](CONTRIBUTING.md)).
- Versions follow [CONTRIBUTING.md](CONTRIBUTING.md): `YY.MM.DD.#N` for
  commits and `YY.MM.DD LTS` for long-term support releases.
- Keep scratch files, logs and screenshots in the repository's gitignored
  `build/` directory, not in system temp folders.
- Don't discard uncommitted work you didn't make.
- Don't deploy, rewrite published history or change repository settings
  unless asked. When asked to publish the live site, use the steps in
  [docs/deploying.md](https://github.com/foss-earth/docs/blob/main/docs/deploying.md)
  (`../docs/docs/deploying.md` from an Earth repository). Pushing `main` does
  not publish it. From a side-by-side checkout:

  ```sh
  cd ~/gh/foss-earth/app && npm run build
  cd ../foss-earth.github.io && npm run build && npm run deploy
  ```

  That copies the app under https://foss-earth.github.io/app/ and pushes the
  `gh-pages` branch of `foss-earth/foss-earth.github.io`, keeping
  `/eac-prototype/` and `/examples/`. The campus tour is a second publish,
  because it links these checkouts: `cd ~/gh/UMN-VR/tour && npm run deploy`
  builds and pushes https://umn-vr.github.io/tour/.
- Don't send personal data, accounts or credentials to another service without
  consent.
- New on-screen controls go in a tab. Create a new tab unless the person
  asked to add them to a tab that already exists. Never float a panel,
  overlay, or corner plate outside the window tabs unless they explicitly
  ask for that. A gizmo drawn in the world is not a substitute for that tab.
  Layout rules: [docs/docs/ui-layout.md](https://github.com/foss-earth/docs/blob/main/docs/ui-layout.md)
  (`../docs/docs/ui-layout.md` from an Earth repository).
