// pages/api/graphql.js
import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    getData(page: Int, limit: Int): [Data!]!
  }

  type Data {
    id: ID!
    content: String!
  }
`;

const data = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  content: `Item ${i + 1}`,
}));

const resolvers = {
  Query: {
    getData: (_, { page = 1, limit = 10 }) => {
      const startIndex = (page - 1) * limit;
      return data.slice(startIndex, startIndex + limit);
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const startServer = apolloServer.start();

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
