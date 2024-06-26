//1. In this application we will set up some basic unit test for our application.
//2. We will use the vitest library to run our tests.
//https://vitest.dev

//3. They have some great examples to help you setup the testing environment on GITHUB 
//https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib

//4. We will start by installing a few dependencies.

//* "vitest" - This is the main library that we will use to run our tests.
//* "@vitest/coverage-v8" - This is a plugin that will help us generate code coverage reports.
//* "jsdom" - THis library will help us simulate a browser environment in node so we can test the code with out the need to open a browser.
//* "@testing-library/jest-dom" - This library will help us with some DOM assertions. 
//(DOM Assertion is a way to check if the DOM is in the state that we expect it to be in.)
//* "@testing-library/react" - This library will help us with some React specific assertions. 
//(specific assertions - is a way to check if the DOM is in the state that we expect it to be in.)
//DOM Assertion vs React specific assertions - the difference is that the React specific assertions will help us with some React specific things like checking if a component is rendered or not.
//* "@testing-library/user-event" - This library will help us simulate user events like clicking on a button or typing in an input field.

//5. Now that we have installed the dependencies we can start setting up our test environment.

//6. to run our add "test": "vitest --coverage" to the package.json file scripts section.

//7. Create and Open: src/test/setup.js

//8. We import the dependencies that we installed for our test environment.


import '@testing-library/jest-dom'


//9. Next we need to open vite.config.js so we can tell vite to use jest-dom to run our tests.