import React, { forwardRef, LegacyRef } from "react";

type ButtonProps = JSX.IntrinsicElements["button"];
export const RefFancyButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <button ref={ref} className="FancyButton">
        {props.children}
      </button>
    );
  }
);
