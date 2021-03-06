import clsx from "clsx";
import { useCalendarContext } from "hooks/useCalendarContext";
import { format } from "date-fns";
import { DATE_FORMAT, getTimestampsBetween } from "utils/date-utils";
import { DayCell } from "./DayCell";

export const HoursColumn = () => {
  const { currentDay, intervalConfig } = useCalendarContext();
  return (
    <div className="flex flex-col">
      <div className="mb-px justify-center flex pb-2">
        <div
          className={clsx("w-12 h-12 flex flex-col rounded-full font-bold")}
        ></div>
      </div>
      {getTimestampsBetween(currentDay, intervalConfig).map((timestamp) => {
        return (
          <div
            key={timestamp}
            className="border-r text-xs whitespace-no-wrap mb-px leading-none"
          >
            <DayCell>{format(timestamp, DATE_FORMAT.HOURS_MINUTES)}</DayCell>
          </div>
        );
      })}
    </div>
  );
};
