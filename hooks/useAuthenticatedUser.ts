import { AuthenticatedUserContext } from "contexts/AuthenticatedUserContext";
import { useContext } from "react";

export const useAuthenticatedUser = () => {
  const { user } = useContext(AuthenticatedUserContext);
  return { ...user };
};
