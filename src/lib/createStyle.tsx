import React from "react";
import { tw } from "./tw";
import { prefixProps } from "../utils";

/**
 * Create dynamically styled React components using Tailwind CSS classes.
 * It allows defining a component with a specified HTML tag or React component, and applying a default Tailwind CSS class.
 *
 * @template T - The HTML tag or React component type.
 * @template ExtraProps - Additional props that can be passed to the component.
 *
 * @param {T} tag - An HTML tag (e.g., 'div', 'button') or a React component.
 * @returns {Object} An object with a `classname` method to define a Tailwind CSS class for the component.
 *
 * @example
 * const StyledButton = createStyle('button').classname('bg-blue-500 text-white px-4 py-2');
 *
 * // Usage:
 * <StyledButton onClick={handleClick}>Click Me</StyledButton>
 */
const createStyle = <
  T extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  ExtraProps extends object = object
>(
  tag: T
) => ({
  classname: (classname: string) => {
    type Props = T extends keyof JSX.IntrinsicElements
      ? JSX.IntrinsicElements[T] & ExtraProps
      : T extends React.ComponentType<infer P>
      ? P & ExtraProps
      : ExtraProps;
    const Component = React.forwardRef<unknown, Props>((props, ref) => {
      const prefixedProps =
        typeof tag === "string"
          ? {
              ...prefixProps(props, tag).prefixedProps,
              ...prefixProps(props, tag).remainingProps,
            }
          : { ...props };
      return React.createElement(tag, {
        ...prefixedProps,
        ref,
        className: tw(classname, props.className),
      });
    });
    Component.displayName = `Styled(${tag})/`;
    return Component;
  },
});

export default createStyle;
