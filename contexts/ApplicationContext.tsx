import React, { FC } from "react";

type Props = {
  authenticatedUser: any;
};

export const ApplicationContextProvider: FC<Props> = ({ children }) => {
  return <>{children}</>;
};
