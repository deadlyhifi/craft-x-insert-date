export default function getFormattedDate(date: Date | null = null) {
  const selectedDate = date ? date : new Date();

  return `${selectedDate.getFullYear()}-${(
    "0" +
    (selectedDate.getMonth() + 1)
  ).slice(-2)}-${("0" + selectedDate.getDate()).slice(-2)}`;
}
