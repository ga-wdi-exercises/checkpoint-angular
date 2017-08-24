/* eslint-env jasmine */
/* global inject */

describe('The musings service', function () {
  beforeEach(module('musingsApp'))

  let musings

  beforeEach(inject(function (_musings_) {
    musings = _musings_
  }))

  it('exists', function () {
    expect(musings).toBeDefined()
  })

  describe('has a method ".all" that', function () {
    it('is a function', function () {
      expect(musings.all).toEqual(jasmine.any(Function))
    })

    describe('returns', function () {
      it('an array', function () {
        expect(musings.all()).toEqual(jasmine.any(Array))
      })

      it('an array with a length greater than 2', function () {
        expect(musings.all().length).toBeGreaterThan(2)
      })

      it('an array where each element is an object with properties "title", "content", and "author"', function () {
        expect(musings.all().every(musing => {
          musing.title && musing.content && musing.author
        }))
      })
    })
  })

  describe('has a method ".create" that', function () {
    it('is a function', function () {
      expect(musings.create).toEqual(jasmine.any(Function))
    })
    it('takes an object and adds it to the array', function () {
      let initialLength = musings.all().length
      musings.create({
        title: 'The @ symbol',
        content: 'The @ symbol stands for "at", when it really looks like it should stand for "around"',
        author: '/u/Emergancy'
      })
      expect(musings.all().length).toBe(initialLength + 1)
    })
  })

  describe('has a method ".remove" that', function () {
    it('is a function', function () {
      expect(musings.remove).toEqual(jasmine.any(Function))
    })

    it('takes an index and deletes the musing at that index of the musings array', function () {
      const initialList = musings.all().concat()
      const deletedMusing = initialList[1]
      musings.remove(1)
      const updatedList = musings.all()
      expect(updatedList.length).toBe(initialList.length - 1)
      expect(updatedList).not.toContain(deletedMusing)
    })
  })
})
