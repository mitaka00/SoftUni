let expect=require('chai').expect;
let isOddOrEven=require('../02.Even or Odd').isOddOrEven;

describe('isOddOrEven()',function () {
    it('Should return undefined',function () {
        expect(isOddOrEven(123)).to.be.undefined;
    });

    it('Shoud return odd for ""peshoo',function () {
        expect(isOddOrEven('peshoo')).to.be.equal('even');
    });

    it('Shoud return even for ""pesho',function () {
        expect(isOddOrEven('pesho')).to.be.equal('odd');
    });
});