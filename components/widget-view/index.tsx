import clsx from "clsx";
import { isToday } from "date-fns";
import { useCalendarContext } from "hooks/useCalendarContext";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export const WidgetView = () => {
  const { view, currentDay, setCurrentDay } = useCalendarContext();
  const { query } = useRouter();

  return (
    <>
      <div className="flex bg-white rounded-full font-bold shadow-md p-1/2">
        <Link href={{ query: { ...query, view: "Day" } }}>
          <div
            role="button"
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
            role="button"
            className={clsx(
              [view === "Week" && "bg-active-icon text-white"],
              "flex-1 w-24 text-center rounded-full py-1"
            )}
          >
            Week
          </div>
        </Link>
      </div>
      <div className="flex bg-white rounded-full font-bold shadow-md p-1/2">
        <div
          role="button"
          onClick={() => setCurrentDay(new Date())}
          className={clsx(
            [isToday(currentDay) && "bg-active-icon text-white"],
            "flex-1 w-24 text-center rounded-full py-1"
          )}
        >
          Today
        </div>
      </div>
    </>
  );
};
