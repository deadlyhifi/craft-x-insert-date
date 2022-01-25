# Craft X - Insert Date Plugin

Places a date picker into the eXtension bar that allows you to select a date and then insert as a block. Similar to the `/date` - _Today_, _Tomorrow_, _Yesterday_ options but with all the days available to you.

The date will be inserted as a new block after the currently selected block. If no block is selected it will be inserted at the end of the document.

Note that it doesn’t really work on the web or iOS. It does insert a date but it doesn’t link properly. This is a bug/_not yet implemented feature_ in Craft Web and the issue also exists with the official `/date` commands.

![Craft X Insert Date extension](/assets/craft-x-date-picker.png)

## Notes

Uses [github.com/Manohar-Gunturu/calendar-lite](https://github.com/Manohar-Gunturu/calendar-lite) web component as the calendar picker.

This is very much an early attempt to get to grips with building plugins. It uses a web component for the calendar. I wanted to rely on the browser default date picker but inside the Craft app that doesn't exist. The one that I found was the quickest one to implement though it’s got a few bugs and I never figured out how to style it properly.

I can redo it using a one of the many React date pickers available. Let’s see how we get on with this.

## Building

Run `npm install` and than `npm run build` to generate the .craftX file which can be installed.
You can use `npm run dev` to test and debug in your local environment

To learn more about Craft eXtensions visit the [Craft X developer portal](https://developer.craft.do).

## Release Process

- Update version number in package.json.
- git tag with that version number.
- run a build.
- push to github.
- on github draft a new release from tag.
- manually drop `insert-date-extension-tdb.craftx` onto attachment area.
