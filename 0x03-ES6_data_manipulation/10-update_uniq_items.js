/**
 * Updates the quantity of grocery items that have a quantity of 1 to 100.
 * @param {Map<String, number>} map - A map where the keys are grocery names and the values are their quantities.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @throws {Error} If the input is not a Map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
