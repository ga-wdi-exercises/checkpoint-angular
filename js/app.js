(function () {
  angular.module('musingsApp', [])
  .factory('musings', [musingsService])
  .controller('musingsController', ['musings', musingsController])

  function musingsService () {
    const musings = [
      { title: 'title1', author: 'author', content: "content" },
      { title: 'title2', author: 'author', content: "content" },
      { title: 'title3', author: 'author', content: "content" },
      { title: 'title4', author: 'author', content: "content" },
      { title: 'title5', author: 'author', content: "content" }
    ]

    return {
        all: all,
        create: create,
        remove: remove
      }

      function all () {
        return musings
      }

      function remove (x) {
        musings.splice(x, 1)

      }

      function create (title, author, content) {
        musings.push({
          title: title,
          author: author,
          content: content
        })
      }
    }

    function musingsController (musings) {

      this.newMusing = { title: '', author: '', content: ''}
      this.musings = musings.all()
      this.createMusing = createMusing
      this.removeMusing = removeMusing


      function removeMusing (x) {
        musings.remove(x)
      }

      function createMusing () {
      musings.create(this.newMusing)
      }

  }



})()
