type TailwindClass = string;

/**
 * A utility function for defining custom Tailwind CSS class names.
 * Provides autocomplete suggestions for your class inputs
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
