# Modular Fastify

This project is inspired by Matteo Collina's modular-monolith concept and the common project structure in the Go language. It aims to bridge these two worlds by showcasing the use of Fastify, a fast and low-overhead web framework for Node.js, within a modular project structure. By adopting this approach, you can build scalable, maintainable, and highly organized applications.

## About

This project demonstrates how to structure a Fastify application into modules, promoting separation of concerns and modularity. Each module encapsulates a specific domain or feature, such as inventory and order management, and consists of API routes, command handlers, services, and models.

## Project Structure

The project follows a well-organized structure that promotes clarity and maintainability. Here is an overview of the directory structure:

```
├── src
│   ├── config
│   │   ├── configDiscovery.ts
│   │   ├── error.ts
│   │   └── index.ts
│   ├── inventory
│   │   ├── api
│   │   ├── command
│   │   ├── index.ts
│   │   └── service
│   ├── main.ts
│   ├── model
│   │   ├── index.ts
│   │   └── user.ts
│   ├── order
│   │   ├── api
│   │   ├── command
│   │   ├── index.ts
│   │   ├── model
│   │   └── service
│   ├── server
│   │   ├── application.ts
│   │   └── index.ts
│   └── storage
│       ├── index.ts
│       └── memory.ts
└── tests
    ├── bootstrap.ts
    ├── config
    │   └── configDiscovery.test.ts
    ├── inventory
    │   ├── api
    │   ├── command
    │   └── service
    ├── order
    │   ├── api
    │   ├── command
    │   └── service
    └── storage
```

- **src**: Contains the source code of the project.
    - **config**: Handles project configuration and error handling.
    - **inventory**: Fake business domain module represents the inventory module with API routes, command handlers, and services related to inventory management.
    - **model**: Contains the data models used throughout the project.
    - **order**: Fake business domain module that represents the order module with API routes, command handlers, and services related to order management.
    - **server**: Manages the Fastify application and its initialization.
    - **storage**: Provides storage-related functionality, such as connecting to databases.
- **tests**: Contains the test suite for the project, divided into respective modules.

In this project, each functionality is stored in a separate module, 
promoting modularization and separation of concerns. For example, if you wanted to add metrics functionality to the application, 
you would create a new directory called `metrics` and handle all metrics-related code within that module. 
This approach ensures that each feature or domain has its dedicated module, making it easier to manage, test, and maintain the codebase.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Install the dependencies: `npm install`
3. Configure the project: Modify the configuration files in the `src/config` directory to match your requirements.
4. Implement your own logic: Replace the placeholder code with your business logic in the respective modules (`inventory`, `order`, etc.).
5. Start the application: Run `npm start` to start the Fastify server.

## Additional Resources

- [Modular Monolith with Fastify](https://portal.gitnation.org/contents/building-a-modular-monolith-with-fastify): Watch Matteo Collina's talk that inspired this project.

## Contributing

Contributions are welcome! If you want to enhance this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch: