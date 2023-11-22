/**
 * Copyright (c) 2023-present, RlxChap2, rxl-npm
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const RColors = {
  White: "white",
  Cyan: "cyan",
  Green: "green",
  Blue: "blue",
  Yellow: "yellow",
  Red: "red",
  Magenta: "magenta",
  Black: "black",
};

export class Console {
  private static RColors = RColors;

  public static throwTypeError(msg: any) {
    throw new TypeError(msg);
  }

  public static async Color(
    options: { message?: string; color?: string } = {}
  ) {
    const white =
      options.color === "White" ||
      options.color === Console.RColors.White ||
      options.color === RColors.White;
    const red =
      options.color === "Red" ||
      options.color === Console.RColors.Red ||
      options.color === RColors.Red;
    const green =
      options.color === "Green" ||
      options.color === Console.RColors.Green ||
      options.color === RColors.Green;
    const blue =
      options.color === "Blue" ||
      options.color === Console.RColors.Blue ||
      options.color === RColors.Blue;
    const cyan =
      options.color === "Cyan" ||
      options.color === Console.RColors.Cyan ||
      options.color === RColors.Cyan;
    const yellow =
      options.color === "Yellow" ||
      options.color === Console.RColors.Yellow ||
      options.color === RColors.Yellow;
    const magenta =
      options.color === "Magenta" ||
      options.color === Console.RColors.Magenta ||
      options.color === RColors.Magenta;
    const black =
      options.color === "Black" ||
      options.color === Console.RColors.Black ||
      options.color === RColors.Black;

    if (white) {
      console.log(`\u001b[37m${options.message}`);
    } else if (red) {
      console.log(`\u001b[31m${options.message}\u001b[37m`);
    } else if (green) {
      console.log(`\u001b[32m${options.message}\u001b[37m`);
    } else if (blue) {
      console.log(`\u001b[34m${options.message}\u001b[37m`);
    } else if (cyan) {
      console.log(`\u001b[36m${options.message}\u001b[37m`);
    } else if (yellow) {
      console.log(`\u001b[33m${options.message}\u001b[37m`);
    } else if (magenta) {
      console.log(`\u001b[35m${options.message}\u001b[37m`);
    } else if (black) {
      console.log(`\u001b[30m${options.message}\u001b[37m`);
    }
  }

  public static DebuggingErrors() {
    process.on("uncaughtException", (error) => {
      console.error(error);
    });

    process.on("uncaughtExceptionMonitor", (error) => {
      console.error(error);
    });

    process.on("unhandledRejection", (error) => {
      console.error(error);
    });

    process.on("rejectionHandled", (error) => {
      console.error(error);
    });

    process.on("worker", (error) => {
      console.error(error);
    });
  }
}
