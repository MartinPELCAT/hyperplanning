import { ChevronLeftIcon } from "@components/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@components/icons/ChevronRightIcon";
import { Button } from "@components/shared/Button";
import { addMonths, format, getWeek, subMonths } from "date-fns";
import { useCalendarContext } from "hooks/useCalendarContext";
import { FC, useState } from "react";
import { DATE_FORMAT, getWeeksOfMonth } from "utils/date-utils";
import { WeekLine } from "./WeekLine";

export const WidgetCalendar: FC = () => {
  const { currentDay } = useCalendarContext();
  const [month, setMonth] = useState(currentDay);

  return (
    <div className="bg-white shadow rounded-3xl w-full overflow-hidden px-2 py-4 flex flex-col space-y-4">
      <div className="flex justify-between px-3 space-x-4 select-none">
        <Button onClick={() => setMonth((date) => subMonths(date, 1))}>
          <ChevronLeftIcon />
        </Button>
        <span className="font-bold">
          {format(month, DATE_FORMAT.MONTH_YEAR)}
        </span>
        <Button onClick={() => setMonth((date) => addMonths(date, 1))}>
          <ChevronRightIcon />
        </Button>
      </div>
      <div>
        {getWeeksOfMonth(month).map((week) => {
          return (
            <WeekLine
              key={getWeek(week[0], { weekStartsOn: 1 })}
              weekDays={week}
              monthDisplayed={month}
            />
          );
        })}
      </div>
    </div>
  );
};

// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [[1,2,3,4,5,6,7], [8,9,10,11,12,13,14]]
