// Function cleanSet, returns a string of all the set values that start with string (startString).
export default function cleanSet(set, startString) {
  const array = Array.from(set);
  const filterarray = array.filter((value) => value.startsWith(startString));
  const extracarray = filterarray.map((value) => value.substring(startString.length));
  const result = extracarray.join('-');
  return result;
}
