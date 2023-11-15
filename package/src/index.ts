export class Log {
  static success(msg: string) {
    console.log(`%c ${msg} `, "color: green");
  }
}