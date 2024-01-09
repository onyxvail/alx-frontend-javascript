export default function cleanSet(set, startString) {
  if (!startString || !set || typeof startString !== 'string') {
    return '';
  }
  return [...set]
    .filter((val) => val.startsWith(startString))
    .map((val) => val.slice(startString.length)).join('-');
}
