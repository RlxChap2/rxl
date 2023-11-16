export class Reply {
  public static async interaction(
    options: { interaction?: any; message?: string } = {}
  ) {
    try {
      if (!options.interaction)
        throw new TypeError("interaction is not defined");
      if (!options.message) throw new TypeError("message is not defined");

      await options.interaction.reply(options.message);
      console.log(
        "\x1b[34m" + options.message,
        "\x1b[35m" + `UserID: ${options.interaction.user.id}`,
        `Username: ${options.interaction.user.username}` + "\x1b[37m"
      );
    } catch (err) {
      throw err;
    }
  }

  public static async message(
    options: { interaction?: any; message?: string } = {}
  ) {
    try {
      if (!options.interaction)
        throw new TypeError("interaction is not defined");
      if (!options.message) throw new TypeError("message is not defined");

      await options.interaction.reply(options.message);
      console.log(
        "\x1b[34m" + options.message,
        "\x1b[35m" + `UserID: ${options.interaction.user.id}`,
        `Username: ${options.interaction.user.username}` + "\x1b[37m"
      );
    } catch (err) {
      throw err;
    }
  }
}
