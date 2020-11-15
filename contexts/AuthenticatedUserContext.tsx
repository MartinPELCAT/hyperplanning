import { GetUserFromTokenQuery } from "apollo/__generated__";
import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

type AuthenticatedUserType = GetUserFromTokenQuery["getUserFromToken"];

type Props = {
  authenticatedUser: AuthenticatedUserType;
};

type Context = {
  user: AuthenticatedUserType;
  setUser: Dispatch<SetStateAction<AuthenticatedUserType>>;
};

export const AuthenticatedUserContext = createContext<Context>(undefined);

export const AuthenticatedUserContextProvider: FC<Props> = ({
  children,
  authenticatedUser,
}) => {
  const [user, setUser] = useState<AuthenticatedUserType>(authenticatedUser);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
