import { DashboardIcon } from "@components/icons/DashboardIcon";
import { useAuthenticatedUser } from "hooks/useAuthenticatedUser";
import { CalendarIcon } from "../icons/CalendarIcon";
import { ChatIcon } from "../icons/ChatIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { SettingsIcon } from "../icons/SettingsIcon";
import { NavItem } from "./NavItem";

export const NavBar = () => {
  const { roles } = useAuthenticatedUser();

  return (
    <div className="w-24 flex flex-col py-2">
      <div className="w-16 h-16 bg-white rounded-full mx-auto mt-10">
        {/* Image */}
      </div>
      {/* Icons groups */}
      <div className="relative my-6 space-y-6">
        <NavItem to="/">
          <CalendarIcon className="mx-auto" />
        </NavItem>
        {roles?.includes("ADMIN") && (
          <NavItem to="/admin">
            <DashboardIcon className="mx-auto" />
          </NavItem>
        )}
        <NavItem to="/chat">
          <ChatIcon className="mx-auto" />
        </NavItem>
        <NavItem to="/search">
          <SearchIcon className="mx-auto" />
        </NavItem>
        <NavItem to="/settings">
          <SettingsIcon className="mx-auto" />
        </NavItem>
      </div>
    </div>
  );
};
