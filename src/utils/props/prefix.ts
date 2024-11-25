import { validElementProps } from "./props";

export const prefixProps = (
  props: any,
  tag: keyof JSX.IntrinsicElements | React.ComponentType<any>
) => {
  const validProps = Object.keys((tag as any).propTypes || {});

  //Filter out valid props and add the rest to remainingProps
  const { prefixedProps, remainingProps } = Object.entries(props).reduce<{
    prefixedProps: Record<string, any>;
    remainingProps: Record<string, any>;
  }>(
    (acc, [key, value]) => {
      if (
        key !== "children" &&
        !validElementProps.includes(key) &&
        !key.startsWith("data-") &&
        !validProps.includes(key)
      ) {
        if (typeof value === "function") {
          acc.remainingProps[key] = value;
        } else {
          acc.prefixedProps[`data-${key.toLowerCase()}`] = value;
        }
      } else {
        acc.remainingProps[key] = value;
      }
      return acc;
    },
    { prefixedProps: {}, remainingProps: {} }
  );

  return { prefixedProps, remainingProps };
};
