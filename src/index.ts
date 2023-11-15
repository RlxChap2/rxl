import { Reply } from "./Events/Interactions";
import { XErrors, Log } from "./Events/Console";

// Example usage of the imported modules
const reply = new Reply();
if (reply) {
  console.log(`Running`);
}

// Errors & Debug
XErrors.DebuggingErrors("An error occurred");

// Console Colors
Log.success("This is an information message");