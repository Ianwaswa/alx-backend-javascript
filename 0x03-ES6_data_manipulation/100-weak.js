/**
 * A weak map that tracks API endpoints and the number of calls made to each.
 */
export const weakMap = new WeakMap();

/**
 * The maximum allowed number of calls for an endpoint before it is considered overloaded.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Tracks the number of calls made to a specified API endpoint and throws an error if the call limit is exceeded.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint object containing protocol and name to track.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @throws {Error} If the number of calls exceeds the maximum allowed limit.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
