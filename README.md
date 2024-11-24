<p align='center'>
<picture>
    <source media="(prefers-color-scheme: dark)" srcset="./image/logo-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="./image/logo-light.png">
    <img alt="Tailwind CSS" src="./image/logo-light.png" width="350" height="70" style="max-width:100%;">
    </picture>
</p>

<p align='center'><b>Style it your way, with Tailwind.</b> A lightweight, powerful library designed to streamline dynamic styling</p>

---

## Documentation

For full documentation, visit []().

## Table of Contents

<!-- - [Dynamic Classnames](#dynamic-classname)
- [Advanced Usage](#advanced-usage) -->

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [API Reference](#api-reference)

This should provide a clear and concise documentation for the `Stywind` library. Let me know if you'd like to adjust any section!

# Installation

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
