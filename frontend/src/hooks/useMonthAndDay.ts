export const useMonthAndDay = (dateString: Date|string|undefined): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
  };
  return date.toLocaleDateString("en-US", options);
};
