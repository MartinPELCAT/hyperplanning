import { CalendarIcon } from "../icons/CalendarIcon";
import { ChatIcon } from "../icons/ChatIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { SettingsIcon } from "../icons/SettingsIcon";
import { NavItem } from "./NavItem";

export const NavBar = () => {
  return (
    <div className="w-24 flex flex-col py-2">
      <div className="w-16 h-16 bg-white rounded-full mx-auto mt-10">
        {/* Image */}
      </div>
      {/* Icons groups */}
      <div className="relative my-6 space-y-6">
        <NavItem active>
          <CalendarIcon className="mx-auto" />
        </NavItem>
        <NavItem>
          <ChatIcon className="mx-auto" />
        </NavItem>
        <NavItem>
          <SearchIcon className="mx-auto" />
        </NavItem>
        <NavItem>
          <SettingsIcon className="mx-auto" />
        </NavItem>
      </div>
    </div>
  );
};
