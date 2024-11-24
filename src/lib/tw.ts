export const tw = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
