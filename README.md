# Description

This repository contains a project that consists of an API and an Angular CRUD application. The API is built using .NET 6 and follows the Domain-Driven Design pattern. It uses a layered architecture, with separate business logic, infrastructure, and presentation layers. It also utilizes tools like Entity Framework Core and AutoMapper to access and transform data from a relational database.

The Angular application allows users to manage data with front and backend validation using FluentValidation syntax. It also has an overview grid for easy data visualization. The application can be started using a docker-compose file, making it easy to run and test. Additionally, the repository has a Git history to track changes made to the project over time.

## Project Goals

The main objective of this project is to provide a stable and well-documented API and application that can be used to manage data. The API provides a reliable programming interface that other applications or services can use to interact with and retrieve necessary data. The Angular application provides a user-friendly interface for data management, with validation and easy data visualization. Finally, the project is containerized and can be run using a docker-compose file, making it easy to deploy and test.

## Project Structure

The project is structured into two main folders: api and app. The api folder contains the .NET 6 WebAPI, and the app folder contains the Angular application. Both folders have their own separate README files that explain the setup and installation process for each.

The api folder is structured using a layered architecture. It contains the following subfolders:

- Application: contains classes that implement business logic and coordinate communication between different parts of the application.
- Domain: contains domain objects that represent the core concepts and business rules of the application.
- Infrastructure: contains classes that implement data access, including Entity Framework Core database contexts, repositories, and data transfer objects (DTOs).
- Presentation: contains classes that handle web requests and responses, including controllers and view models.

The app folder contains an Angular application that implements a CRUD (Create, Read, Update, Delete) interface for managing data. It uses the Angular Material design framework for easy UI development and integrates FluentValidation syntax to provide real-time validation for user input. The application also uses a grid to provide an overview of the data, making it easy to visualize and understand.

## Getting Started

To get started with this project, clone the repository to your local machine and follow the instructions in the api and app README files. Make sure you have .NET 6 and Node.js installed on your machine.

## Contributions

Contributions to this project are welcome. If you find any bugs or want to suggest improvements, please create a pull request or open an issue in the repository.

## Docker Support

The application is fully Dockerized and can be easily deployed using docker-compose. Simply run the following command to start the application:

This will start the application in development mode, using the Docker containers for the API and the Angular app. You can then access the application by navigating to http://localhost:4200 in your web browser.

## Git History

This repository contains a comprehensive Git history that tracks all changes made to the codebase. This makes it easy to see how the project has evolved over time and who made what changes. By using Git, you can easily revert to previous versions of the codebase if necessary, and also collaborate with other developers using the same repository.

## Conclusion

In summary, this repository contains a complete solution for developing a WebApi and Angular CRUD application using .Net6 with Docker support and FluentValidation syntax in both front and backend. It also includes a git history to keep track of changes made to the codebase. Whether you are just starting out or are an experienced developer
