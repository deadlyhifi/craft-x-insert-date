export default function calendarDates(date: Date) {
  // calculate feb days based on leap year.
  const february =
    new Date(date.getFullYear(), 1, 29).getDate() === 29 ? 29 : 28;
  const monthDayCount = [
    31, // jan
    february,
    31, // mar
    30, // apr
    31, // may
    30, // jun
    31, // jul
    31, // aug
    30, // sep
    31, // oct
    30, // nov
    31, // dec
  ];
  const dayCount = monthDayCount[date.getMonth()];
  const firstDay = new Date(date.getFullYear(), date.getMonth()).getDay();

  const daysArray = Array.from(Array(dayCount + 1).keys());
  daysArray.splice(0, 1); // remove leading 0

  // JS getDay starts on a Sunday.
  // Prepend with the days the date doesn't start on.
  const prependCount = firstDay === 0 ? 6 : firstDay - 1;
  const prepend = Array.from(Array(prependCount), () => 0);

  return [...prepend, ...daysArray];
}
