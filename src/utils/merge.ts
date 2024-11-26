import { ReturnError } from "./error";

type Merge = {
  /**
   * Performs a multi-level merge.
   * @param {any} data - The data object containing nested properties.
   * @param {string} condition - The primary condition or key to access data.
   * @param {any} rt_condition - The secondary key or condition for deeper access.
   * @returns {string} - The resulting value from the merged data based on conditions.
   *
   * @example
   * const buttonClass = {
   *   light: {
   *     solid: "bg-blue-500",
   *     outline: "border border-gray-500"
   *   },
   *   dark: {
   *     solid: "bg-blue-700",
   *     outline: "border border-gray-800"
   *   }
   * };
   * merge.multi(buttonClass, "light", "solid"); // Returns: "bg-blue-500"
   */
  multi: (data: any, condition: string, rt_condition: any) => string;

  /**
   * Performs a single-level merge.
   * @param {any} data - The data object containing properties.
   * @param {string} condition - The key or condition to access data.
   * @returns {string} - The resulting value from the merged data based on the condition.
   *
   * @example
   * const data = { solid: "bg-blue-500", outline: "border border-gray-500" };
   * merge.single(data, "solid"); // Returns: "bg-blue-500"
   */
  single: (data: any, condition: string) => string;
};

/**
 * Implements the merge functions based on the defined Merge type.
 *
 * @example
 *
 * // Multi merge for nasted properties
 * const buttonClass = {
 *   light: {
 *     solid: "bg-blue-500",
 *     outline: "border border-gray-500"
 *   },
 *   dark: {
 *     solid: "bg-blue-700",
 *     outline: "border border-gray-800"
 *   }
 * };
 * merge.multi(buttonClass, "light", "solid"); // Returns: "bg-blue-500"
 *
 * // Single merge
 * const data = { solid: "bg-blue-500", outline: "border border-gray-500" };
 * merge.single(data, "solid"); // Returns: "bg-blue-500"
 */
export const merge: Merge = {
  multi: (data, condition, rt_condition): string => {
    ReturnError.throw(
      typeof condition !== "string",
      `Expected a string, but received ${typeof condition}. Please input a string value for the condition.`
    );
    ReturnError.log(!data[condition], `No data found for ${condition}`);
    return data[condition][rt_condition];
  },

  single: (data, condition): string => {
    ReturnError.throw(
      typeof condition !== "string",
      `Expected a string, but received ${typeof condition}. Please input a string value for the condition.`
    );
    ReturnError.log(!data[condition], `No data found for ${condition}`);
    return data[condition];
  },
};
