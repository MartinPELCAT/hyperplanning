import { CalendarContext } from "contexts/CalendarContext";
import { useContext } from "react";

export const useCalendarContext = () => {
  const { calendar } = useContext(CalendarContext);
  return { ...calendar };
};
