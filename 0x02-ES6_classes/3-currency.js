export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * Returns the full string representation of this Currency.
   * @returns {String} - The name and code of the currency in the format "Name (Code)".
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
