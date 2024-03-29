export default function isValid(s: string): boolean {
  console.log("s: ", s);
  // ============================================================================
  // 1. Handle edge cases
  // ----------------------------------------------------------------------------
  // if               s is empty
  // then             return true
  // else if          s only has 1 bracket
  // then             return false
  // else if          s starts with a closed bracket
  // then             return false
  // else if          s starts with a non-bracket character
  // then             return false
  // else             ...
  // ----------------------------------------------------------------------------
  // OBSERVATIONS     At this point, s is guaranteed to start with an
  //                  open bracket, and to have a 2nd character.
  // ----------------------------------------------------------------------------
  if (s.length === 0) {
    console.log("S IS EMPTY");
    return true;
  } else if (s.length === 1) {
    console.log("S ONLY HAS 1 BRACKET");
    return false;
  } else if ([")", "}", "]"].includes(s.charAt(0))) {
    console.log("S STARTS WITH A CLOSED BRACKET");
    return false;
  } else if (["(", "{", "["].includes(s.charAt(0)) === false) {
    console.log("S STARTS WITH A NON-BRACKET CHARACTER");
    return false;
  } else {
    // ============================================================================
    // 2. Try examples
    // ----------------------------------------------------------------------------
    //
    // DATA STRUCT.   This question reminds me of a call stack:
    //                {
    //                    {
    //                        {
    //                            ...
    //                        }
    //                    }
    //                }
    //                where each open bracket must be closed,
    //                or the compiler will throw an error.
    //
    //                Additionally, there are 3 types of brackets: () [] {}
    //                and each open bracket must be closed by its match.
    //
    //                Let us use an array that serves as a stack to:
    //                  1. push open brackets
    //                  2. pop matching open-closed brackets
    //                  3. handle non-matching brackets
    //                  4. handle edge cases such as non-bracket characters
    //
    // ----------------------------------------------------------------------------
    //
    // s              (    )
    //                -
    // stkBracket     (
    //
    //
    // s              (    )
    //                     -
    // stkBracket     (    )
    //                x....x
    //
    //
    // s              (    )
    //                          -
    // stkBracket
    //                ALL BRACKETS MATCH
    //                return true
    //
    // ----------------------------------------------------------------------------
    //
    // s              (    )    [    ]    {    }
    //                -
    // stkBracket     (
    //
    //
    // s              (    )    [    ]    {    }
    //                     -
    // stkBracket     (    )
    //                x....x
    //
    //
    // s              (    )    [    ]    {    }
    //                          -
    // stkBracket     [
    //
    //
    // s              (    )    [    ]    {    }
    //                               -
    // stkBracket     [    ]
    //                x....x
    //
    //
    // s              (    )    [    ]    {    }
    //                                    -
    // stkBracket     {
    //
    //
    // s              (    )    [    ]    {    }
    //                                         -
    // stkBracket     {    }
    //                x....x
    //
    //
    // s              (    )    [    ]    {    }
    //                                              -
    // stkBracket
    //                ALL BRACKETS MATCH
    //                return true
    //
    // ----------------------------------------------------------------------------
    //
    // s              (    ]
    //                -
    // stkBracket     (
    //
    //
    // s              (    ]
    //                     -
    // stkBracket     (    ]
    //                CLOSED BRACKET DOES NOT MATCH OPEN BRACKET
    //                return false
    //
    // ----------------------------------------------------------------------------
    //
    // OBSERVATIONS   After iterating through s, there are 2 possible outcomes:
    //                  1. stkBracket is empty     -> return true
    //                  2. stkBracket is NOT empty -> return false
    //
    // SPACE          O(n)
    // TIME           O(n)
    // worst-case     ([{([{([{([{([{([{([{([{([{([{([{([{([{([{...
    //
    // ============================================================================
    // 3. Define isValid
    // ----------------------------------------------------------------------------
    const arrBracketOpen = ["(", "{", "["];
    const arrBracketClosed = [")", "}", "]"];
    let stkBracket = [s.charAt(0)];
    for (let i = 1; i < s.length; i++) {
      console.log("stkBracket: ", stkBracket);
      const char = s.charAt(i);
      if (!arrBracketOpen.includes(char) && !arrBracketClosed.includes(char)) {
        console.log(`CHARACTER AT INDEX ${i} IS NOT A BRACKET`);
        return false;
      } else if (arrBracketOpen.includes(char)) {
        stkBracket.push(char);
      } else {
        if (
          arrBracketClosed.indexOf(char) !==
          arrBracketOpen.indexOf(stkBracket[stkBracket.length - 1])
        ) {
          console.log("CLOSED BRACKET DOES NOT MATCH OPEN BRACKET");
          return false;
        } else {
          stkBracket.pop();
        }
      }
    }
    if (stkBracket.length > 0) {
      console.log("AFTER ITERATION, STACK IS NOT EMPTY");
      return false;
    } else {
      console.log("ALL BRACKETS MATCH");
      return true;
    }
  }
}
