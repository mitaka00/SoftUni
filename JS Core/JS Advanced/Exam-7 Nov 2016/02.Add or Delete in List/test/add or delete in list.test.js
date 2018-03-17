let expect=require('chai').expect;
let list=require('../add or delete in list').list;

describe("List", function() {
    let myList;
    beforeEach(function () {
        myList=list();
    });

    it("Empty arr", function() {
        expect(myList.toString()).to.be.equal('')
    });

    it("Adding params in array", function() {
        myList.add('pesho');
        myList.add(3);
        expect(myList.toString()).to.be.equal('pesho, 3')
    });

    it("Adding param in array", function() {
        myList.add('pesho');
        expect(myList.toString()).to.be.equal('pesho')
    });

    it("Deleting params in array", function() {
        myList.add('pesho');
        myList.add(3);
        expect(myList.delete(1)).to.be.equal(3)
    });

    it("Deleting undefined index", function() {
        myList.add('pesho');
        myList.add(3);
        expect(myList.delete(5)).to.be.undefined;
    });

    it("Sample Code Usage", function() {
        myList.add(1);
        myList.add("two");
        myList.add(3);
        expect(myList.toString()).to.be.equal('1, two, 3');
        expect(myList.delete(1)).to.equal('two');
        expect(myList.toString()).to.be.equal('1, 3');
        expect(myList.delete(-1)).to.be.undefined;
        expect(myList.toString()).to.be.equal('1, 3');
    });
});
