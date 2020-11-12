import { format, isValid, parse } from "date-fns";
import { useRouter } from "next/dist/client/router";
import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { DateHourMinute, DATE_FORMAT_URL } from "utils/date-utils";

type ViewType = "Week" | "Day";

type ContextType = {
  currentDay: Date;
  view: ViewType;
  setView: Dispatch<SetStateAction<ViewType>>;
  setCurrentDay: Dispatch<SetStateAction<Date>>;
  intervalConfig: { start: DateHourMinute; end: DateHourMinute; step: number };
};

export const CalendarContext = createContext<{ calendar: ContextType }>(
  undefined
);

export const CalendarContextProvider: FC = ({ children }) => {
  const { query, replace } = useRouter();
  const [view, setView] = useState<ViewType>(() => {
    if (!query.view) return "Week";
    if (query.view === "Day") return query.view;
    return "Week";
  });
  const [currentDay, setCurrentDay] = useState<Date>(() => {
    if (
      typeof query.date !== "string" ||
      !isValid(parse(query.date, DATE_FORMAT_URL, new Date()))
    )
      return new Date();
    return parse(query.date, DATE_FORMAT_URL, new Date());
  });

  useEffect(() => {
    if (!query.view) return setView("Week");
    if (query.view === "Day") return setView(query.view);
    return setView("Week");
  }, [query]);

  useEffect(() => {
    replace({
      query: { view, date: format(currentDay, DATE_FORMAT_URL) },
    });
  }, [currentDay, view]);

  return (
    <CalendarContext.Provider
      value={{
        calendar: {
          currentDay,
          setCurrentDay,
          setView,
          view,
          intervalConfig: {
            start: { hour: 6, minutes: 0 },
            end: { hour: 18, minutes: 0 },
            step: 30,
          },
        },
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
