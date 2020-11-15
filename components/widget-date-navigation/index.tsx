import { ChevronLeftIcon } from "@components/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@components/icons/ChevronRightIcon";
import { Button } from "@components/shared/Button";
import { format, addDays, subDays } from "date-fns";
import { useCalendarContext } from "hooks/useCalendarContext";
import { DATE_FORMAT } from "utils/date-utils";

export const WidgetDateNavigation = () => {
  const { currentDay, setCurrentDay } = useCalendarContext();

  return (
    <div className="my-auto flex w-64 justify-center space-x-1">
      <Button
        className="my-auto"
        onClick={() => setCurrentDay((day) => subDays(day, 1))}
      >
        <ChevronLeftIcon />
      </Button>

      <div className="bg-active-icon text-white rounded-full w-48 text-center font-bold py-1 px-8 shadow-md">
        {format(currentDay, DATE_FORMAT.DATE_SLASH)}
      </div>
      <Button
        className="my-auto"
        onClick={() => setCurrentDay((day) => addDays(day, 1))}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  );
};
