import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const openNextDirectory = ".open-next";
const deploymentDirectory = "dist";
const workerEntry = join(openNextDirectory, "worker.js");
const hostingMetadata = join(".openai", "hosting.json");

if (!existsSync(workerEntry)) {
  throw new Error(
    `Expected OpenNext worker at "${workerEntry}". Run the OpenNext Cloudflare build first.`
  );
}

if (!existsSync(hostingMetadata)) {
  throw new Error(`Expected deployment metadata at "${hostingMetadata}".`);
}

rmSync(deploymentDirectory, { recursive: true, force: true });
mkdirSync(join(deploymentDirectory, "server"), { recursive: true });
mkdirSync(join(deploymentDirectory, ".openai"), { recursive: true });

cpSync(openNextDirectory, join(deploymentDirectory, "server"), { recursive: true });
cpSync(workerEntry, join(deploymentDirectory, "server", "index.js"));
cpSync(hostingMetadata, join(deploymentDirectory, ".openai", "hosting.json"));

const openNextAssets = join(openNextDirectory, "assets");
if (existsSync(openNextAssets)) {
  cpSync(openNextAssets, join(deploymentDirectory, "assets"), { recursive: true });
}

console.log(`Prepared OpenNext deployment directory: ${deploymentDirectory}`);
