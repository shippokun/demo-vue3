const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Query {
    person: Person
  }

  type Person {
    name: String
    age: Int
    updateTime: Date
  }
`;

const mocks = {
  Person: () => ({
    name: 'Jack',
    age: 10,
    updateTime: () => new Date(),
  }),
};

const server = new ApolloServer({
  typeDefs,
  mocks,
});

server.listen().then(({ url }) => {
  console.log(`🚀Server ready at ${url}`);
});
