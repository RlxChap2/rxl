async function MakeNewError(Base) {
  class CustomError extends Base {
    constructor(error) {
      super(error.message);
      this.error = error;
      try {
        console.log(error);
        throw new TypeError("Some error occurred.");
      } catch (err) {
        console.error(err);
        return err;
      }
    }
  }

  Error.captureStackTrace?.(CustomError);

  return { Errors: CustomError };
}

module.exports = { Errors: MakeNewError(Error) };