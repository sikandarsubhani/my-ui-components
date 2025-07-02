"use client";

import { Button, Card, useLocalStorage, formatCurrency, formatDate } from "../exports";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            My UI Component Library
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of reusable React components built with Next.js, TypeScript, and Tailwind CSS.
            This page demonstrates the components that will be available in your npm package.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Button Components */}
          <Card title="Button Components" padding="lg">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button disabled>Disabled</Button>
                <Button onClick={() => alert('Button clicked!')}>
                  Click Me
                </Button>
              </div>
            </div>
          </Card>

          {/* Card Components */}
          <Card title="Card Variations" padding="lg">
            <div className="space-y-4">
              <Card padding="sm" className="bg-blue-50">
                <p className="text-sm">Small padding card</p>
              </Card>
              <Card padding="md" className="bg-green-50">
                <p className="text-sm">Medium padding card</p>
              </Card>
              <Card padding="lg" className="bg-purple-50">
                <p className="text-sm">Large padding card</p>
              </Card>
            </div>
          </Card>

          {/* Utility Functions */}
          <Card title="Utility Functions" padding="lg">
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-700">Currency Formatting:</h4>
                <p className="text-gray-600">{formatCurrency(1234.56)}</p>
                <p className="text-gray-600">{formatCurrency(999.99, 'EUR', 'de-DE')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Date Formatting:</h4>
                <p className="text-gray-600">{formatDate(new Date())}</p>
                <p className="text-gray-600">{formatDate(new Date(), {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}</p>
              </div>
            </div>
          </Card>

          {/* Hook Demo */}
          <LocalStorageDemo />
        </div>

        <Card title="Getting Started" padding="lg">
          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold mb-3">Installation</h3>
            <div className="bg-gray-100 rounded-md p-4 mb-4">
              <code className="text-sm">npm install @sikanadar/my-ui-components</code>
            </div>

            <h3 className="text-lg font-semibold mb-3">Usage</h3>
            <div className="bg-gray-100 rounded-md p-4">
              <pre className="text-sm">
                {`import { Button, Card, useLocalStorage } from '@sikanadar/my-ui-components';

function MyApp() {
  return (
    <Card title="My Card">
      <Button variant="primary">Click me!</Button>
    </Card>
  );
}`}
              </pre>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function LocalStorageDemo() {
  const [count, setCount] = useLocalStorage('demo-counter', { defaultValue: 0 });
  const [name, setName] = useLocalStorage('demo-name', { defaultValue: '' });

  return (
    <Card title="useLocalStorage Hook Demo" padding="lg">
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Counter: {count}</h4>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setCount(prev => prev + 1)}
            >
              Increment
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setCount(0)}
            >
              Reset
            </Button>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Name Storage:</h4>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {name && <p className="mt-2 text-sm text-gray-600">Hello, {name}!</p>}
        </div>
      </div>
    </Card>
  );
}
