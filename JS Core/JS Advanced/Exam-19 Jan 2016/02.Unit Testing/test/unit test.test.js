let expect = require('chai').expect;
let makeList = require('../unit test').makeList;

describe("makeList()", function () {
    let myList = {};
    beforeEach(function () {
        myList = makeList();
    });

    it("Only toString()", function () {
        expect(myList.toString()).to.be.equal('');
    });

    it("addRight", function () {
        myList.addRight(5);
        myList.addRight('pesho');
        expect(myList.toString()).to.be.equal('5, pesho');
    });

    it("addLeft", function () {
        myList.addLeft(5);
        myList.addLeft('pesho');
        expect(myList.toString()).to.be.equal('pesho, 5');
    });

    it("clear and return empty arr", function () {
        myList.addRight(5);
        myList.addRight('pesho');
        myList.clear();
        expect(myList.toString()).to.be.equal('');
    });

    it("clear and return gosho", function () {
        myList.addRight(5);
        myList.addRight('pesho');
        myList.clear();
        myList.addRight('gosho');
        expect(myList.toString()).to.be.equal('gosho');
    });

    it("clear and return gosho", function () {
       myList.addRight(1);
       myList.addRight('two');
       myList.addLeft(0);
       myList.clear();
       myList.addLeft('beer');
       myList.addLeft(3.14);
        expect(myList.toString()).to.be.equal('3.14, beer');
    });
});