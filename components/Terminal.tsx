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
      window.onerror = (e) => {
        console.log(e.toString());
      };
      console.log = (...arrMsg) => {
        let strMsg = "";
        for (let i = 0; i < arrMsg.length; i++) {
          strMsg += JSON.stringify(
            arrMsg[i] === undefined ? "undefined" : arrMsg[i]
          ).slice(1, -1);
        }
        xTerm.write("\r\n" + strMsg);
      };
      const prefix = "Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ";
      xTerm.write(prefix);
      let lineCurr = "";
      xTerm.onKey(({ key, domEvent }) => {
        // console.log("domEvent\t\t", domEvent);
        if (domEvent.code === "Enter") {
          const fnResult = new Function(
            `try {return ${lineCurr}} catch (e) {return e}`
          );
          const retvalResult = fnResult();
          const strResult =
            retvalResult === undefined
              ? "RETURN undefined"
              : retvalResult === null
              ? "RETURN null"
              : "RETURN " + retvalResult.toString();
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
          domEvent.code === "Space" ||
          domEvent.code === "Minus" ||
          domEvent.code === "Equal" ||
          domEvent.code === "Backquote" ||
          domEvent.code === "Semicolon" ||
          domEvent.code === "Slash" ||
          domEvent.code === "Backslash" ||
          domEvent.code === "Comma" ||
          domEvent.code === "Period" ||
          domEvent.code.slice(0, 7) === "Bracket"
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
