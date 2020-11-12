import clsx from "clsx";
import { useCalendarContext } from "hooks/useCalendarContext";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export const WidgetView = () => {
  const { view } = useCalendarContext();
  const { query } = useRouter();
  console.log(view);

  return (
    <div className="flex bg-white rounded-full font-bold shadow-md p-1/2">
      <Link href={{ query: { ...query, view: "Day" } }}>
        <div
          className={clsx(
            [view === "Day" && "bg-active-icon text-white"],
            "flex-1 w-24 text-center rounded-full py-1"
          )}
        >
          Day
        </div>
      </Link>
      <Link href={{ query: { ...query, view: "Week" } }}>
        <div
          className={clsx(
            [view === "Week" && "bg-active-icon text-white"],
            "flex-1 w-24 text-center rounded-full py-1"
          )}
        >
          Week
        </div>
      </Link>
    </div>
  );
};
