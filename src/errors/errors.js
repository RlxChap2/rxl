async function Errors(error) {
  try {
    console.log(error);
    return new TypeError("Some error occurred.");
  } catch (err) {
    console.error(err);
    return err;
  }
}

module.exports = { Errors };
