# @sikanadar/my-ui-components

A modern React component library built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern UI Components** - Beautiful, accessible components built with Tailwind CSS
- 📱 **Responsive Design** - Mobile-first responsive components
- 🔧 **TypeScript Support** - Full TypeScript support with type definitions
- 🪝 **Custom Hooks** - Useful React hooks for common patterns
- 🛠️ **Utility Functions** - Helper functions for formatting and common operations
- ⚡ **Tree Shakeable** - Import only what you need

## Installation

```bash
npm install @sikanadar/my-ui-components
```

## Usage

### Components

#### Button

```tsx
import { Button } from "@sikanadar/my-ui-components";

function MyApp() {
  return (
    <div>
      <Button
        variant="primary"
        size="md"
        onClick={() => console.log("Clicked!")}
      >
        Click me
      </Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline" disabled>
        Disabled Button
      </Button>
    </div>
  );
}
```

#### Card

```tsx
import { Card } from "@sikanadar/my-ui-components";

function MyApp() {
  return (
    <Card title="My Card" padding="lg">
      <p>Card content goes here</p>
    </Card>
  );
}
```

### Hooks

#### useLocalStorage

```tsx
import { useLocalStorage } from "@sikanadar/my-ui-components";

function MyComponent() {
  const [count, setCount] = useLocalStorage("counter", { defaultValue: 0 });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Utility Functions

```tsx
import {
  formatCurrency,
  formatDate,
  debounce,
  cn,
} from "@sikanadar/my-ui-components";

// Format currency
const price = formatCurrency(1234.56); // "$1,234.56"
const euroPrice = formatCurrency(1234.56, "EUR", "de-DE"); // "1.234,56 €"

// Format dates
const date = formatDate(new Date()); // "January 1, 2024"
const customDate = formatDate(new Date(), {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
}); // "Monday, Jan 1, 2024"

// Debounce function
const debouncedSearch = debounce((query: string) => {
  console.log("Searching for:", query);
}, 300);

// Combine class names
const className = cn(
  "base-class",
  condition && "conditional-class",
  "another-class"
);
```

## API Reference

### Button Props

| Prop      | Type                                  | Default   | Description                |
| --------- | ------------------------------------- | --------- | -------------------------- |
| children  | ReactNode                             | -         | Button content             |
| variant   | 'primary' \| 'secondary' \| 'outline' | 'primary' | Button style variant       |
| size      | 'sm' \| 'md' \| 'lg'                  | 'md'      | Button size                |
| disabled  | boolean                               | false     | Whether button is disabled |
| onClick   | () => void                            | -         | Click handler              |
| className | string                                | ''        | Additional CSS classes     |

### Card Props

| Prop      | Type                 | Default | Description            |
| --------- | -------------------- | ------- | ---------------------- |
| children  | ReactNode            | -       | Card content           |
| title     | string               | -       | Optional card title    |
| padding   | 'sm' \| 'md' \| 'lg' | 'md'    | Card padding size      |
| className | string               | ''      | Additional CSS classes |

### useLocalStorage Options

| Option       | Type                 | Default        | Description                          |
| ------------ | -------------------- | -------------- | ------------------------------------ |
| defaultValue | T                    | -              | Default value when key doesn't exist |
| serialize    | (value: T) => string | JSON.stringify | Custom serialization function        |
| deserialize  | (value: string) => T | JSON.parse     | Custom deserialization function      |

## Requirements

- React 18+
- Tailwind CSS (for styling)

## Development

This package is built with:

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TSUP](https://tsup.egoist.dev/) - Bundling

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
