import { useCalendarContext } from "hooks/useCalendarContext";
import { getTimestampsBetween } from "utils/date-utils";
import { DayCell } from "./DayCell";

type Props = { day: Date };

export const CalendarDay = ({ day }: Props) => {
  const { intervalConfig } = useCalendarContext();

  return (
    <>
      {getTimestampsBetween(day, intervalConfig).map((timestamp) => {
        return (
          <div key={timestamp} className="border-b border-r">
            <DayCell></DayCell>
          </div>
        );
      })}
    </>
  );
};
