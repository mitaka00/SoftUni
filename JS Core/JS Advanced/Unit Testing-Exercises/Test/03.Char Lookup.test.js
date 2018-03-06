let expect=require('chai').expect;
let lookupChar=require('../03.Char Lookup').lookupChar;

describe('lookupChar()',function () {
    it('Should return undefined for incorrect string',function () {
        expect(lookupChar(123,2)).to.be.undefined;
    });

    it('Should return undefined for incorrect index',function () {
        expect(lookupChar('pesho','gosho')).to.be.undefined;
    });

    it('Should return undefined for incorrect index',function () {
        expect(lookupChar('pesho',20)).to.be.equal("Incorrect index");
    });

    it('Should return undefined for incorrect index',function () {
        expect(lookupChar('pesho',3.12)).to.be.undefined;
    });

    it('Should return undefined for incorrect index',function () {
        expect(lookupChar('pesho',-20)).to.be.equal("Incorrect index");
    });

    it('Should return s',function () {
        expect(lookupChar('pesho',2)).to.be.equal("s");
    });
});