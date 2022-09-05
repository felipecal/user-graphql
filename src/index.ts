import { ApolloServer } from 'apollo-server-express';
import { buildSubgraphSchema } from '@apollo/federation';
import { typeDefs, resolvers } from './graphql/mergeSchemas';
import { ApolloServerPluginInlineTraceDisabled } from 'apollo-server-core';
import express from 'express';
import { config as dotEnv } from 'dotenv';

dotEnv();

const app = express();

let schema = buildSubgraphSchema([{ typeDefs, resolvers }]);

const server = new ApolloServer({
    schema,
    introspection: true,
    context: ({ req }) => ({
        req
    }), plugins: [
        ApolloServerPluginInlineTraceDisabled()
    ]
})

const startServer = async () => {
    await server.start()
    server.applyMiddleware({app});
    
}
startServer().then(() => {
    app.listen(process.env.PORT || 3000, () => console.log(`🔥 Server ready at ${process.env.PORT}`));
});
