import { format, isValid, parse } from "date-fns";
import { useRouter } from "next/dist/client/router";
import { createContext, FC, useEffect, useState } from "react";
import { DATE_FORMAT_URL } from "utils/date-utils";

type ViewType = "Week" | "Day";

type ContextType = {
  currentDay: Date;
  view: ViewType;
  setView: (view: ViewType) => void;
  setCurrentDay: (date: Date) => void;
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
        },
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
