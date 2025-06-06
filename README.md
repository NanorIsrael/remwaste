# REMWaste skip page

Welcome to the REMWaste skip page! This portal is built using [Nextjs](https://nextjs.org/), a modern front-end build tool that provides a fast and optimized development experience. This README will guide you through setting up, developing, and deploying the page.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Development](#development)
4. [Building for Production](#building-for-production)
5. [Deployment](#deployment)
6. [Contributing](#contributing)
7. [License](#license)

## Getting Started

To get started with the application, follow these steps:

1. **Clone the Repository**

    ```bash
    git clone https://git@github.com:NanorIsrael/remwaste.git
    cd developer-portal
    ```

2. **Install Dependencies**

    Make sure you have [Node.js](https://nodejs.org/) installed (version 14 or higher is recommended). Then, install the project dependencies:

    ```bash
    npm install
    ```

3. **Start the Development Server**

    Once the dependencies are installed, you can start the development server:

    ```bash
    npm run dev
    ```

    This will start the Vite development server, and you can view the portal by navigating to `http://localhost:3000` in your browser.

## Project Structure

The project is structured as follows:

```
developer-portal/
├── public/              # Static assets (e.g., images, fonts)
├── src/                 # Source code
│   ├── assets/          # Assets like images, styles, etc.
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Layout components for pages
│   ├── pages/           # Page components
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main application component
├── *.config.js       	 # configuration file
├── package.json         # Project dependencies and scripts
├── README.md            # This file
```

## Development

During development, you can use the following commands:

-   **Start the Development Server**

    ```bash
    npm run dev
    ```

    This will start the Vite development server with hot module replacement (HMR) enabled, allowing you to see changes in real-time.

-   **Lint the Code**

    To ensure code quality, you can run the linter:

    ```bash
    npm run lint
    ```

-   **Format the Code**

    To automatically format the code according to the project's style guidelines:

    ```bash
    npm run format
    ```

-   **Run Tests**

    To execute the project's test suite:

    ```bash
    npm run test
    ```

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Approach to building the  page

To accelerate development, an existing Next.js template was used as a foundation. This template includes minimal modules necessary to build the page efficiently. The application leverages a combination of server and client components, with API calls made from the client side.

To improve code readability and maintainability, several reusable components were created to avoid cluttering any single file. API requests are handled using the native fetch function, and product data is displayed using the Card component from the shadcn/ui library.

Loading states and API errors are gracefully handled to ensure a smooth user experience. Given the simplicity of the application, only essential third-party libraries were used, all of which are listed in the dependencies section of the package.json file.

Thank you 🚀
