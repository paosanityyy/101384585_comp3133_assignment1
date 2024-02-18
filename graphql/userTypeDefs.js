const { gql } = require('apollo-server-express');
const userTypeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
    }
    type Query {
        users: [User]
        login(username: String!, password: String!): UserResponse
    }
    type UserResponse {
        message: String!
        user: User
    }
    type Mutation {
        signUp(
            username: String!, 
            email: String!, 
            password: String!
        ): UserResponse
    }

`;

module.exports = userTypeDefs;