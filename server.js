const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const app = express();
//TODO - Replace you Connection String here
const DB_USER = 'paolocasison';
const DB_USER_PASSWORD = 'Password.123';
const DB_CLUSTER = 'cluster0.3myz13n.mongodb.net';
const DB_NAME = 'comp3133_assignment1';
const mongodb_atlas_url = `mongodb+srv://${DB_USER}:${DB_USER_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(mongodb_atlas_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(success => {
    console.log('Success Mongodb connection')
  }).catch(err => {
    console.log('Error Mongodb connection')
  });

  // Apollo GraphQL Setup
const userResolvers = require('./graphql/userResolvers');
const userTypeDefs = require('./graphql/userTypeDefs');
const empResolvers = require('./graphql/empResolvers');
const empTypeDefs = require('./graphql/empTypeDefs');

const typeDefs = [userTypeDefs, empTypeDefs];
const resolvers = [userResolvers, empResolvers];

async function startServer(typeDefs, resolvers) {
    const server = new ApolloServer({ 
        typeDefs, 
        resolvers,
        graphiql: true
    });
    await server.start();

    server.applyMiddleware({ app, path: '/graphql'});
    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
}

startServer(typeDefs, resolvers);