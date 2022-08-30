import { ApolloServer } from 'apollo-server';
import { buildSubgraphSchema } from '@apollo/federation';
import { typeDefs, resolvers } from './graphql/mergeSchemas';
import { ApolloServerPluginInlineTraceDisabled } from 'apollo-server-core';
// import database from './db/models';

let schema = buildSubgraphSchema([{ typeDefs, resolvers }]);
// let schema = apollo(typeDefs, resolvers)

const server = new ApolloServer({
    schema, context: ({ req }) => ({
        req,
        // database
    }), plugins: [
        ApolloServerPluginInlineTraceDisabled()
    ]
})

const app = process.env.PORT || 4003;
server.listen(app).then(() => console.log(`🔥 Server ready at ${app}`));