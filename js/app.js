angular
.module('musingsApp',[])
.factory('musings', [
  musingsService
])
.controller('musingsController',[
  'musings',
  musingsController
])

function musingsService () {
  const musings = [
    {title: 'musing1', content: 'my first musing', author: 'me'},
    {title: 'musing2', content: 'your first musing', author: 'you'},
    {title: 'musing3', content: 'musing sounds weird now', author: 'them'}
  ]

  return {
    all:all,
    create:create,
    remove:remove
  }

  function all () {
    return musings
  }

  function create (musing) {
    musings.push(musing)
  }

  function remove (index) {
    musings.splice(index, 1)
  }

}

function musingsController (musings) {
  this.musings = musings.all()
  this.newMusing = {title: '', content: '', author: ''}
  this.createMusing = function createMusing (){
    musings.create(this.newMusing)
  }
  this.removeMusing = function removeMusing (index) {
    musings.remove(index)
  }
}
