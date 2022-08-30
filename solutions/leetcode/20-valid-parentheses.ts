const isValid = (s: string): boolean => {
  console.log("s: ", s);
  // ============================================================================
  // 1. Handle edge cases
  // ----------------------------------------------------------------------------
  // if               s is empty
  // then             return true
  // else if          s only has 1 bracket
  // then             return false
  // else if          s starts with a closing bracket
  // then             return false
  // else if          s starts with NOT a starting bracket
  // then             return false
  // else             ...
  // ----------------------------------------------------------------------------
  // OBSERVATIONS     at this point, s is guaranteed to start with a
  //                  starting bracket
  // ----------------------------------------------------------------------------
  if (s.length === 0) {
    console.log("S IS EMPTY");
    return true;
  } else if (s.length === 1) {
    console.log("S ONLY HAS 1 BRACKET");
    return false;
  } else if ([")", "}", "]"].includes(s.charAt(0))) {
    console.log("S STARTS WITH A CLOSING BRACKET");
    return false;
  } else if (["(", "{", "["].includes(s.charAt(0)) === false) {
    console.log("S STARTS WITH A NON-BRACKET CHARACTER");
    return false;
  } else {
    // ============================================================================
    // 2. Try examples
    // ----------------------------------------------------------------------------
    // ============================================================================
    // 3. Define isValid
    // ----------------------------------------------------------------------------
    const arrBracketStarting = ["(", "{", "["];
    const arrBracketClosing = [")", "}", "]"];
    let stkBracket = [s.charAt(0)];
    for (let i = 1; i < s.length; i++) {
      console.log("stkBracket: ", stkBracket);
      const char = s.charAt(i);
      if (
        arrBracketStarting.includes(char) === false &&
        arrBracketClosing.includes(char) === false
      ) {
        console.log(`CHARACTER AT INDEX ${i} IS NON-BRACKET`);
        return false;
      } else if (arrBracketStarting.includes(char)) {
        stkBracket.push(char);
      } else {
        if (
          arrBracketClosing.indexOf(char) !==
          arrBracketStarting.indexOf(stkBracket[stkBracket.length - 1])
        ) {
          console.log("CLOSING BRACKET DOES NOT MATCH STARTING BRACKET");
          return false;
        } else {
          stkBracket.pop();
        }
      }
    }
    if (stkBracket.length > 0) {
      console.log("AFTER ITERATION STACK IS NOT EMPTY");
      return false;
    } else {
      console.log("ALL BRACKETS MATCH");
      return true;
    }
  }
};

export default isValid;
