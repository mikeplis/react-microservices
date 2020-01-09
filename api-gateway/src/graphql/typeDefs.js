import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    listings: [Listing!]!
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
  }

  type Listing {
    id: ID!
    title: String!
    description: String!
  }

  type User {
    email: String!
    id: ID!
  }
`;

export default typeDefs;
