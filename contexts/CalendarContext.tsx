import { isValid } from "date-fns";
import { useRouter } from "next/dist/client/router";
import { createContext, FC, useEffect, useState } from "react";

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
  const { query } = useRouter();
  const [view, setView] = useState<ViewType>(() => {
    if (!query.view) return "Week";
    if (query.view === "Day") return query.view;
    return "Week";
  });
  const [currentDay, setCurrentDay] = useState<Date>(() => {
    if (!isValid(query.date) || typeof query.date !== "string")
      return new Date();
    return new Date(query.date);
  });

  useEffect(() => {
    console.log("useEffect", query.view);

    if (!query.view) return setView("Week");
    if (query.view === "Day") return setView(query.view);
    return setView("Week");
  }, [query]);

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
