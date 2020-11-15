import { AuthenticatedUserContext } from "contexts/AuthenticatedUserContext";
import { useContext } from "react";

export const useAuthenticatedUser = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  return { ...user, setUser };
};
