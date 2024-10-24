# Setup Instructions for Angular Blog App

This document provides a detailed guide to set up the Angular Blog App development environment. Follow the steps below to ensure all technical prerequisites are met for efficient and secure work in subsequent iterations.

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

