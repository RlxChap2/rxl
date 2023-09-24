const { Errors } = require("../errors/errors");

async function reply(options = {}) {
  try {
    if (!options.interaction)
      throw new TypeError("interaction is not definded");
    if (!options.message) throw new TypeError("message in not definded");

    await options.interaction.reply(options.message);
    console.log(
      "\x1b[34m" + options.message,
      "\x1b[35m" + `UserID: ${options.interaction.user.id}`,
      `Username: ${options.interaction.user.username}` + "\x1b[37m"
    );
  } catch (err) {
    const ErrorsInstance = await Errors;
    const error = new ErrorsInstance.Errors(err);
    throw error;
  }
}

module.exports = { reply };
