import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

export const Spinner =
  (WrapdComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapdComponent {...otherProps} />
    );
  };
