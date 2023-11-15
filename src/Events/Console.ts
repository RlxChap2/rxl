export class XErrors {
  static TypeError(msg: any) {
    throw new TypeError(msg);
  }

  static DebuggingErrors(msg: any) {
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
  }
}

export class Log {
  static success(msg: string) {
    console.log(`%c ${msg} `, "color: green");
  }
}