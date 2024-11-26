<p align='center'>
<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/Kingrashy12/Stywind/blob/main/image/logo-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/Kingrashy12/Stywind/blob/main/image/logo-light.png">
    <img alt="Stywind" src="https://github.com/Kingrashy12/Stywind/blob/main/image/logo-light.png" width="350" height="70" style="max-width:100%;">
</picture> 
</p>

<p align='center'><b>Style it your way, with Tailwind.</b> A lightweight, powerful library designed to streamline dynamic styling</p>

##

## Table of Contents

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Dynamic Styling](#dynamic-styling)
- [API Reference](#api-reference)

# Installation

### Prerequisites

Before installing Stywind, ensure you have:

- React `>= 18.3.2`
- ReactDOM `>= 18.3.2`
- tailwindcss `>= 3.4.1 `

installed in your project.

To install `Stywind`, you can use npm or yarn:

```bash
npm install stywind
```

or

```bash
yarn add stywind
```

# Basic Usage

Once installed, you can start using `Stywind` to create styled components dynamically with Tailwind CSS classes.

```typescript
import { createStyle } from "stywind";

const Button = createStyle("button").classname(
  "bg-blue-500 text-white p-3 rounded-full"
);

const App = () => {
  return <Button>Click me</Button>;
};
```

This will create a Button component styled with the Tailwind classes for a blue background, white text, padding, and rounded corners.

# Dynamic Styling

Stywind provides two ways to style your component dynamically:

1. Using `tw`

The `tw` function is a utility that allows you to dynamically combine multiple Tailwind CSS classes based on component props, states, or conditions. It ensures that only valid, non-falsy values are included in the final class string, making it easier to manage conditional styling.

**Example**

```typescript
const buttonClass = tw("bg-blue-500", isActive ? "border border-blue-700" : "");
// If isActive is true, buttonClass will be "bg-blue-500 border border-blue-700".
// If isActive is false, buttonClass will be "bg-blue-500".
```

2. Using `merge` **-** **"No magic spells or secret handshakes required!" 🧙**

The `merge` function allows you to conditionally apply different sets of Tailwind CSS classes based on dynamic data. It is particularly useful when you need to merge variant styles or make conditional style assignments based on props or other state variables.

**Example**

You can use the `merge` function to conditionally pick and combine CSS classes based on the state or props, such as applying different button styles based on a variant value.

**Single-level Merge Example**

For single-level merges, you can directly access the values based on a key:

```typescript
const buttonClasses = {
  solid: defineClass("bg-blue-500 border-none outline-none"),
  outline: defineClass("bg-transparent border border-neutral-800"),
};

const variant = "solid"; // This could be a prop or state value.

const className = merge.single(buttonClasses, variant);
// If the variant is "solid", className will be "bg-blue-500 border-none outline-none".
```

**Multi-level Merge Example**

For multi-level merges, you can access deeper properties using two levels of keys:

```typescript
const buttonClass = {
  light: {
    solid: defineClass("bg-blue-500"),
    outline: defineClass("border border-gray-500"),
  },
  dark: {
    solid: defineClass("bg-blue-700"),
    outline: defineClass("border border-gray-800"),
  },
};

const theme = "light"; // The primary theme condition.
const variant = "solid"; // The style variant.

const className = merge.multi(buttonClass, theme, variant);
// If the theme is "light" and variant is "solid", className will be "bg-blue-500".
```

In this case, the `merge.multi` function allows you to access nested styles, first selecting the theme (e.g., `light` or `dark`) and then choosing a variant (e.g., `solid` or `outline`).

**Both `tw` and `merge` provide powerful ways to apply dynamic styling to your components, enabling more flexible, maintainable, and conditional styling logic in your React projects.**

# Api Reference

`createStyle(tag: string)`

Creates a styled component with the given HTML tag or React component.

- **Parameters:**

  - `tag` (string): The HTML tag or React component type (e.g., `'button'`, `'div'`, or `React.ComponentType<P>`).

- **Returns:**
  - A styled component that you can apply Tailwind classes to and extend with dynamic behavior.

`.classname(classNames: string)`

Applies Tailwind classes to the created component. Can accept a string of class names or a function to dynamically generate class names based on props.

- **Parameters:**

  - `classNames` (string): Static or dynamic class names.

- **Returns:**
  - The styled component with the given class names.

`tw`

- **Parameters:**

  - `...classes` `(string[])`: An array of Tailwind CSS class names or conditional class strings. Each class is passed as a separate argument.

- **Returns:**

  - `(string)`: A single string containing the valid class names.

**Example**

```typescript
const buttonClass = tw("bg-blue-500", isActive ? "border border-blue-700" : "");
// If isActive is true, buttonClass will be "bg-blue-500 border border-blue-700".
// If isActive is false, buttonClass will be "bg-blue-500".
```

`merge`

- **Parameters:**

  - `data` `(any)`: The object containing the variant data. It can be a simple object with key-value pairs or a more complex object with nested structures.
  - `condition` `(string)`: A string representing the key within the data object to fetch the corresponding styles.
  - `rt_condition` `(any)`: The secondary condition used in `merge.multi` for more complex, multi-level conditions. This is the key in the nested object for which to retrieve the corresponding styles.

- **Returns:**

  - `(string)`: The Tailwind CSS class for the given condition.

`defineClass`

A utility function that's got your back, offering autocomplete suggestions for your class inputs, making it a breeze to define custom Tailwind CSS classes.

- **Parameters:**

  - `className` `(string)`: A valid Tailwind CSS class name to be defined.

- **Returns:**

  - `(string)`: The input Tailwind CSS class name.

**Example**

```typescript
const solidClass = defineClass("bg-blue-500 border-none outline-none");
// Returns: "bg-blue-500 border-none outline-none"
```

## Stay Tuned for Upcoming Features
