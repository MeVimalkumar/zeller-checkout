# Zeller Checkout

## Description

Zeller Checkout is a TypeScript-based checkout system that applies various pricing rules and discounts. It includes unit tests using Jest and follows best practices for TypeScript development.

## Features

- Implements a checkout system with pricing rules and discounts.
- Uses TypeScript for type safety and maintainability.
- Includes a Jest-based test suite.
- Supports ESNext and CommonJS modules.

## Prerequisites

Ensure you have the following installed:

- Node.js (latest LTS version recommended)
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/MeVimalkumar/zeller-checkout.git
   cd zeller-checkout
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

### Development Mode

To run the project in development mode:

```sh
npm run dev
```

### Build

To compile the TypeScript code:

```sh
npm run build
```

### Start

To run the compiled JavaScript code:

```sh
npm start
```

### Testing

To run the Jest test suite:

```sh
npm test
```

## Project Structure

```
├── src
│   ├── checkout.ts           # Main checkout logic
│   ├── pricing-rules.ts      # Pricing rules and discounts
│   ├── product.ts            # Product catalog management
│   └── index.ts              # Entry point
├── test
│   ├── checkout.test.ts      # Unit tests
├── jest.config.ts            # Jest configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation
```

## Author

Vimalkumar Bohara
