import date from "date-and-time";

export const useDayAndWeek = () => {
  const now = new Date();
  const dayDate = date.format(now, "dddd, MMMM DD");
  const hour = parseInt(date.format(now, "HH"), 10);
  let timeOfDay:string;
  if (hour < 12) {
    timeOfDay = "morning";
  } else if (hour >= 12 && hour < 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }
  return {dayDate, timeOfDay}
};
