/* global angular */

(function () {
  angular.module('musingsApp', [])
  .controller('musingsController', ['musings', musingsController])
  .factory('musings', [musingsService])

  function musingsController (musings) {
    this.musings = musings.all()
    this.newMusing = {title: '', content: '', author: ''}
    this.createMusing = function () {
      musings.create(this.newMusing.title, this.newMusing.content, this.newMusing.author)
    }
    this.removeMusing = function (index) {
      musings.remove(index)
    }
  }

    function musingsService () {
      var musings = [
        {title: 'this', content: 'this_content', author: 'author1'},
        {title: 'that', content: 'that_content', author: 'author2'},
        {title: 'these', content: 'these_content', author: 'author3'},
        {title: 'those', content: 'those_content', author: 'author4'}
    ]

    function all () {
      return musings
    }

    function create (title, content, author) {
      musings.push({ title: title, content: content, author: author })
    }
     function remove (index) {
       musings.splice(index, 1)
     }

     return {
       all: all,
       create: create,
       remove: remove,
     }
  }
})()
