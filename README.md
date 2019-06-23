# CatnameSorter  [![Build Status](https://travis-ci.org/poojaagarwal1009/CatnameSorter.svg?branch=master)](https://travis-ci.org/poojaagarwal1009/CatnameSorter)

This application is consuming the json and output a list of all the cats in alphabetical order under a heading of the gender of their owner.

Its written in react, redux, redux-thunk along with testing in enzyme and test.

It has a page, container and a display component. It also has an action, reducer and a store.

In the componentDidMount of the page an action is called. Action makes a server call and dispatches the results to reducer which then updates the store with the result.

Container contains all the data massaging logic and passes the final list to display component.

## Getting started
- Install node modules by either:
   - run `npm install`
- Open 2 terminals: 
  - `gulp serve`
  - `jest --watch`
- Open a browser to `http://localhost:4000`

## Tests
Using Jest and Enzyme to run tests
- For reference on how to write tests, [see here](https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md).
- [`expect` assertions](https://facebook.github.io/jest/docs/en/expect.html)
- To run tests `jest` or `jest --watch`

## References 
- [Redux](https://redux.js.org/docs/basics/UsageWithReact.html) and [Redux Thunk](https://github.com/gaearon/redux-thunk)
- Testing: [Enzyme](http://airbnb.io/enzyme/), [Expect](https://facebook.github.io/jest/docs/en/expect.html)
- Travis : [Medium](https://medium.com/quick-code/from-zero-to-deployed-with-react-travisci-and-surge-9be99350cf8b)
