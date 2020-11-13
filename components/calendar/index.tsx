import { useCalendarContext } from "hooks/useCalendarContext";
import { CalendarDay } from "./CalendarDay";
import { CalendarWeek } from "./CalendarWeek";
import { HoursColumn } from "./HoursColumn";

export const Calendar = () => {
  const { view, currentDay } = useCalendarContext();

  return (
    <>
      {view === "Day" ? (
        <div className="flex-1 flex">
          <HoursColumn />
          <div className="w-full">
            <CalendarDay day={currentDay} />
          </div>
        </div>
      ) : (
        <CalendarWeek />
      )}
    </>
  );
};
