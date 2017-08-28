'use strict'

angular
.module('musingsApp', [
])
.factory ('musings', [
  musingService
])

.controller('musingsController', [
  'musings',
  musingsControllerFunction
])

function musingsControllerFunction (musings) {
 this.musings = musings.all()
 this.newMusing = {title: '', content: '', author: ''}
 this.createMusing = function () {
   musings.create(this.newMusing.title, this.newMusing.content, this.newMusing.author)
 }
  this.removeMusing = function (index) {
    musings.remove(index)
   }
  }

function musingService () {
  const muse_data = [
    {title: 'titleA', content: 'contentA', author: 'authorA'},
    {title: 'titleB', content: 'contentB', author: 'authorB'},
    {title: 'titleC', content: 'contentC', author: 'authorC'},
    {title: 'titleD', content: 'contentD', author: 'authorD'},
    {title: 'titleE', content: 'contentE', author: 'authorE'}
    ]

  return {
    all: all,
    create: create,
    remove: remove
  }

  function all() {
    return muse_data
  }

function create (title, content, author) {
  muse_data.push({title: title, content: content, author: author})
}

function remove (index) {
  muse_data.splice(index, 1)
 }
}
