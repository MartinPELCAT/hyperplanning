import { useCalendarContext } from "hooks/useCalendarContext";
import { CalendarDay } from "./CalendarDay";
import { CalendarWeek } from "./CalendarWeek";

export const Calendar = () => {
  const { view, currentDay } = useCalendarContext();

  return (
    <table className="w-full overflow-scroll border-collapse">
      <thead>
        <tr></tr>
      </thead>
      <tbody className="">
        {view === "Day" ? (
          <tr>
            <td>
              <CalendarDay day={currentDay} />
            </td>
          </tr>
        ) : (
          <CalendarWeek />
        )}
      </tbody>
    </table>
  );
};

//Comment on va faire ca ??? 🤔
