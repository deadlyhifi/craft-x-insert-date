import "calendar-lite/calendar-lite.js";

type DatePicker = {
  detail: {
    date: Date;
  };
} & Event;

function getFormattedDate(date: Date | null = null) {
  const selectedDate = date ? date : new Date();

  return `${selectedDate.getFullYear()}-${(
    "0" +
    (selectedDate.getMonth() + 1)
  ).slice(-2)}-${("0" + selectedDate.getDate()).slice(-2)}`;
}

function init() {
  const datePicker = document.getElementById("select-date");
  const insertButton = document.getElementById("insert-date");

  let selectedDate = getFormattedDate();
  datePicker?.addEventListener("date-change", (event) => {
    selectedDate = getFormattedDate((event as DatePicker).detail.date);
  });

  insertButton?.addEventListener("click", () => {
    const block = craft.blockFactory.textBlock({
      content: [
        {
          text: selectedDate,
          link: {
            type: "dateLink",
            date: selectedDate,
          },
        },
      ],
    });
    craft.dataApi.addBlocks([block]);
  });
}

export default init;
