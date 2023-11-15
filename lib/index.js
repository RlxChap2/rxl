"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Interactions_1 = require("./Events/Interactions");
var Console_1 = require("./Events/Console");
// Example usage of the imported modules
var reply = new Interactions_1.Reply();
if (reply) {
    console.log("Running");
}
// Errors & Debug
Console_1.XErrors.DebuggingErrors("An error occurred");
// Console Colors
Console_1.Log.success("This is an information message");
