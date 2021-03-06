import { useCalendarContext } from "hooks/useCalendarContext";
import { getDaysOfWeek } from "utils/date-utils";
import { CalendarDay } from "./CalendarDay";
import { HoursColumn } from "./HoursColumn";

export const CalendarWeek = () => {
  const { currentDay } = useCalendarContext();
  return (
    <div className="flex-1 flex">
      <HoursColumn />
      {getDaysOfWeek(currentDay).map((day) => {
        return (
          <div key={day.getTime()} className={"w-1/5"}>
            <CalendarDay day={day} />
          </div>
        );
      })}
    </div>
  );
};
