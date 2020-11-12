import { ChevronLeftIcon } from "@components/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@components/icons/ChevronRightIcon";
import { isToday, format } from "date-fns";
import { useCalendarContext } from "hooks/useCalendarContext";
import { DATE_FORMAT_FRIENDLY } from "utils/date-utils";

export const WidgetDateNavigation = () => {
  const { currentDay } = useCalendarContext();

  return (
    <div className="my-auto flex w-64 space-x-1">
      <div className="my-auto">
        <ChevronLeftIcon />
      </div>
      <div className="bg-active-icon text-white rounded-full font-bold py-1 px-8 shadow-md">
        {isToday(currentDay)
          ? "Today"
          : format(currentDay, DATE_FORMAT_FRIENDLY)}
      </div>
      <div className="my-auto">
        <ChevronRightIcon />
      </div>
    </div>
  );
};
