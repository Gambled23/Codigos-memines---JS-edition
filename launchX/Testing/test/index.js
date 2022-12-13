let expect = require('chai').expect;
let converter = require('../index.js');

describe('convertidor de codigos de color', function () { //Nombre del test
    describe('rgb to hex', function () {
        it('converts basic colors', function () {
            let redHex = converter.rgbToHex(255,0,0);
            let greenHex = converter.rgbToHex(0,255,0);
            let blueHex = converter.rgbToHex(0,0,255);

            expect (redHex).to.equal('ff0000');
            expect (greenHex).to.equal('00ff00');
            expect (blueHex).to.equal('0000ff');
        })
    });

    describe('hex to rgb', function () {
        it ('converts basic colors', function () {
                let red = converter.hexToRGB('ff0000');
                let green =converter.hexToRGB('00ff00');
                let blue =converter.hexToRGB('0000ff');

                expect (red).to.deep.equal([255,0,0])
                expect (green).to.deep.equal([0,255,0])
                expect (blue).to.deep.equal([0,0,255])
        })
    }); 
})