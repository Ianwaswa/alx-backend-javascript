import ClassRoom from './0-classroom';

/**
 * Generates an array of {@link ClassRoom} instances, each with a designated size.
 * @returns An array of {@link ClassRoom} objects.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
