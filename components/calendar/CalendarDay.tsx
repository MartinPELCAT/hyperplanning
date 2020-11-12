import clsx from "clsx";
import { format, isSameDay, isToday } from "date-fns";
import { useCalendarContext } from "hooks/useCalendarContext";
import { getTimestampsBetween } from "utils/date-utils";
import { DayCell } from "./DayCell";

type Props = { day: Date; isFirst: boolean };

export const CalendarDay = ({ day, isFirst }: Props) => {
  const { intervalConfig, currentDay } = useCalendarContext();
  return (
    <>
      <div className="border-b justify-center flex pb-2">
        <div
          className={clsx(
            [
              isSameDay(day, currentDay)
                ? "bg-active-icon text-white"
                : "bg-gray-300",
            ],
            "w-12 h-12 flex flex-col rounded-full font-bold"
          )}
        >
          <div className="m-auto flex flex-col leading-none">
            <span className="text-center">{day.getDate()}</span>
            <span className="text-sm font-thin">{format(day, "iii")}</span>
          </div>
        </div>
      </div>
      {getTimestampsBetween(day, intervalConfig).map((timestamp) => {
        return (
          <div
            key={timestamp}
            className={clsx([isFirst && "border-l"], "border-b border-r")}
          >
            <DayCell></DayCell>
          </div>
        );
      })}
    </>
  );
};
