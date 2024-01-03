export default function iterateThroughObject(reportWithIterator) {
  const employeesArray = Array.from(reportWithIterator);

  const result = employeesArray.join(' | ');

  return result;
}
