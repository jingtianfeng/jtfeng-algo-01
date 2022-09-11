import { useEffect } from "react";

const Terminal = () => {
  useEffect(() => {
    const initTerminal = async () => {
      const { Terminal } = await import("xterm");
      const { FitAddon } = await import("xterm-addon-fit");
      const xTerm = new Terminal({
        cursorBlink: true,
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
        } else if (domEvent.code === "Backspace" && lineCurr.length > 0) {
          lineCurr = lineCurr.slice(0, -1);
          xTerm.write("\b \b");
        } else if (
          domEvent.code.slice(0, 3) === "Key" ||
          domEvent.code.slice(0, 5) === "Digit" ||
          domEvent.code === "Quote" ||
          domEvent.code === 'Space' ||
          domEvent.code === 'Minus' ||
          domEvent.code === 'Equal' ||
          domEvent.code === 'Backquote' ||
          domEvent.code === 'Semicolon' ||
          domEvent.code === 'Slash' ||
          domEvent.code === 'Backslash'
        ) {
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
