var serialNumber = function serialNumber(schema) {
  schema.pre("save", function (next) {
    let now = Date.now();

    this.serialNumber = now.toString();

    next();
  });
};
export default serialNumber;
