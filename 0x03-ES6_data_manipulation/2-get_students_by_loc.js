export default function getStudentsByLocation(list, city) {
  return list.filter(({ location }) => location === city);
}
