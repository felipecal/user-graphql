import { ApolloServer } from 'apollo-server';
import { buildSubgraphSchema } from '@apollo/federation';
import { typeDefs, resolvers } from './graphql/mergeSchemas';
import { ApolloServerPluginInlineTraceDisabled } from 'apollo-server-core';
import { config as dotEnv } from 'dotenv';

dotEnv();

let schema = buildSubgraphSchema([{ typeDefs, resolvers }]);

const server = new ApolloServer({
    schema, context: ({ req }) => ({
        req
    }), plugins: [
        ApolloServerPluginInlineTraceDisabled()
    ]
})

const app = process.env.PORT || 4003;
server.listen(app).then(() => console.log(`🔥 Server ready at ${app}`));