import { Terminal as XTerm } from "xterm";
import { useEffect } from "react";

const Terminal = () => {
  useEffect(() => {
    const initTerminal = async () => {
      const { Terminal } = await import("xterm");
      const xTerm = new Terminal();
      xTerm.open(document.getElementById("terminal"));
    };
    initTerminal();
  }, []);
  return <div id="terminal" />;
};

export default Terminal;
