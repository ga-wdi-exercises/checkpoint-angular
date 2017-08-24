/* eslint-env jasmine */
/* global inject */

describe('The musingsController', function () {
  beforeEach(module('musingsApp'))

  let ctrl, musings

  beforeEach(inject(function ($controller, _musings_) {
    musings = _musings_
    ctrl = $controller('musingsController', {})
  }))

  it('exists', function () {
    expect(ctrl).toBeDefined()
  })

  it('has a property `musings` that holds the return of `musings.all()`', function () {
    expect(ctrl.musings).toEqual(musings.all())
  })

  describe('has a property `newMusing` that', function () {
    it('exists', function () {
      expect(ctrl.newMusing).toBeDefined()
    })

    it('is an object with properties `title`, `content`, and `author` that are initially empty stings', function () {
      expect(ctrl.newMusing.title).toBe('')
      expect(ctrl.newMusing.content).toBe('')
      expect(ctrl.newMusing.author).toBe('')
    })
  })

  it('has a method `createMusing` that will create a new musing in the musings service based on the value of the `newMusing` property', function () {
    ctrl.newMusing.title = 'Aged Scotch'
    ctrl.newMusing.content = 'Scotch aged 12 years sounds a lot better than Scotch from 2005.'
    ctrl.newMusing.author = '/u/bizzcut'
    ctrl.createMusing()
    const musingsList = musings.all()
    expect(musingsList[musingsList.length - 1]).toEqual({
      title: 'Aged Scotch',
      content: 'Scotch aged 12 years sounds a lot better than Scotch from 2005.',
      author: '/u/bizzcut'
    })
  })

  it('has a method `removeMusing` that takes an index and calls `musings.remove` with that index', function () {
    const firstMusing = musings.all()[0]
    ctrl.removeMusing(0)
    expect(musings.all().indexOf(firstMusing)).toBe(-1)
  })
})
