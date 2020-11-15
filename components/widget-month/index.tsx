import { format } from "date-fns";
import { useCalendarContext } from "hooks/useCalendarContext";
import { DATE_FORMAT } from "utils/date-utils";

export const WidgetMonth = () => {
  const { currentDay } = useCalendarContext();
  return (
    <div className="flex-1 ml-12 pl-2 font-bold text-5xl">
      {format(currentDay, DATE_FORMAT.MONTH_FULLTEXT)}
    </div>
  );
};
