import date from "date-and-time";

export const useDateAndTime = () => {
  const now = new Date();
  const newDate = date.format(now, "ddd, MMM DD");
  console.log(newDate)
};
