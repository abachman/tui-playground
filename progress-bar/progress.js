#!/usr/bin/env node

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  process.stdout.write(`\x1b]9;4;3;\x1b\\`);
  await sleep(2000);

  for (let i = 0; i < 100; i++) {
    const percent = i + 1;

    process.stdout.write(`\x1b]9;4;1;${percent}\x1b\\`);

    const filled = Math.floor(percent / 5);
    const bar = percent < 100
      ? "=".repeat(filled) + ">" + " ".repeat(19 - filled)
      : "=".repeat(20);
    process.stdout.write(`\r[ ${bar} ] ${String(percent).padStart(3)} / 100% complete`);

    await sleep(Math.random() ** 2 * 400);
  }

  // Clear the progress indicator and move to next line when done
  process.stdout.write("\x1b]9;4;0;0\x1b\\");
  process.stdout.write("\n");
})();
