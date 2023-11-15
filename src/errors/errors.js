async function MakeNewError(Base) {
  class Errors extends Base {
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

    get name() {
      return `${super.name} [${this.error}]`;
    }
  }

  Error.captureStackTrace?.(Errors);

  return { Errors: Errors };
}

module.exports = { Errors: MakeNewError(Error) };