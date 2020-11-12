import { useCalendarContext } from "hooks/useCalendarContext";
import { FC } from "react";

export const WidgetCalendar: FC = () => {
  const { view } = useCalendarContext();
  return (
    <div className="bg-white shadow rounded-3xl w-full h-64 overflow-hidden p-2">
      {view}
    </div>
  );
};
