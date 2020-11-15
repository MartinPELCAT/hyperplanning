import clsx from "clsx";
import { format, isSameDay, isSameMonth, isSameWeek } from "date-fns";
import { useCalendarContext } from "hooks/useCalendarContext";
import { FC } from "react";
import { DATE_FORMAT } from "utils/date-utils";

type Props = { weekDays: Date[]; monthDisplayed: Date };

export const WeekLine: FC<Props> = ({ weekDays, monthDisplayed }) => {
  const { currentDay, setCurrentDay } = useCalendarContext();

  return (
    <div
      className={clsx(
        [
          isSameWeek(weekDays[0], currentDay, { weekStartsOn: 1 }) &&
            "bg-active-icon bg-opacity-50 rounded-md",
        ],
        "flex"
      )}
    >
      {weekDays.map((day) => {
        return (
          <div
            key={day.getTime()}
            onClick={() => setCurrentDay(day)}
            role="button"
            className={clsx(
              [
                isSameMonth(day, monthDisplayed)
                  ? isSameWeek(day, currentDay, { weekStartsOn: 1 })
                    ? isSameDay(currentDay, day)
                      ? "bg-active-icon rounded-md text-white font-bold"
                      : "text-gray-800"
                    : "text-gray-600"
                  : "text-gray-400",
              ],
              "flex-1 py-2 text-center leading-none select-none"
            )}
          >
            {format(day, DATE_FORMAT.DAY_NUMBER)}
          </div>
        );
      })}
    </div>
  );
};
