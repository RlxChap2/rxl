export class Console {
  public static throwTypeError(msg: any) {
    throw new TypeError(msg);
  }

  public static async Color(
    options: { message?: string; color?: string } = {}
  ) {
    console.log(`%c ${options.message} `, `color: ${options.color}`);
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
