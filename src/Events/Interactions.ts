export class Reply {
    static async interaction(msg: string, int: any) {
      try {
        if (!int) throw new TypeError("interaction is not defined");
        if (!msg) throw new TypeError("message is not defined");
  
        await int.reply(msg);
        console.log(
          "\x1b[34m" + msg,
          "\x1b[35m" + `UserID: ${int.user.id}`,
          `Username: ${int.user.username}` + "\x1b[37m"
        );
      } catch (err) {
        throw err;
      }
    }
  
    static async message(msg: string, int: any) {
      try {
        if (!int) throw new TypeError("interaction is not defined");
        if (!msg) throw new TypeError("message is not defined");
  
        await int.reply(msg);
        console.log(
          "\x1b[34m" + msg,
          "\x1b[35m" + `UserID: ${int.author.id}`,
          `Username: ${int.author.username}` + "\x1b[37m"
        );
      } catch (err) {
        throw err;
      }
    }
  }