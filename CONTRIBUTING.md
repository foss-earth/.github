# Contributing

Thank you for improving this project. Before opening a pull request, discuss material new features or large changes in an issue so the implementation fits the project's direction.

## Development

Follow the repository's README for setup and checks. Follow its language, strict types, formatting and lint rules; keep changes focused with meaningful tests. Do not add generated build output, credentials, API keys, vendored copies of other code or unrelated formatting changes.

## Versions

Every repository names its versions after its commits, as `YY.MM.DD.#N`: the
last two digits of the year, the month and the day of the commit (in the time
zone it was made in), then `#` and the commit's count among that day's commits,
starting at 1. `26.10.11.#1` is the first commit made on October 11, 2026.
Versions are read from the Git history, so nobody sets them by hand.
`package.json` can't hold this form, so its `version` field is not the
repository's version.

Long-term support releases are named `YY.MM.DD LTS`, such as `26.10.11 LTS`,
and tagged `YY.MM.DD-LTS` in Git, because tag names can't contain spaces.

## Rights and licensing

By submitting a contribution, you confirm that you have the right to submit it under the repository's applicable licensing terms and that it does not include confidential, proprietary, or copied material without permission. Identify all third-party code, data, models, textures, sounds, fonts, and references in the pull request.

Creative assets need explicit provenance records and the owning repository's asset-license guidance. Do not submit a model or reference merely because it is publicly downloadable.

## Pull requests

Explain the user-visible result, relevant tests, and any limitations. Update documentation when public behavior, setup, data sources, or licensing changes. Maintainers may request a smaller change, more tests, or provenance evidence before merge.

## Commit attribution

You cannot have AI as a co-author, or your contributions will be rejected.

Do not add AI author, committer or co-author attribution. Branded AI contributor
credits put a vendor name in permanent contribution records and can imply
endorsement. This project treats that promotion as advertising and bans it in
contribution credits to keep contributor recognition independent of vendor
promotion and responsibility clear. The human submitting work remains
accountable for accuracy, review responses, provenance and rights. Required
license notices, factual tool documentation and legitimate human credits remain
valid.
