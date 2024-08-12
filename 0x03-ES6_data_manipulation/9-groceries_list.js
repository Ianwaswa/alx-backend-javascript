/**
 * Returns a map of grocery items and their corresponding quantities.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {Map<string, Number>} A map where the keys are grocery names and the values are their quantities.
 */
export default function groceriesList() {
  const items = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(items);
}
