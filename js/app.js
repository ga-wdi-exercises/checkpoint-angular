/* global angular */

angular
.module('musingsApp', [

])
.factory('musings', [
  musingsService
])
.controller('musingsController', [
  'musings',
  MusingsControllerFn
])



function MusingsControllerFn(musings) {
  this.musings = musings.all()
  this.newMusing = {title: '', content: '', author: ''}
  this.createMusing = function() {
    musings.create(this.newMusing.title, this.newMusing.content, this.newMusing.author)
  }
  this.removeMusing = function(index) {
    musings.remove(index)
  }
}


function musingsService() {
  const muse_data = [
    {title: 'Title1', content: 'Content1', author: 'Author1'},
    {title: 'Title2', content: 'Content2', author: 'Author2'},
    {title: 'Title3', content: 'Content3', author: 'Author3'},
    {title: 'Title4', content: 'Content4', author: 'Author4'},
    {title: 'Title5', content: 'Content5', author: 'Author5'}
  ]

  return {
    all: all,
    create: create,
    remove: remove
  }

  function all() {
    return muse_data
  }

  function create(title, content, author) {
    muse_data.push({title: title, content: content, author: author})
  }

  function remove(index) {
    muse_data.splice(index, 1)
  }
}
