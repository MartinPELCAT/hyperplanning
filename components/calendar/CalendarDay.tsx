import { useCalendarContext } from "hooks/useCalendarContext";
import { getTimestampsBetween } from "utils/date-utils";
import { DayCell } from "./DayCell";

type Props = { day: Date };

export const CalendarDay = ({ day }: Props) => {
  const { intervalConfig } = useCalendarContext();

  return (
    <table className="w-full border-collapse">
      <tbody>
        {getTimestampsBetween(day, intervalConfig).map((timestamp) => {
          return (
            <tr key={timestamp} className="border">
              <DayCell>{timestamp}</DayCell>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
