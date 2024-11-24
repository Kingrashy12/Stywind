import React from "react";
import { tw } from "./tw";
import { prefixProps } from "../utils";

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
    const Component = React.forwardRef<HTMLElement, Props>((props, ref) => {
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
