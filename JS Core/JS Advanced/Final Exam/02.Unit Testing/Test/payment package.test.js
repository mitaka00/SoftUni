let expect=require('chai').expect;
let PaymentPackage=require('../payment package').PaymentPackage;

describe('PaymentPackage()', function() {
    let myPackage;

    describe('Throw Error',function () {
        it('invalid constructor parameter', function () {
            let willThrow = () => myPackage = new PaymentPackage(5,2);
            expect(willThrow).to.throw();
        });
        it('invalid constructor parameter', function () {
            let willThrow = () => myPackage = new PaymentPackage();
            expect(willThrow).to.throw();
        });

        it('invalid constructor parameter', function () {
            let willThrow = () => myPackage = new PaymentPackage('pesho');
            expect(willThrow).to.throw();
        });

        it('invalid constructor parameter', function () {
            let willThrow = () => myPackage = new PaymentPackage('pesho',-2);
            expect(willThrow).to.throw();
        });


        it('VAT changes', function () {
            myPackage = new PaymentPackage('pesho',3);
            let willThrow = () => myPackage.VAT = 'gosho';
            expect(willThrow).to.throw();
        });

        it('VAT changes', function () {
            myPackage = new PaymentPackage('pesho',3);
            let willThrow = () => myPackage.VAT = -2;
            expect(willThrow).to.throw();
        });

        it('active changes', function () {
            myPackage = new PaymentPackage('pesho',3);
            let willThrow = () => myPackage.active = 'gosho';
            expect(willThrow).to.throw();
        });
    });

    describe('Initializations that not throw error',function () {
        it('normal parameters',function () {
            let initEmpty = () => myPackage = new PaymentPackage('pesho',20);
            expect(initEmpty).to.not.throw();
        });

        it('with 0 for value',function () {
            let initEmpty = () => myPackage = new PaymentPackage('pesho',0);
            expect(initEmpty).to.not.throw();
        })
    });

    describe('with empty constructor', function () {
        myPackage=new PaymentPackage('pesho',20);

        it('has functions attached to prototype', function () {
            expect(Object.getPrototypeOf(myPackage).hasOwnProperty('toString')).to.equal(true, "Missing toString() Function");
        });

        it('must initialize default values', function () {
            expect(myPackage.VAT).to.equal(20, 'Vat must be 20');
            expect(myPackage.active).to.equal(true, 'active must be true');
        });

        it('VAT changes', function () {
            myPackage = new PaymentPackage('pesho',3);
            myPackage.VAT = 10;
            expect(myPackage.VAT).to.be.equal(10)
        });

        it('active changes', function () {
            myPackage = new PaymentPackage('pesho',3);
           myPackage.active = false;
           expect(myPackage.active).to.be.false;
        });

    });

    describe('Testing with different values',function () {
        myPackage=new PaymentPackage('gosho',5);
        myPackage.VAT=100;
        it('toString() method',function () {
            expect(myPackage.toString()).to.be.equal('Package: pesho (inactive)\n- Value (excl. VAT): 3\n- Value (VAT 20%): 3.5999999999999996')
        });

        it('toString() method',function () {
            myPackage.active=false;
            expect(myPackage.toString()).to.be.equal('Package: pesho (inactive)\n- Value (excl. VAT): 3\n- Value (VAT 20%): 3.5999999999999996')
        })
    })
    
});
