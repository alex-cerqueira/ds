import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DesignTokens = () => {
  const colorTokens = {
    'color-primary': '#0066FF',
    'color-secondary': '#6B7280',
    'color-success': '#10B981',
    'color-warning': '#F59E0B',
    'color-danger': '#EF4444',
  };

  const spacingTokens = {
    'spacing-xs': '0.25rem',
    'spacing-sm': '0.5rem',
    'spacing-md': '1rem',
    'spacing-lg': '1.5rem',
    'spacing-xl': '2rem',
  };

  const cssVariables = `
:root {
  --color-primary: #0066FF;
  --color-secondary: #6B7280;
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-danger: #EF4444;

  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}`;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Design Tokens</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Overview</h2>
        <p className="text-gray-600 mb-4">
          Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values to ensure flexibility and consistency across all our products.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Colors</h2>
        <div className="grid grid-cols-1 gap-4">
          {Object.entries(colorTokens).map(([name, value]) => (
            <div key={name} className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
              <div
                className="w-12 h-12 rounded"
                style={{ backgroundColor: value }}
              />
              <div className="ml-4">
                <p className="font-medium text-gray-900">{name}</p>
                <p className="text-gray-500">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Spacing</h2>
        <div className="grid grid-cols-1 gap-4">
          {Object.entries(spacingTokens).map(([name, value]) => (
            <div key={name} className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
              <div
                className="bg-blue-200"
                style={{ width: value, height: '24px' }}
              />
              <div className="ml-4">
                <p className="font-medium text-gray-900">{name}</p>
                <p className="text-gray-500">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">CSS Variables</h2>
        <SyntaxHighlighter
          language="css"
          style={oneLight}
          className="rounded-lg"
        >
          {cssVariables}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default DesignTokens;