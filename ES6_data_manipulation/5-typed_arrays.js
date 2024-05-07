// Function createInt8TypedArray, returns an ArrayBuffer with an Int8 value at a spec position.
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buff = new ArrayBuffer(length);
  const int8Array = new Int8Array(buff);
  view.setInt8(position, value);
  return view;
}
