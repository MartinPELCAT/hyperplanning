import { ChevronLeftIcon } from "@components/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@components/icons/ChevronRightIcon";
import { addMonths, format, getWeek, subMonths } from "date-fns";
import { useCalendarContext } from "hooks/useCalendarContext";
import { FC } from "react";
import { getWeeksOfMonth } from "utils/date-utils";
import { WeekLine } from "./WeekLine";

export const WidgetCalendar: FC = () => {
  const { currentDay, setCurrentDay } = useCalendarContext();

  return (
    <div className="bg-white shadow rounded-3xl w-full overflow-hidden px-2 py-4 flex flex-col space-y-4">
      <div className="flex justify-between px-3 space-x-4 select-none">
        <div
          role="button"
          onClick={() => setCurrentDay((date) => subMonths(date, 1))}
        >
          <ChevronLeftIcon />
        </div>
        <span className="font-bold">{format(currentDay, "MMMM yyyy")}</span>
        <div
          role="button"
          onClick={() => setCurrentDay((date) => addMonths(date, 1))}
        >
          <ChevronRightIcon />
        </div>
      </div>
      <div>
        {getWeeksOfMonth(currentDay).map((week) => {
          return (
            <WeekLine
              key={getWeek(week[0], { weekStartsOn: 1 })}
              weekDays={week}
              monthDisplayed={currentDay}
            />
          );
        })}
      </div>
    </div>
  );
};

// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [[1,2,3,4,5,6,7], [8,9,10,11,12,13,14]]
