// app.js
/* global angular */


(function (){
  //Create a module `musingsApp`
  angular.module('musingsApp', [])
  .controller('musingsController', ['musings', musingsController])
  .factory('musings', [musingsService])

  // Create a service `musings` containing an array of hardcoded data
  // The elements of the array should be objects with properties
  // `title`, `content`, and `author`
  function musingsService () {
    const musings = [
      {author:'author1', title:'title1', content:'content1'},
      {author:'author2', title:'title2', content:'content2'},
      {author:'author3', title:'title3', content:'content3'}
    ]
    // Give the service a method `all` that returns all of the data in the service
    // Give the service a method `create` that takes an object and adds it to the end of the array
    // Give the service a method `remove` that takes an index and deletes the musing at that index of the array
    return {
      all: all,
      create: create,
      remove: remove
    }
    function all () {
      return musings
    }
    function create (author, title, content) {
      musings.push({
      author: author,
      title: title,
      content: content
      })
    }
    function remove (index) {
      musings.splice(index, 1)
    }
  }
  // Create a controller `MusingsController` and inject the `musings` service as a dependency
  function musingsController (musings) {
    // Add a property `musings` to the controller that holds the return of `musings.all()`
    this.musings = musings.all()
    // Add a property `newMusing` to the controller is an object with properties `title`, `content`, and `author`
    // with initial values of `''` (define this on the controller explicitly rather than declaring it by way of ng-model directive)
    this.newMusing = {author: '',  title:'', content:''}
    // Add a method `createMusing` to the controller that calls `musings.create` with the `newMusing` value of the controller
    this.createMusing = function () {
      musings.create(this.newMusing.author, this.newMusing.title, this.newMusing.content)
    }
    // Add a method `removeMusing` to the controller that takes an index and calls `musings.remove` with that index
    this.removeMusing = function (index) {
      musings.remove(index)
    }
  }
  })()
