# Angular Blog App

## Description

The Angular Blog App is a web application built using Angular framework, featuring SCSS for styling and employing best practices for code quality, testing, and deployment. This project serves as a platform to showcase blog posts and provide a seamless user experience.

## Project Structure
The project is organized as follows:

```
.
├── app
│   ├── app.component.*          # Main application component
│   ├── app.config.ts            # Application-wide configurations
│   ├── app.routes.ts            # Centralized routing configuration
│   ├── auth                     # Authentication configurations
│   ├── core                     # Core features like guards, helpers, interceptors, and services
│   │   ├── components           # Shared reusable components like Header and Login
│   │   ├── guards               # Route guards for authentication
│   │   ├── helpers              # Helper utilities (e.g., role validation)
│   │   ├── interceptors         # HTTP interceptors for logging and error handling
│   │   └── services             # Core services like global error handling
│   ├── features                 # Application features (lazy-loaded modules)
│   │   ├── add-blog-page        # Add blog page component
│   │   ├── blog                 # Blog overview and details
│   │   │   ├── components       # Feature-specific components
│   │   │   └── state            # Blog-specific state management and resolvers
│   │   ├── error-page           # Custom error page component
│   │   └── shared               # Shared components like blog cards
│   ├── models                   # Type definitions and interfaces
│   └── services                 # Feature-specific services
├── assets
│   ├── images                   # Static assets like images
│   └── styles                   # Global SCSS variables
├── environments                 # Environment-specific configurations
│   ├── environment.development.ts
│   └── environment.ts
├── styles.scss                  # Global styles
├── favicon.ico                  # Application favicon
├── index.html                   # Entry point for the application
├── main.ts                      # Bootstrap file for the Angular app
```

## Features

- View, create, and manage blogs.
- Role-based authentication and authorization using Keycloak.
- Responsive design for mobile and desktop.
- Global error handling with snackbar notifications.
- API integration for blog management.
- Deployed to Azure Static Web Apps.

## Technologies Used

- **Frontend:** Angular, Angular Material, RxJS
- **Authentication:** Keycloak with OAuth2 and OIDC
- **Deployment:** Azure Static Web Apps
- **Code Quality Tools:** ESLint, Prettier, Husky, CommitLint

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hftm-in2022/angular-blog-app-hamsiga-rajaratnam.git
   ```

2.	Navigate into the project directory:
```bash
cd angular-blog-app-hamsiga-rajaratnam
```
3.	Install the dependencies:
```bash 
npm install
```
4.	Run the application:
```bash 
ng serve
```
5.	Open your browser and navigate to:

http://localhost:4200



## Code Quality Tools

This project uses the following tools for maintaining code quality:

- ESLint: For static code analysis.
- Prettier: For code formatting.
- CommitLint: To check commit messages.
- Lint Staged & Husky: To enforce code quality at commit time.

## CI/CD Pipeline

This project is integrated with GitHub Actions for continuous integration and deployment. The pipeline will:

- Build the project on every commit.
- Run unit tests and integration tests.
- Automatically update Angular dependencies.

## Deployment

The application is automatically deployed to Azure Static Web Apps. You can access the live application at Azure Deployment Link.
https://black-mushroom-0c0e39010.5.azurestaticapps.net/

## Known Issues/Future Enhancements

- Improve performance for larger datasets.
- Add unit and integration tests.
- Enhance UI for better user experience.
