/**
 * Ensure that target is list
 */
const ensureIsList = <T>(source: T) =>
  Array.isArray(source) ? source : [source];

export { ensureIsList };
