## Running the project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Tasks

- [x] You cannot use any 3rd party libraries - only pure React and internal DOM functions.
  - No 3rd party library used for autocompletion
- [x] The function to filter the data should be asynchronous. You can use mock data (such as a JSON array), but the function which uses it should be asynchronous (similar to a real REST call).
  - Used miragejs for api mocking
- [x] It should have basic working CSS. No need for anything fancy (such as drop-shadows etc), but should look decent.
  - Very basic css handling hover and custom autcomplete ui
- [x] You need to handle all non-standard/edge use-cases - it should have a perfect user-experience.
  - Hides the dropdown when clicked outside
  - Highlights the text on hover
  - Appropriate Cursor pointer
  - When you clear the text, the selection resets to None
  - Case insensitive searching
- [x] Bonus points if you highlight the matching part of the text and not only showing it.
  - Hightlights the matched text with a different colour
- [x] Prefer using plain JS, not TS
- [x] No external state management libraries (refer to #1 as well), only native React method.
- [x] Use only class components, feel free to use life-cycle methods if you need.
- [x] Shortcuts and hacks are perfectly ok - BUT you have to add comments on what are you doing there and why. You should either write production ready code or include comments on what needs to be changed for production.
  - No hacks used
- [x] Add a README.md file explaining how to run the project.
- [x] Bonus #1 now implement also as functional component with hooks.
- [x] Bonus #2 load data using a read API call to some resource.
  - Used axios for querying the mock API with a GET request
