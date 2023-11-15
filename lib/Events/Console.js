"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.XErrors = void 0;
var XErrors = /** @class */ (function () {
    function XErrors() {
    }
    XErrors.TypeError = function (msg) {
        throw new TypeError(msg);
    };
    XErrors.DebuggingErrors = function (msg) {
        process.on("uncaughtException", function (error) {
            console.error(error);
        });
        process.on("uncaughtExceptionMonitor", function (error) {
            console.error(error);
        });
        process.on("unhandledRejection", function (error) {
            console.error(error);
        });
        process.on("rejectionHandled", function (error) {
            console.error(error);
        });
    };
    return XErrors;
}());
exports.XErrors = XErrors;
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.success = function (msg) {
        console.log("%c ".concat(msg, " "), "color: green");
    };
    return Log;
}());
exports.Log = Log;
