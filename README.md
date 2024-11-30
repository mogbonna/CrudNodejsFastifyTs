# CrudNodejsFastifyTs

## Overview

CrudNodejsFastifyTs is a lightweight and efficient project designed to showcase CRUD operations using Node.js, Fastify, and TypeScript. It provides a robust and scalable boilerplate for building RESTful APIs with a focus on performance and developer productivity.

## Features

- Fast and efficient routing with [Fastify](https://www.fastify.io/)
- Strongly typed codebase with [TypeScript](https://www.typescriptlang.org/)
- RESTful API design
- Middleware support for validation and error handling
- Modular structure for scalability
- Support for various databases (e.g., MongoDB, PostgreSQL, MySQL) through configurable data access layers

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A compatible database (e.g., MongoDB, PostgreSQL, or MySQL)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mogbonna/CrudNodejsFastifyTs.git
cd CrudNodejsFastifyTs
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and specify the necessary environment variables:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
```

### 4. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

The server will start on `http://localhost:3000`.

## Project Structure

```plaintext
├── src
│   ├── controllers     # Request handlers
│   ├── models          # Database models and schemas
│   ├── routes          # API routes
│   ├── services        # Business logic and data access
│   ├── config          # Utility functions and helpers
│   ├── types           # Fastify types configuration
│   └── app.ts          # Entry point of the src
├──index.ts             # Entry point of the application
├──.env                 # Environment configuration file
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

## Available Scripts

- **`npm run dev`**: Start the development server with hot-reloading
- **`npm run build`**: Compile TypeScript to JavaScript
- **`npm start`**: Run the production server
- **`npm run lint`**: Lint the codebase with ESLint
- **`npm run test`**: Run tests

## Usage

1. Define your models in the `src/models` directory.
2. Create and configure API routes in the `src/routes` directory.
3. Implement business logic and database queries in the `src/services` directory.
4. Use controllers to handle incoming requests and responses.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to your branch.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Fastify](https://www.fastify.io/)
- [TypeScript](https://www.typescriptlang.org/)
- Community contributors
