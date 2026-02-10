"use client";

import { TypeAnimation } from "react-type-animation";

export function TerminalTyping() {
  return (
    <span className="inline">
      <span className="text-gray-500 dark:text-gray-500">Connect --with </span>
      <TypeAnimation
        sequence={[
          "Augment Code",
          2000,
          "Claude Code",
          2000,
          "OpenCode",
          2000,
          "OpenClaw",
          2000,
          "AI Coding Tools",
          3000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-black dark:text-white"
      />
      <span className="animate-cursor-blink">▌</span>
    </span>
  );
}
