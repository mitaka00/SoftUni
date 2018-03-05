let expect=require('chai').expect;
let isSymmetric=require('../check for symmetry').isSymmetric;

describe('isSymmetric(arr)',function () {
    it('Should return false for not array',function () {
        expect(isSymmetric('ogo')).to.be.equal(false);
    });

    it('Should return false for not array',function () {
        expect(isSymmetric({})).to.be.equal(false);
    });

    it('Should return true for empty array',function () {
        expect(isSymmetric([])).to.be.equal(true);
    });

    it('Should return true for [1,2,3,4,3,2,1]',function () {
        expect(isSymmetric([1,2,3,4,3,2,1])).to.be.equal(true);
    });

    it('Should return true for [1,2,3,3,2,1]',function () {
        expect(isSymmetric([1,2,3,3,2,1])).to.be.equal(true);
    });

    it('Should return false for [1,2,2,3,2,1]',function () {
        expect(isSymmetric([1,2,2,3,2,1])).to.be.equal(false);
    });

    it('Should return false for [1,3,3,2,1]',function () {
        expect(isSymmetric([1,3,3,2,1])).to.be.equal(false);
    });

    it('Should return true for [1]',function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });

    it('Should return false for [-1,1]',function () {
        expect(isSymmetric([-1,1])).to.be.equal(false);
    });

    it('Should return true for [1,{mitko:d},"pesho","pesho",{mitko:d},1]',function () {
        expect(isSymmetric([1,{mitko:5},"pesho","pesho",{mitko:5},1])).to.be.equal(true);
    });

    it('Should return false for [2,{mitko:d},"pesho","pesho",{mitko:d},1]',function () {
        expect(isSymmetric([2,{mitko:5},"pesho","pesho",{mitko:5},1])).to.be.equal(false);
    });
});
