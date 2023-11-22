"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Console = exports.RColors = void 0;
exports.RColors = {
    White: "white",
    Cyan: "cyan",
    Green: "green",
    Blue: "blue",
    Yellow: "yellow",
    Red: "red",
    Magenta: "magenta",
    Black: "black",
};
var Console = /** @class */ (function () {
    function Console() {
    }
    Console.throwTypeError = function (msg) {
        throw new TypeError(msg);
    };
    Console.Color = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var white, red, green, blue, cyan, yellow, magenta, black;
            return __generator(this, function (_a) {
                white = options.color === "White" ||
                    options.color === Console.RColors.White ||
                    options.color === exports.RColors.White;
                red = options.color === "Red" ||
                    options.color === Console.RColors.Red ||
                    options.color === exports.RColors.Red;
                green = options.color === "Green" ||
                    options.color === Console.RColors.Green ||
                    options.color === exports.RColors.Green;
                blue = options.color === "Blue" ||
                    options.color === Console.RColors.Blue ||
                    options.color === exports.RColors.Blue;
                cyan = options.color === "Cyan" ||
                    options.color === Console.RColors.Cyan ||
                    options.color === exports.RColors.Cyan;
                yellow = options.color === "Yellow" ||
                    options.color === Console.RColors.Yellow ||
                    options.color === exports.RColors.Yellow;
                magenta = options.color === "Magenta" ||
                    options.color === Console.RColors.Magenta ||
                    options.color === exports.RColors.Magenta;
                black = options.color === "Black" ||
                    options.color === Console.RColors.Black ||
                    options.color === exports.RColors.Black;
                if (white) {
                    console.log("\u001B[37m".concat(options.message));
                }
                else if (red) {
                    console.log("\u001B[31m".concat(options.message, "\u001B[37m"));
                }
                else if (green) {
                    console.log("\u001B[32m".concat(options.message, "\u001B[37m"));
                }
                else if (blue) {
                    console.log("\u001B[34m".concat(options.message, "\u001B[37m"));
                }
                else if (cyan) {
                    console.log("\u001B[36m".concat(options.message, "\u001B[37m"));
                }
                else if (yellow) {
                    console.log("\u001B[33m".concat(options.message, "\u001B[37m"));
                }
                else if (magenta) {
                    console.log("\u001B[35m".concat(options.message, "\u001B[37m"));
                }
                else if (black) {
                    console.log("\u001B[30m".concat(options.message, "\u001B[37m"));
                }
                return [2 /*return*/];
            });
        });
    };
    Console.DebuggingErrors = function () {
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
        process.on("worker", function (error) {
            console.error(error);
        });
    };
    Console.RColors = exports.RColors;
    return Console;
}());
exports.Console = Console;
