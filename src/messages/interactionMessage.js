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

module.exports = { reply };
