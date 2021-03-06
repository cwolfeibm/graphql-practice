const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  schema {
    query: Query #Default configuration, maps to Query type usually ommited 
  }
  type Query {
    greeting: String
  }
`;

// console.log(typeDefs)

const resolvers = {
  Query: {
    greeting: () => "Hello GraphQL world!"
  }
}

const server = new ApolloServer({typeDefs, resolvers});
server.listen({port: 9000})
  .then(
      ({url}) => console.log(`Server running at ${url}`)
    );