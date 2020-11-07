import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import next from "next";
import express from "express";
import { createConnection, useContainer } from "typeorm";
import Container from "typedi";
import cookieParser from "cookie-parser";
import { parse } from "url";
import AuthenticationResolver from "./src/resolvers/AuthenticationResolver";
import UserResolver from "./src/resolvers/UserResolver";

const nextApp = next({ dev: true });
const handler = nextApp.getRequestHandler();
useContainer(Container);
const PORT = 3000;

export const server = async () => {
  return nextApp.prepare().then(async () => {
    const app = express();
    app.use(cookieParser(process.env.COOKIE_SECRET));
    /**
     * typeorm setup
     */

    await createConnection();

    /**
     * Typegraphql setup
     */
    const schema = await buildSchema({
      resolvers: [UserResolver, AuthenticationResolver],
      container: Container,
    });

    const apollo = new ApolloServer({
      schema,
      context: async ({ req, res }) => {
        return { res, req };
      },
    });
    apollo.applyMiddleware({ path: "/api/gql", app });
    app.all("*", (req, res) => {
      const parsedUrl = parse(req.url, true);
      handler(req, res, parsedUrl);
    }); // use page folder

    app.listen({ port: PORT }, () => {
      console.log(`🚀 http://localhost:${PORT}`);
      console.log(`🚀 http://localhost:${PORT}${apollo.graphqlPath}`);
      console.log(`🚀 ws://localhost:${PORT}${apollo.subscriptionsPath}`);
    });
  });
};
