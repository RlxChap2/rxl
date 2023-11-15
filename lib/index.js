"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.success = function (msg) {
        console.log("%c ".concat(msg, " "), "color: green");
    };
    return Log;
}());
exports.Log = Log;
