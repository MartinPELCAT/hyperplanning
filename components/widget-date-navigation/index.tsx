import { ChevronLeftIcon } from "@components/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@components/icons/ChevronRightIcon";
import { isToday, format, addDays, subDays } from "date-fns";
import { useCalendarContext } from "hooks/useCalendarContext";
import { DATE_FORMAT_FRIENDLY } from "utils/date-utils";

export const WidgetDateNavigation = () => {
  const { currentDay, setCurrentDay } = useCalendarContext();

  return (
    <div className="my-auto flex w-64 justify-center space-x-1">
      <div
        className="my-auto"
        role="button"
        onClick={() => setCurrentDay((day) => subDays(day, 1))}
      >
        <ChevronLeftIcon />
      </div>
      <div className="bg-active-icon text-white rounded-full w-48 text-center font-bold py-1 px-8 shadow-md">
        {isToday(currentDay)
          ? "Today"
          : format(currentDay, DATE_FORMAT_FRIENDLY)}
      </div>
      <div
        className="my-auto"
        role="button"
        onClick={() => setCurrentDay((day) => addDays(day, 1))}
      >
        <ChevronRightIcon />
      </div>
    </div>
  );
};
