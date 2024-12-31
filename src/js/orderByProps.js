export default function orderByProps(obj, order) {
  const sortedArray = [];

  for (const key in obj) {
    if (order.includes(key)) {
      sortedArray.push({ key, value: obj[key] });
    }
  }

  const remainingKeys = Object.keys(obj)
    .filter(key => !order.includes(key))
    .sort();

  for (const key of remainingKeys) {
    sortedArray.push({ key, value: obj[key] });
  }

  return sortedArray;
}
