let expect=require('chai').expect;
let StringBuilder=require('../string-builder').StringBuilder;

describe('StringBuilder', function () {
    let builder;

    it('initialization does not throw', function () {
        let initEmpty = () => builder = new StringBuilder();
        expect(initEmpty).to.not.throw();
        let initParam = () => builder = new StringBuilder('hello');
        expect(initParam).to.not.throw();
    });

    it('invalid constructor parameter', function () {
        let willThrow = () => builder = new StringBuilder(5);
        expect(willThrow).to.throw();
    });

    describe('with empty constructor', function () {
        beforeEach(function () {
            builder = new StringBuilder();
        });

        it('has all properties', function () {
            expect(builder.hasOwnProperty('_stringArray')).to.equal(true, "Missing _stringArray property");
        });

        it('has functions attached to prototype', function () {
            expect(Object.getPrototypeOf(builder).hasOwnProperty('append')).to.equal(true, "Missing append function");
            expect(Object.getPrototypeOf(builder).hasOwnProperty('prepend')).to.equal(true, "Missing prepend function");
            expect(Object.getPrototypeOf(builder).hasOwnProperty('insertAt')).to.equal(true, "Missing insertAt function");
            expect(Object.getPrototypeOf(builder).hasOwnProperty('remove')).to.equal(true, "Missing remove function");
            expect(Object.getPrototypeOf(builder).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
        });

        it('must initialize data to an empty array', function () {
            expect(builder._stringArray instanceof Array).to.equal(true, 'Data must be of type array');
            expect(builder._stringArray.length).to.equal(0, 'Data array must be initialized empty');
        });
    });

    describe('constructor with parameter', function () {
        let startingString = 'hello';

        beforeEach(function () {
            builder = new StringBuilder(startingString);
        });

        it('must initialize data to a string array', function () {
            expect(builder._stringArray instanceof Array).to.equal(true, 'Data must be of type array');
            compareArray(builder._stringArray, Array.from(startingString));
        });

        it('appends correctly', function () {
            let str = ', world';
            builder.append(str);
            compareArray(builder._stringArray, Array.from(startingString + str));
        });

        it('prepends correctly', function () {
            let str = 'welcome ';
            builder.prepend(str);
            compareArray(builder._stringArray, Array.from(str + startingString));
        });

        it('inserts correctly', function () {
            let str = 'kek';
            builder.insertAt(str, 3);
            let expected = Array.from(startingString);
            expected.splice(3, 0, ...str);
            compareArray(builder._stringArray, expected);
        });

        it('removes correctly', function () {
            builder.remove(1, 3);
            compareArray(builder._stringArray, Array.from('ho'));
        });

        it('stringifies correctly', function () {
            expect(builder.toString()).to.equal(startingString);
        });

        it('invalid append parameter', function () {
            let willThrow = () => builder.append(5);
            expect(willThrow).to.throw();
        });

        it('invalid prepend parameter', function () {
            let willThrow = () => builder.prepend(5);
            expect(willThrow).to.throw();
        });

        it('invalid insertAt parameter', function () {
            let willThrow = () => builder.insertAt(5, 1);
            expect(willThrow).to.throw();
        });
    });

    function compareArray(source, expected) {
        expect(source.length).to.equal(expected.length, "Arrays don't match");
        for (let i = 0; i < source.length; i++) {
            expect(source[i]).to.equal(expected[i], 'Element ' + i + ' mismatch');
        }
    }
});
