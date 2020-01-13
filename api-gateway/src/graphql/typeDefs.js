import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  type Query {
    listings: [Listing!]!
    userSession(me: Boolean!): UserSession
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
    createUserSession(email: String!, password: String!): UserSession!
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

  type UserSession {
    id: ID!
    user: User!
    createdAt: Date!
    expiresAt: Date!
  }
`;

export default typeDefs;
