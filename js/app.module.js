/* global angular */

(function () {
  angular.module('musingsApp', [])
  .factory('musings', [
    musings
  ])
  .controller('musingsController', [
    'musings',
    musingsController
  ])

  function musingsController (musings) {
    this.musings = musings.all()
    this.newMusing = { title: '', content: '', author: '' }
    this.createMusing = function () {
      musings.create(this.newMusing.title, this.newMusing.content, this.newMusing.author)
    }
    this.removeMusing = function (index) {
      musings.remove(index)
    }
  }

  function musings () {
    var objects = [
      { title: 'LOTR', content: 'something is precious', author: 'JRR' },
      { title: 'Fire and Ice', content: 'nobody survives', author: 'George RR' },
      { title: 'Enders Game', content: 'awesome training simulators that are the real thing', author: 'Scott Olsen Card?' },
      { title: 'Wuthering Heights', content: 'some drama some song', author: 'Fitzgerald' }
    ]

    function all () {
      return objects
    }

    function create (title, content, author) {
      objects.push({ title: title, content: content, author: author })
    }

    function remove (index) {
      objects.splice(index, 1)
    }

    return {
      all: all,
      create: create,
      remove: remove
    }
  }
})()
