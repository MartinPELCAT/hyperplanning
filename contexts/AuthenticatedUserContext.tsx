import { GetUserFromTokenQuery } from "apollo/__generated__";
import { createContext, FC, useState } from "react";

type AuthenticatedUserType = GetUserFromTokenQuery["getUserFromToken"];

type Props = {
  authenticatedUser: AuthenticatedUserType;
};

type Context = {
  user: AuthenticatedUserType;
};

export const AuthenticatedUserContext = createContext<Context>(undefined);

export const AuthenticatedUserContextProvider: FC<Props> = ({
  children,
  authenticatedUser,
}) => {
  const [user] = useState<AuthenticatedUserType>(authenticatedUser);
  return (
    <AuthenticatedUserContext.Provider value={{ user }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
