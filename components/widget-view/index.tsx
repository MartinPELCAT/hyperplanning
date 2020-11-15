import { Button } from "@components/shared/Button";
import clsx from "clsx";
import { isToday } from "date-fns";
import { useCalendarContext } from "hooks/useCalendarContext";

export const WidgetView = () => {
  const { view, currentDay, setCurrentDay, setView } = useCalendarContext();

  return (
    <>
      <div className="flex bg-white rounded-full font-bold shadow-md p-1/2">
        <Button
          className={clsx(
            [view === "Day" && "bg-active-icon text-white"],
            "flex-1 w-24 text-center rounded-full py-1"
          )}
          onClick={() => setView("Day")}
        >
          Day
        </Button>
        <Button
          className={clsx(
            [view === "Week" && "bg-active-icon text-white"],
            "flex-1 w-24 text-center rounded-full py-1"
          )}
          onClick={() => setView("Week")}
        >
          Week
        </Button>
      </div>
      <div className="flex bg-white rounded-full font-bold shadow-md p-1/2">
        <Button
          onClick={() => setCurrentDay(new Date())}
          className={clsx(
            [isToday(currentDay) && "bg-active-icon text-white"],
            "flex-1 w-24 text-center rounded-full py-1"
          )}
        >
          Today
        </Button>
      </div>
    </>
  );
};
