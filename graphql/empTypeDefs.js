const { gql } = require('apollo-server-express');
const empTypeDefs = gql`
    type Employee {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        gender: String!
        salary: Float!

    }
    type Query {
        employees: [Employee]
    }
    type EmployeeResponse {
        message: String!
        employee: Employee
    }
    type Mutation {
        addEmployee(
            firstName: String!, 
            lastName: String!, 
            email: String!, 
            gender: String!, 
            salary: Float!
        ): EmployeeResponse
        updateEmployee(
            id: ID!,
            firstName: String!, 
            lastName: String!, 
            email: String!,
        ): EmployeeResponse
        deleteEmployee(
            id: ID!
        ): EmployeeResponse
    } 
`;

module.exports = empTypeDefs;