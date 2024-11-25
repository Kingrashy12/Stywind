type TailwindClass = string;

/**
 * A utility function for defining custom Tailwind CSS class names.
 * Provides type safety and ensures valid Tailwind CSS classes are used.
 *
 * @param className - A valid Tailwind CSS class.
 * @returns string
 * @type {import('tailwindcss/types/config')}
 *
 *@example
 * const buttonClass = defineClass("bg-blue-500 text-white px-4 py-2");
 * // buttonClass is "bg-blue-500 text-white px-4 py-2"
 */
export const defineClass = (className: TailwindClass) => className;

/**
 * Merges and retrieves a specific value from the provided data object based on the condition.
 *
 * @param {Object} data - The data object containing key-value pairs.
 * @param {string} condition - The key to look up in the data object.
 * @throws {Error} Will throw an error if the condition is not a string.
 * @throws {Error} Will throw an error if the condition does not exist in the data object.
 * @returns {*} The value associated with the provided condition key in the data object.
 *
 * @example
 * const data = { solid: "bg-blue-500", outline: "border border-gray-500" };
 * merge(data, "solid"); // Returns: "bg-blue-500"
 */
export const merge = (data: any, condition: string) => {
  if (typeof condition !== "string")
    throw new Error(
      `Expected a string, but received ${typeof condition}. Please input a string value for the condition.`
    );
  if (!data[condition]) throw new Error(`No data found for ${condition}`);
  return data[condition];
};
