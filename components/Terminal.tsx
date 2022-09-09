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
      const prefix = "Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ";
      xTerm.write(prefix);
      let lineCurr = "";
      xTerm.onKey(({ key, domEvent }) => {
        console.log("domEvent\t\t", domEvent);
        if (domEvent.code === "Enter") {
          const fnResult = new Function(`return ${lineCurr}`);
          const strResult = fnResult().toString();
          xTerm.write("\r\n" + strResult);
          xTerm.write("\r\n" + prefix);
          lineCurr = "";
        } else {
          lineCurr += key;
          xTerm.write(key);
        }
      });
    };
    initTerminal();
  }, []);
  return <div id="terminal" />;
};

export default Terminal;
