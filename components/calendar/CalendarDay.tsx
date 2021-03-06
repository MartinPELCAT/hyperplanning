import clsx from "clsx";
import { format, isSameDay } from "date-fns";
import { useCalendarContext } from "hooks/useCalendarContext";
import { DATE_FORMAT, getTimestampsBetween } from "utils/date-utils";
import { DayCell } from "./DayCell";

type Props = { day: Date };

export const CalendarDay = ({ day }: Props) => {
  const { intervalConfig, currentDay } = useCalendarContext();
  return (
    <>
      <div className="border-b justify-center flex pb-2">
        <div
          className={clsx(
            [
              isSameDay(day, currentDay)
                ? "bg-active-icon text-white shadow-md"
                : "bg-gray-300",
            ],
            "w-12 h-12 flex flex-col rounded-full font-bold"
          )}
        >
          <div className="m-auto flex flex-col leading-none">
            <span className="text-center">{day.getDate()}</span>
            <span className="text-sm font-thin">
              {format(day, DATE_FORMAT.DAY_SHORTTEXT)}
            </span>
          </div>
        </div>
      </div>
      {getTimestampsBetween(day, intervalConfig).map((timestamp) => {
        return (
          <div key={timestamp} className="border-b border-r">
            <DayCell />
          </div>
        );
      })}
    </>
  );
};
