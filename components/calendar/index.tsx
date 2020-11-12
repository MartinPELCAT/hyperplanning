import { useCalendarContext } from "hooks/useCalendarContext";
import { CalendarDay } from "./CalendarDay";
import { CalendarWeek } from "./CalendarWeek";

export const Calendar = () => {
  const { view, currentDay } = useCalendarContext();

  return (
    <>
      {view === "Day" ? (
        <div className="flex-1">
          <CalendarDay day={currentDay} isFirst />
        </div>
      ) : (
        <CalendarWeek />
      )}
    </>
  );
};

//Comment on va faire ca ??? 🤔
