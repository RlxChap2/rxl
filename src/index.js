function rxl(string) {
  return string === "rxl";
}

async function reply(options = {}) {
  if (!options.interaction) throw new TypeError("interaction is not definded");
  if (!options.message) throw new TypeError("message in not definded");

  await options.interaction.reply(options.message);
  console.log(
    options.message,
    `UserID: ${options.interaction.user.id}`,
    `Username: ${options.interaction.user.username}`
  );
}

async function Errors(error) {
  try {
    console.log(error);
    return new TypeError("Some error occurred.");
  } catch (err) {
    console.error(err);
    return err;
  }
}

async function handleError() {
  try {
    const error = await Errors("Something went wrong.");
    console.log("Error:", error);
  } catch (err) {
    console.log("Caught an error:", err);
  }
}

module.exports = { rxl, reply, handleError };
