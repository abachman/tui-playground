#!/usr/bin/env python3

import sys
import time
import random

print(f"\x1b]9;4;3;\x1b\\", end="")
sys.stdout.flush()
time.sleep(2)

for i in range(100):
    percent = i + 1

    print(f"\x1b]9;4;1;{percent}\x1b\\", end="")

    filled = percent // 5
    if percent < 100:
        bar = "=" * filled + ">" + " " * (19 - filled)
    else:
        bar = "=" * 20
    print(f"\r[ {bar} ] {percent:>3} / 100% complete", end="")

    sys.stdout.flush()
    time.sleep(random.random() ** 2 * 0.4)

# Clear the progress indicator and move to next line when done
print("\x1b]9;4;0;0\x1b\\", end="")
print()
