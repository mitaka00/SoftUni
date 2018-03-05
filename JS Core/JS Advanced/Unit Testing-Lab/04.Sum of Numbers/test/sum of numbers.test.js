let expect=require('chai').expect;
let sum=require('../sum of numbers').sum;

describe('group',function () {
    it('Should return 3 for [1,2]',function () {
        expect(sum([1,2])).to.be.equal(3)
    });

    it('takes array of Numbers ["1","pesho"]',function () {
        expect(sum(['1','pesho'])).to.be.NaN;
    });

    it('Should return 0 for []',function () {
        expect(sum([])).to.be.equal(0)
    })
});
