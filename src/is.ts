/**
 * Check if a value is neither `null` nor `undefined`.
 */
export function isNonNullable<T>(value: T): value is NonNullable<T> {
  return value !== undefined && value !== null;
}

/**
 * Check if a value can produce renderable React content.
 */
export function isReactRenderable<T>(
  value: T,
): value is Exclude<NonNullable<T>, false | ''> {
  return isNonNullable(value) && value !== false && value !== '';
}
