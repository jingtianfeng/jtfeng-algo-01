import { useEffect } from "react";

const Terminal = () => {
  useEffect(() => {
    const initTerminal = async () => {
      const { Terminal } = await import("xterm");
      const { FitAddon } = await import("xterm-addon-fit");
      const xTerm = new Terminal({
        cursorBlink: "block",
      });
      const addonFit = new FitAddon();
      xTerm.loadAddon(addonFit);
      xTerm.open(document.getElementById("terminal") as HTMLDivElement);
      addonFit.fit();
    };
    initTerminal();
  }, []);
  return <div id="terminal" />;
};

export default Terminal;
