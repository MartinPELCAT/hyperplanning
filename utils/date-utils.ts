import {
  addMinutes,
  eachDayOfInterval,
  endOfWeek,
  setHours,
  setMinutes,
  startOfWeek,
} from "date-fns";

export const DATE_FORMAT_URL = "dd-MM-yyyy";

export const DATE_FORMAT_FRIENDLY = "dd / MM / yyyy";

export type DateHourMinute = { hour: number; minutes: number };

export const getTimestampsBetween = (
  day: Date,
  intervalConfig: { start: DateHourMinute; end: DateHourMinute; step: number }
): Array<number> => {
  const startDate = setMinutes(
    setHours(day, intervalConfig.start.hour),
    intervalConfig.start.minutes
  );

  const endDate = setMinutes(
    setHours(day, intervalConfig.end.hour),
    intervalConfig.end.minutes
  );

  const timestamps = [];
  for (let i = startDate; i < endDate; i = addMinutes(i, intervalConfig.step)) {
    timestamps.push(i.getTime());
  }
  return timestamps;
};

type Options = {
  locale?: Locale;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

export const getDaysOfWeek = (day: Date): Date[] => {
  const options: Options = { weekStartsOn: 1 };
  return eachDayOfInterval({
    start: startOfWeek(day, options),
    end: endOfWeek(day, options),
  });
};
