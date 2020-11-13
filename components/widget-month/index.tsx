import { format } from "date-fns";
import { useCalendarContext } from "hooks/useCalendarContext";

export const WidgetMonth = () => {
  const { currentDay } = useCalendarContext();
  return (
    <div className="flex-1 ml-12 pl-2 font-bold text-5xl">
      {format(currentDay, "MMMM")}
    </div>
  );
};
