import { ClassValue } from "../types/types";

export const tw = (...classes: ClassValue[]) => {
  return classes
    .flatMap((cls) => {
      if (typeof cls === "string") {
        return cls; // Include string classes
      } else if (cls && typeof cls === "object") {
        // Handle object classes
        return Object.entries(cls)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key);
      }
      return []; // Ignore falsy values and non-supported types
    })
    .join(" ");
};
