import { cpSync, existsSync, rmSync } from "node:fs";

const exportDirectory = "out";
const deploymentDirectory = "dist";

if (!existsSync(exportDirectory)) {
  throw new Error(
    `Expected Next.js static export at "${exportDirectory}". Ensure output is set to "export".`
  );
}

rmSync(deploymentDirectory, { recursive: true, force: true });
cpSync(exportDirectory, deploymentDirectory, { recursive: true });

console.log(`Prepared static deployment directory: ${deploymentDirectory}`);
