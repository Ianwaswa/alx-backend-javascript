/**
 * Creates a buffer array of a specified length and sets a specific position to a given value.
 * @param {Number} length - The length of the buffer.
 * @param {Number} position - The position in the buffer to modify.
 * @param {Number} value - The value to be set at the specified position.
 * @author Ian Juma <https://github.com/Ianwaswa>
 * @returns {DataView} A DataView representing the buffer with the modified value.
 * @throws {Error} If the specified position is outside the buffer's range.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
