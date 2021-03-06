import React, { useRef, useState } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

export let name = "Autofocus";

export function Example() {
  // This is to force an update. Verifying that updates don't mess around with
  // react focus lock.
  // https://github.com/reach/reach-ui/issues/396
  const [, forceUpdate] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const button = useRef(null);
  return (
    <div>
      <button onClick={() => setShowDialog(true)}>Show Dialog</button>
      <Dialog
        aria-label="Announcement"
        isOpen={showDialog}
        initialFocusRef={button}
      >
        <h3>Tab Around!</h3>
        <div>
          <input
            defaultValue="Just a boring field!"
            onBlur={() => forceUpdate({})}
          />
        </div>
        <div>
          <input
            defaultValue="Nothing to see here!"
            onBlur={() => forceUpdate({})}
          />
        </div>
        <button onClick={() => setShowDialog(false)}>Close Dialog</button>
        <button ref={button}>I'm focused first</button>
      </Dialog>
    </div>
  );
}
