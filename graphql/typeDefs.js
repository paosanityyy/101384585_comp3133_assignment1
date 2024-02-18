// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//     type User {
//         _id: ID!
//         username: String!
//         email: String!
//         password: String!
//     }
//     type Employee {
//         _id: ID!
//         firstName: String!
//         lastName: String!
//         email: String!
//         gender: String!
//         salary: Float!
//     }
//     input UserInput {
//         username: String!
//         email: String!
//         password: String!
//     }
//     input LoginInput {
//         username: String!
//         password: String!
//     }
//     input EmployeeInput {
//         firstName: String!
//         lastName: String!
//         email: String!
//         gender: String!
//         salary: Float!
//     }
//     type Query {
//         getUsers: [User]!
//         login(loginInput: LoginInput): User!
//         getEmployees: [Employee]!
//         getEmployeeById(_id: ID!): Employee!
//     },
//     type Mutation {
//         createUser(userInput: UserInput): User!
//         createEmployee(employeeInput: EmployeeInput): Employee!
//         updateEmployee(_id: ID!, employeeInput: EmployeeInput): Employee!
//         deleteEmployee(_id: ID!): Boolean!
//     }
    

// `;

// module.exports = typeDefs;