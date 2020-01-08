import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    listings: [Listing!]!
  }

  type Listing {
    id: ID!
    title: String!
    description: String!
  }
`;

export default typeDefs;
