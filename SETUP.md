# Setup Instructions for Angular Blog App

This document provides a detailed guide to set up the Angular Blog App development environment. Follow the steps below to ensure all technical prerequisites are met for efficient and secure work in subsequent iterations.

## Prerequisites

- [Node.js](https://nodejs.org) (version 16 or later recommended)
- [Angular CLI](https://angular.io/cli) (latest version)
- A GitHub account with access to the organization `hftm-in2022`.
- An Azure account for deployment.

## 1. Create a New Angular Project

- Use the Angular CLI to create a new project with SCSS as the CSS preprocessor:
    ```bash
    ng new angular-blog-app --style=scss
    ```

## 2. Set Up a Git Repository

- Create a new Git repository on GitHub under the organization `hftm-in2022` with the name `angular-blog-app-firstname-lastname`.
- Ensure that the repository is public (unless specified otherwise).

## 3. Set Up Code Quality Tools

1. **Add ESLint:**
    ```bash
    ng add @angular-eslint/schematics
    ```

2. **Install and Configure Prettier:**
    ```bash
    npm install prettier --save-dev
    ```
    Add the following script to your `package.json`:
    ```json
    "scripts": {
        "format": "npx prettier --write ./src/app/*"
    }
    ```

3. **Generate Environments:**
    ```bash
    ng generate environments
    ```

4. **Set Up CommitLint:**
    ```bash
    npm install @commitlint/cli @commitlint/config-conventional --save-dev
    ```
    Add the following configuration to `package.json`:
    ```json
    "commitlint": {
        "extends": [
            "@commitlint/config-conventional"
        ]
    }
    ```

5. **Set Up lint-staged:**
    ```bash
    npm install lint-staged --save-dev
    ```
    Add the following configuration to `package.json`:
    ```json
    "lint-staged": {
        "*.{ts,js,html}": "eslint --cache --fix",
        "*.{ts,js,html,css,scss,less,md}": "prettier --write"
    }
    ```

6. **Set Up Husky:**
    ```bash
    npm install --save-dev husky
    npx husky init
    ```
    Add the following script to `package.json`:
    ```json
    "scripts": {
        "prepare": "husky"
    }
    ```
    Create commit hooks:
    ```bash
    echo 'npx --no-install commitlint --edit "$1"' > .husky/commit-msg
    echo 'npx --no-install lint-staged' > .husky/pre-commit
    ```

## 4. Set Up Automated Deployment to Azure

- Create an Azure Static Web App, this will generate a GitHub Action workflow file automatically.

## 5. Set Up CI/CD Pipeline

- Implement a CI/CD pipeline using GitHub Actions to run builds and tests on every commit.
- Integrate tools for dependency management and automated updates for Angular dependencies.
Reference Video: https://www.youtube.com/watch?v=1vqJ1_AAcUg&themeRefresh=1

## 6. Security Check and Dependency Management

- Integrate tools into the pipeline to check for security vulnerabilities.
- Use tools like Dependabot to ensure the project is always on the latest stable versions of NPM packages.
  Reference Video: https://www.youtube.com/watch?v=1vqJ1_AAcUg&themeRefresh=1

## 7. Static Web App Configuration

The `staticwebapp.config.json` file is critical for configuring routing, fallback rules, authentication, and global headers in Azure Static Web Apps. Follow these steps to ensure proper deployment:

### 1. Location in Development
- Place the `staticwebapp.config.json` file in the **project root directory** for development purposes.

### 2. Inclusion in Production Build
- During the production build (`ng build --configuration production`), the `staticwebapp.config.json` file should be copied to the **output directory** (`dist/blog-app/browser`) for deployment.
- Automate this step by adding the following to your `angular.json` under `assets`:
  ```json
  "assets": [
    "src/favicon.ico",
    "src/assets",
    "staticwebapp.config.json"
  ]
  ```

  ### 3. Configuration Details

Ensure the following configuration is present in your staticwebapp.config.json:
 ```json
  {
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/entries", "/entries/*", "/auth/*"]
  },
  "routes": [
    {
      "route": "/entries/*",
      "rewrite": "https://d-cap-blog-backend---v2.whitepond-b96fee4b.westeurope.azurecontainerapps.io/entries/*"
    },
    {
      "route": "/entries",
      "rewrite": "https://d-cap-blog-backend---v2.whitepond-b96fee4b.westeurope.azurecontainerapps.io/entries"
    },
    {
      "route": "/auth/*",
      "rewrite": "https://d-cap-keyclaok.kindbay-711f60b2.westeurope.azurecontainerapps.io/*"
    }
  ],
  "globalHeaders": {
    "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://d-cap-blog-backend---v2.whitepond-b96fee4b.westeurope.azurecontainerapps.io https://d-cap-keyclaok.kindbay-711f60b2.westeurope.azurecontainerapps.io;"
  }
}
  ```

### 4. Key Elements in the Configuration

- **navigationFallback**:  
  Ensures that the application serves `index.html` for routes that rely on client-side routing, while excluding API and authentication endpoints.

- **routes**:  
  - Maps API and authentication requests to their respective backend services.  
  - Wildcard patterns (`*`) ensure all related paths are correctly routed.

- **globalHeaders**:  
  - Sets security policies and enables resources like fonts and styles to load correctly.  
  - Example: `Content-Security-Policy` ensures secure communication with allowed origins.

---

### 5. Validation

- **Verify the Build Output**:  
  After the build, confirm that the `staticwebapp.config.json` file exists in the `dist/blog-app/browser` directory.

- **Test Deployment**:  
  - Ensure API calls (`/entries`, `/entries/*`, `/auth/*`) are routed correctly.  
  - Validate that client-side routing works as expected for all application paths.
