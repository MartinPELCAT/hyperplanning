import clsx from "clsx";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@components/shared/Button";

type Props = { to: string };

export const NavItem: FC<Props> = ({ children, to }) => {
  const { pathname } = useRouter();
  return (
    <Link href={to}>
      <a>
        <Button
          tabIndex={0}
          className={clsx(
            "py-2 rounded-xl ml-5 -mr-5 focus:outline-none focus:shadow-outline",
            [
              pathname === to
                ? "bg-active-icon"
                : "hover:bg-active-icon hover:bg-opacity-75",
            ]
          )}
        >
          <div className="pr-10">{children}</div>
        </Button>
      </a>
    </Link>
  );
};
