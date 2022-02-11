import formatDate from "./formatDate";

export default async function insertDateBlock(date: Date) {
  const formattedDate = formatDate(date);
  const page = await craft.dataApi.getCurrentPage();
  const pageId = (page.data && page.data.id) || "";
  const getSelection = await craft.editorApi.getSelection();
  const blockId =
    (getSelection.data &&
      getSelection.data.length > 0 &&
      getSelection.data[getSelection.data.length - 1].id) ||
    "";

  const block = craft.blockFactory.textBlock({
    content: [
      {
        text: formattedDate,
        link: {
          type: "dateLink",
          date: formattedDate,
        },
      },
    ],
  });

  let location = undefined;
  if (blockId) {
    location = craft.location.afterBlockLocation(pageId, blockId);
  }

  // Log to page during dev as there's no console available in app.
  // const log = craft.blockFactory.textBlock({
  //   content: JSON.stringify(
  //     {
  //       page,
  //       getSelection,
  //     },
  //     null,
  //     2
  //   ),
  // });

  craft.dataApi.addBlocks([block /*, log*/], location);
}
