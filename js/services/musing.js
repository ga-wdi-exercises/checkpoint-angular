(function () {
  angular
  .module('musingsApp')
  .factory('musings', [
    musingsService
  ])

  function musingsService () {
    const musings =
    [
      {title: 'title', content: 'content', author: 'anwar sadat'},
      {title: 'another title', content: 'derivitave content', author: 'dumb-e'},
      {title: 'yet another title', ontent: 'more derivitave content: 3D!', author: 'did someone actually write this?'}
    ]

    return
    {
      all: all,
      create: create,
      remove: remove
    }

    function all ()
    {
      return musings
    }

    function create (musing)
    {
      musings.push(musing)
    }

    function remove (index)
    {
      musings.splice(index, 1)
    }
  }
})()
