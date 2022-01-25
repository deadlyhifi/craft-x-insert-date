import "calendar-lite/calendar-lite.js";
import getFormattedDate from "./utils/getFormattedDate";

type DatePicker = {
  detail: {
    date: Date;
  };
} & Event;

function init() {
  const datePicker = document.getElementById("select-date");
  const insertButton = document.getElementById("insert-date");

  let selectedDate = getFormattedDate();
  datePicker?.addEventListener("date-change", (event) => {
    selectedDate = getFormattedDate((event as DatePicker).detail.date);
  });

  insertButton?.addEventListener("click", async () => {
    const page = await craft.dataApi.getCurrentPage();
    const pageId = (page.data && page.data.id) || "";
    const getSelection = await craft.editorApi.getSelection();
    const blockId =
      (getSelection.data &&
        getSelection.data.length > 0 &&
        getSelection.data[0].id) ||
      "";

    // Log to page during dev as there's no console available in app.
    // const log = craft.blockFactory.textBlock({
    //   // content: JSON.stringify(
    //   //   {
    //   //      page,
    //   //      getSelection,
    //   //   },
    //   //   null,
    //   //   2
    //   // ),
    // });

    const date = craft.blockFactory.textBlock({
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

    let location = undefined;
    if (blockId) {
      location = craft.location.afterBlockLocation(pageId, blockId);
    }
    // craft.dataApi.addBlocks([date, log]);
    craft.dataApi.addBlocks([date], location);
  });
}

export default init;
