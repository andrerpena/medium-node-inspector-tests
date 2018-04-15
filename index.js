"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
function getFibonacciSequence(n) {
    if (n < 2) {
        return [1];
    }
    if (n < 3) {
        return [1, 1];
    }
    var a = getFibonacciSequence(n - 1);
    a.push(a[n - 2] + a[n - 3]);
    return a;
}
function isInteger(value) {
    return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}
app.get('/:n?', function (req, res) {
    var n = req.params.n;
    if (n === undefined || !isInteger(n)) {
        res.send('Please pass an integer number in the path to calculate the Fibonacci sequence. Examples: /6 or /10');
    }
    else {
        var fibSequence = getFibonacciSequence(n);
        res.send(fibSequence.join(' '));
    }
});
app.listen(3000, function () { return console.log('Fibonacci app listening on port 3000!'); });
