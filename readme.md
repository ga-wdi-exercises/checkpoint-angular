# Checkpoint: AngularJS


## Before You Start

A karma test suite is in `test/unit`. To install everything you need to run the tests, run `npm install`.

Create a directory `js/` and write all of your javascript here. How you organize it is up to you -- you do need to use the _exact_ names provided for the module, service and controller.

To run the tests in the terminal use `npm test`. This will start a process that will run continuously. Everytime you save a file the tests will re-run. Scroll up to the first failing test to start. After you save be sure you've scrolled down (don't want to be debugging looking at old logs).

An `index.html` file has been provided and has `angular` loaded already (remember to link your own JS). The tests are just checking that a module exists, and features of the service and the controller -- the template is not being checked. It is there for your convenience but it would be fine to just work based off of the tests.

Note: You do not need to bring in any dependencies. `npm install` will install angular.js. If you try to include a module like `ui.router` or `ngResource` by addind a script with a cdn source it will not be found by the tests.

## Instructions

For this checkpoint you will be building a little app to keep track of random thoughts. The app will have one model, a **musing**.

- Create a module `musingsApp`
- Create a service `musings` containing an array of hardcoded data
  - The elements of the array should be objects with properties `title`, `content`, and `author`
  - Give the service a method `all` that returns all of the data in the service
  - Give the service a method `create` that takes an object and adds it to the end of the array
  - Give the service a method `remove` that takes an index and deletes the musing at that index of the array
- Create a controller `musingsController` and inject the `musings` service as a dependency
  - Add a property `musings` to the controller that holds the return of `musings.all()`
  - Add a property `newMusing` to the controller is an object with properties `title`, `content`, and `author` with initial values of `''` (define this on the controller explicitly rather than declaring it by way of ng-model directive)
  - Add a method `createMusing` to the controller that calls `musings.create` with the `newMusing` value of the controller
  - Add a method `removeMusing` to the controller that takes an index and calls `musings.remove` with that index

When you are finished commit your work, push to GitHub and make a Pull Request.
