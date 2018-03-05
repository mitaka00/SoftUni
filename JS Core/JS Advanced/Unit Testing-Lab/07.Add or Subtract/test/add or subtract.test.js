let expect=require('chai').expect;
let createCalculator=require('../add or subtract').createCalculator;

describe('Calculator',function () {
    let calc,value;

    beforeEach(function () {
        calc=createCalculator();
    });

    it('Should return for get 0',function () {
        expect(calc.get()).to.be.equal(0)
    });

    describe('simple calculations',function () {
        it('Should return 2',function () {
            calc.add(1);
            calc.add(2);
            value=calc.get();

            expect(value).to.be.equal(3)
        });

        it('Should return -3',function () {
            calc.add(-1);
            calc.add(-2);
            value=calc.get();

            expect(value).to.be.equal(-3)
        });

        it('Should return 3',function () {
            calc.subtract(-1);
            calc.subtract(-2);
            value=calc.get();

            expect(value).to.be.equal(3)
        });

        it('Should return -3',function () {
            calc.subtract(1);
            calc.subtract(2);
            value=calc.get();

            expect(value).to.be.equal(-3)
        });

        it("should return 2 after add(10); subtract('7'); add('-2'); subtract(-1)", function () {
            calc.add(10);
            calc.subtract('7');
            calc.add('-2');
            calc.subtract(-1);
            let value = calc.get();
            expect(value).to.be.equal(2);
        });
    });

    describe('not numbers input',function () {
        it('Should return NaN',function () {
            calc.subtract('pesho');
            value=calc.get();

            expect(value).to.be.NaN
        });

        it('Should return NaN',function () {
            calc.add('pesho');
            value=calc.get();

            expect(value).to.be.NaN
        });
    });

    describe('Fractional Numbers',function () {
        it('Should return close to 4.47',function () {
            calc.add(2.23);
            calc.add(2.24);
            value=calc.get();

            expect(value).to.be.closeTo(4.47,0.001)
        });

        it('Should be close to -5',function () {
            calc.subtract(2.23);
            calc.subtract(2.24);
            value=calc.get();

            expect(value).to.be.closeTo(-4.47,0.001)
        });
    })
});
