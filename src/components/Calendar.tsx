import * as React from "react";
import { TodayIcon } from "../assets/today";
import { ArrowIcon } from "../assets/arrow";
import calendarDates from "../utils/calendarDates";
import monthDisplayName from "../utils/monthDisplayName";

type CalendarProps = {
  onSelectDate: (date: Date) => void;
};

export default function Calendar({ onSelectDate }: CalendarProps) {
  const [monthView, setMonthView] = React.useState(new Date());
  const today = new Date();
  const monthName = monthDisplayName(today, monthView);

  const reportSelectedDate = (day: number) => {
    const selectedDate = new Date(
      monthView.getFullYear(),
      monthView.getMonth(),
      day
    );
    onSelectDate(selectedDate);
  };

  const prevMonth = () => {
    setMonthView(new Date(monthView.getFullYear(), monthView.getMonth() - 1));
  };

  const nextMonth = () => {
    setMonthView(new Date(monthView.getFullYear(), monthView.getMonth() + 1));
  };

  const thisMonth = () => {
    setMonthView(new Date());
  };

  const isCurrentMonth = () => {
    return (
      monthView.getFullYear() + "-" + monthView.getMonth() ===
      today.getFullYear() + "-" + today.getMonth()
    );
  };

  const isToday = (day: number) => {
    return (
      new Date(
        monthView.getFullYear(),
        monthView.getMonth(),
        day
      ).toDateString() === new Date().toDateString()
    );
  };

  return (
    <div>
      <div className="title">Insert Date</div>
      <div className="container">
        <header>
          <div className="current-date">{monthName}</div>
          <div className="controls">
            <button
              onClick={thisMonth}
              className="go-to-today"
              aria-label={`back to today`}
              disabled={isCurrentMonth()}
            >
              <TodayIcon />
            </button>
            <button
              onClick={prevMonth}
              className="previous-month"
              aria-label="previous month"
            >
              <ArrowIcon />
            </button>
            <button
              onClick={nextMonth}
              className="next-month"
              aria-label="next month"
            >
              <ArrowIcon />
            </button>
          </div>
        </header>
        <div className="calendar">
          <div className="day-name" aria-label="monday">
            Mo
          </div>
          <div className="day-name" aria-label="tuesday">
            Tu
          </div>
          <div className="day-name" aria-label="wednesday">
            We
          </div>
          <div className="day-name" aria-label="thursday">
            Th
          </div>
          <div className="day-name" aria-label="friday">
            Fr
          </div>
          <div className="day-name weekend" aria-label="saturday">
            Sa
          </div>
          <div className="day-name weekend" aria-label="sunday">
            Su
          </div>
          {calendarDates(monthView).map((day, index) => {
            const valid = day !== 0;
            const today = isToday(day);
            const classes = [
              valid ? "day" : undefined,
              today ? "today" : undefined,
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <div
                key={`${monthName}-${index}`}
                onClick={() => reportSelectedDate(day)}
                className={classes}
              >
                {valid ? day : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
