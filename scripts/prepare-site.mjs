import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const exportDirectory = "out";
const deploymentDirectory = "dist";
const workerEntry = join("scripts", "site-worker.js");
const hostingMetadata = join(".openai", "hosting.json");

if (!existsSync(exportDirectory)) {
  throw new Error(`Expected Next.js static export at "${exportDirectory}".`);
}

if (!existsSync(hostingMetadata)) {
  throw new Error(`Expected deployment metadata at "${hostingMetadata}".`);
}

rmSync(deploymentDirectory, { recursive: true, force: true });
mkdirSync(join(deploymentDirectory, "server"), { recursive: true });
mkdirSync(join(deploymentDirectory, ".openai"), { recursive: true });

cpSync(workerEntry, join(deploymentDirectory, "server", "index.js"));
cpSync(hostingMetadata, join(deploymentDirectory, ".openai", "hosting.json"));
cpSync(exportDirectory, join(deploymentDirectory, "assets"), { recursive: true });

console.log(`Prepared asset-worker deployment directory: ${deploymentDirectory}`);
