export default function monthDisplayName(today: Date, view: Date) {
  const year =
    today.getFullYear() === view.getFullYear() ? "" : ` ${view.getFullYear()}`;

  return `${new Intl.DateTimeFormat("en-GB", { month: "long" }).format(
    view
  )}${year}`;
}
