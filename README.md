# Craft X - Insert Date Plugin

Places a date picker into the extension bar that allows you to select a date and then insert as a block. Similar to the `/date` - _Today_, _Tomorrow_, _Yesterday_ options but with all the days available to you.

The date will be inserted as a new block after the currently selected block. If no block is selected it will be inserted at the end of the document.

![Craft X Insert Date extension](/assets/craft-x-date-picker.png)

## Notes

It doesn’t really work on the web or iOS. It does insert a date but it doesn’t link properly. This is a bug/_not yet implemented feature_ in Craft Web and the issue also exists with the official `/date` commands.

When the plugin is first loaded, even if you have a selected block, the date will be inserted at the end. I think this is a bug with `craft.editorApi.getSelection()` but not entirely sure.

## Building

Run `npm install` and than `npm run build` to generate the .craftX file which can be installed.
You can use `npm run dev` to test and debug in your local environment

To learn more about Craft eXtensions visit the [Craft X developer portal](https://developer.craft.do).

## Release Process

- Update version number in package.json.
- `npm i` and commit changes to `package-lock.json`
- git tag with that version number.
- run a build.
- push to github.
- on github draft a new release from tag.
- manually drop `insert-date-extension-tdb.craftx` onto attachment area.
