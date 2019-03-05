"use strict";
exports.__esModule = true;
var Square = /** @class */ (function () {
    function Square(height, width) {
        this.height = 0;
        this.width = 0;
        this.height = height;
        this.width = width;
    }
    Square.prototype.getArea = function () {
        return this.calcArea;
    };
    Square.prototype.calcArea = function () {
        return this.height * this.width;
    };
    return Square;
}());
exports["default"] = Square;
