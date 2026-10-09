import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, realpathSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const root = realpathSync(process.argv[2] ?? here);
const read = name => readFileSync(path.join(root, name), "utf8");
const metadata = JSON.parse(read("community.json"));
const manifest = JSON.parse(read("package.json"));
const rule = "You cannot have AI as a co-author, or your contributions will be rejected.";
assert.equal(manifest.name, "@foss-earth/community");
assert.equal(metadata.contributionPolicy.rule, rule);
assert(!read("README.md").includes(rule));
for (const name of ["CODE_OF_CONDUCT.md", "CONTRIBUTING.md", "LICENSE", "SECURITY.md"]) {
  assert(read(name).length > 0, name);
  assert(read("README.md").includes(`](${name})`), `Working local README link for ${name}`);
}
const contributing = read("CONTRIBUTING.md");
assert(contributing.indexOf(rule) > contributing.indexOf("## Commit attribution"));
assert(contributing.toLowerCase().includes("advertising"));
assert(contributing.toLowerCase().includes("accountab"));
assert(read("AGENTS.md").includes(rule));
const provenance = JSON.parse(read("SOURCE_PROVENANCE.json"));
const license = provenance.mappings.find(row => row.destinationPath === "LICENSE");
assert.equal(createHash("sha256").update(readFileSync(path.join(root, "LICENSE"))).digest("hex"), license.sourceSha256);
for (const target of Object.values(manifest.exports)) {
  assert.equal(typeof target, "string");
  const resolved = realpathSync(path.join(root, target));
  assert(resolved.startsWith(root + path.sep));
  assert(readFileSync(resolved).length > 0);
}
assert.equal(metadata.sharedAttribution.metadataIncludesDocsOnly, true);
assert.equal(metadata.sharedAttribution.nextCheckedPolicyPin.startsWith("pending"), true);
console.log("Community documents, exact inherited license, local links and all data exports passed.");
