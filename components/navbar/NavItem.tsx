import clsx from "clsx";
import React, { FC } from "react";

type Props = { active?: boolean };

export const NavItem: FC<Props> = ({ children, active = false }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={clsx(
        "py-2 rounded-xl ml-5 -mr-5 focus:outline-none focus:shadow-outline",
        [active ? "bg-active-icon" : "hover:bg-active-icon hover:bg-opacity-75"]
      )}
    >
      <div className="pr-10">{children}</div>
    </div>
  );
};
