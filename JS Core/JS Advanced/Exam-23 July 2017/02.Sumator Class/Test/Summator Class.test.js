let expect=require('chai').expect;
let Sumator=require('../Sumator Class').Sumator;

describe('Sumator()',function () {
    let myList;
    beforeEach(function () {
        myList = new Sumator();
    });

    it('has all properties', function () {
        expect(myList.hasOwnProperty('data')).to.equal(true, "Missing data property");
    });

    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(myList).hasOwnProperty('add')).to.equal(true, "Missing add function");
        expect(Object.getPrototypeOf(myList).hasOwnProperty('sumNums')).to.equal(true, "Missing sumNums function");
        expect(Object.getPrototypeOf(myList).hasOwnProperty('removeByFilter')).to.equal(true, "Missing removeByFilter function");
        expect(Object.getPrototypeOf(myList).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
    });

    it('must initialize data to an empty array', function () {
        expect(myList.data instanceof Array).to.equal(true, 'Data must be of type array');
        expect(myList.data.length).to.equal(0, 'Data array ust be initialized empty');
    });

    it('can add a number', function () {
        myList.add(4);
        expect(myList.data.length).to.equal(1, "Element wasn't added");
    });

    it('can add several items of different types', function () {
        myList.add(4);
        expect(myList.data.length).to.equal(1, "Element wasn't added");
        myList.add('pesho');
        expect(myList.data.length).to.equal(2, "Element wasn't added");
        myList.add([1, 2, 3]);
        expect(myList.data.length).to.equal(3, "Element wasn't added");
    });

    it('returns 0 when empty', function () {
        expect(myList.sumNums()).to.equal(0, "Incorrect sum when empty");
    });

    it('correctly sums numbers', function () {
        myList.add(4);
        myList.add(5);
        myList.add(6);
        expect(myList.sumNums()).to.equal(15, "Sum isn't correct");
    });

    it('correctly filters non-numbers when summing', function () {
        myList.add(4);
        myList.add('pesho');
        myList.add([1, 2, 3]);
        expect(myList.sumNums()).to.equal(4, "Didn't filter sum");
    });

    it('removes all matching elements', function () {
        myList.add(4);
        myList.add('pesho');
        myList.add(4);
        myList.removeByFilter((e) => e === 4);
        expect(myList.data).to.not.contains(4, "Element not removed");
    });

    it('toString returns (empty) when empty', function () {
        expect(myList.toString()).to.equal('(empty)', "toString didn't remove (empty)");
    });

    it('toString returns correct elements', function () {
        myList.add(4);
        myList.add('pesho');
        myList.add('gosho');
        expect(myList.toString()).to.equal('4, pesho, gosho', "toString didn't work correctly");
    });
});