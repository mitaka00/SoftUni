let expect=require('chai').expect;
let rgbToHexColor=require('../rgb to hex').rgbToHexColor;

describe('rgbToHexColor(red,green,blue)',function () {
    it("should return #FF9EAA on (255, 158, 170)", function() {
        expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
    });

    it("should return #0C0D0E for (12, 13, 14)", function () {
        expect(rgbToHexColor(12, 13, 14)).to.be.equal("#0C0D0E");
    });

    it("should return #000000 for (0, 0, 0)", function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
    });
    it("should return #FFFFFF for (255, 255, 255)", function () {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
    });

    describe('Function with negative parameters',function () {
        it("should return undefined on (-2, 158, 170)", function() {
            expect(rgbToHexColor(-2,158,170)).to.be.undefined;
        });

        it("should return undefined on (120, -158, 170)", function() {
            expect(rgbToHexColor(120,-158,170)).to.be.undefined;
        });

        it("should return undefined on (120, 158, -70)", function() {
            expect(rgbToHexColor(120,158,-70)).to.be.undefined;
        });
    });

    describe('Function with bigger parameters',function () {
        it("should return undefined on (400, 158, 170)", function() {
            expect(rgbToHexColor(400,158,170)).to.be.undefined;
        });

        it("should return undefined on (120, 1158, 170)", function() {
            expect(rgbToHexColor(120,1158,170)).to.be.undefined;
        });

        it("should return undefined on (120, 158, 470)", function() {
            expect(rgbToHexColor(120,158,470)).to.be.undefined;
        });
    });

    describe('Function with not numbers as parameters',function () {
        it("should return undefined on ('gosho', 158, 170)", function() {
            expect(rgbToHexColor('gosho',158,170)).to.be.undefined;
        });

        it("should return undefined on (120, 'pesho', 170)", function() {
            expect(rgbToHexColor(120,'pesho',170)).to.be.undefined;
        });

        it("should return undefined on (120, 158, 'ivan')", function() {
            expect(rgbToHexColor(120,158,'ivan')).to.be.undefined;
        });
    });
});