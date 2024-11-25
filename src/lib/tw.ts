/**
 * A utility function for combining multiple Tailwind CSS class names.
 * It filters out falsy values (e.g., `undefined`, `null`, `false`, or empty strings) and joins the remaining class names into a single string.
 *
 * @param {...string[]} classes - An array of Tailwind CSS class names or conditional class strings.
 * @returns {string} A single string containing the valid class names.
 *
 * @example
 * const buttonClass = tw("bg-blue-500", isActive && "border border-blue-700", "");
 * // If isActive is true, buttonClass will be "bg-blue-500 border border-blue-700".
 * // If isActive is false, buttonClass will be "bg-blue-500".
 */
export const tw = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
