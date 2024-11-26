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

```bash
import { createStyle } from 'stywind';

const Button = createStyle('button').classname('bg-blue-500 text-white p-3 rounded-full');

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

```bash
const buttonClass = tw("bg-blue-500", isActive ? "border border-blue-700": "");
// If isActive is true, buttonClass will be "bg-blue-500 border border-blue-700".
// If isActive is false, buttonClass will be "bg-blue-500".
```

2. Using `merge`

The `merge` function allows you to conditionally apply different sets of Tailwind CSS classes based on dynamic data. It is particularly useful when you need to merge variant styles or make conditional style assignments based on props or other state variables.

**Example**

```bash
const buttonClasses = {
  solid: defineClass("bg-blue-500 border-none outline-none"),
  outline: defineClass("bg-transparent border border-neutral-800"),
};
const variant = "solid"; // This could be a prop or state value.
const className = merge(buttonClasses, variant);
// If the variant is "solid", className will be "bg-blue-500 border-none outline-none".
```

Both `tw` and `merge` provide powerful ways to apply dynamic styling to your components, enabling more flexible, maintainable, and conditional styling logic in your React projects.

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

```bash
const buttonClass = tw("bg-blue-500", isActive ? "border border-blue-700":"");
// If isActive is true, buttonClass will be "bg-blue-500 border border-blue-700".
// If isActive is false, buttonClass will be "bg-blue-500".
```

`merge`

- **Parameters:**

  - `data` `(any)`: The object containing the variant data.
  - `condition` `(string)`: A string representing the key within the data object to fetch the corresponding styles.

- **Returns:**

  - `(string)`: The Tailwind CSS class for the given condition.

**Example**

```bash
const buttonClasses = {
  solid: "bg-blue-500 border-none outline-none",
  outline: "bg-transparent border border-neutral-800",
};
const condition = "solid";
const className = merge(buttonClasses, condition);
// Returns: "bg-blue-500 border-none outline-none"
```

`defineClass`

**"No magic spells or secret handshakes required!" 🧙**

A utility function that's got your back, offering autocomplete suggestions for your class inputs, making it a breeze to define custom Tailwind CSS classes.

- **Parameters:**

  - `className` `(string)`: A valid Tailwind CSS class name to be defined.

- **Returns:**

  - `(string)`: The input Tailwind CSS class name.

**Example**

```bash
const solidClass = defineClass("bg-blue-500 border-none outline-none");
// Returns: "bg-blue-500 border-none outline-none"
```

## Stay Tuned for Upcoming Features
