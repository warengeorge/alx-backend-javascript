export default function createIteratorObject(report) {
  const result = [];

  for (const dep in report.allEmployees) {
    if (Object.hasOwn(report.allEmployees, dep)) {
      result.concat(report.allEmployees[dep]);
    }
  }

  return result.entries();
}
