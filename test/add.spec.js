/* jshint esversion: 6 */
const chai = require('chai');
const expect = chai.expect;

const bubble = require('../bubble.js');
var arr1 = [5, 1];
var arr2 = [5, 1, 4];
var arr3 = [5,1, 4, 2, 8];
var arr4 = [5, 8, 1, 2, 4];


describe('bubble',() => {

  it('should sort first two indexes',() => {
/*  console.log(bubble(arr));*/
  expect(bubble(arr1)).to.deep.equal([1, 5]);
  });

  it('should sort first 3 indexes',() => {
  console.log(bubble(arr2));
  expect(bubble(arr2)).to.deep.equal([1, 4, 5]);
  });

  it('should sort first pass',() => {
  console.log(bubble(arr3));
  expect(bubble(arr3)).to.deep.equal([1, 2, 4, 5, 8]);
  });

  it('should sort second pass',() => {
  console.log(bubble(arr3));
  expect(bubble(arr3)).to.deep.equal([1, 2, 4, 5, 8]);
  });

  it('should sort third pass',() => {
  console.log(bubble(arr4));
  expect(bubble(arr4)).to.deep.equal([1, 2, 4, 5, 8]);
  });


});

