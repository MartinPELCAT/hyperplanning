import { useCalendarContext } from "hooks/useCalendarContext";
import { getDaysOfWeek } from "utils/date-utils";
import { CalendarDay } from "./CalendarDay";

export const CalendarWeek = () => {
  const { currentDay } = useCalendarContext();
  return (
    <tr>
      {getDaysOfWeek(currentDay).map((day) => {
        return (
          <td key={day.getTime()}>
            <CalendarDay day={day} />
          </td>
        );
      })}
    </tr>
  );
};
