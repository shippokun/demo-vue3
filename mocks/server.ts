const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    person: Person
  }

  type Person {
    name: String
    age: Int
  }
`;

const mocks = {
  Person: () => ({
    name: 'Jack',
    age: 10,
  }),
};

const server = new ApolloServer({
  typeDefs,
  mocks,
});

server.listen().then(({ url }) => {
  console.log(`🚀Server ready at ${url}`);
});
