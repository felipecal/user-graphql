import { ApolloServer } from 'apollo-server';
// import database from './db/models';

import { typeDefs, resolvers } from './graphql/mergeSchemas';

const server = new ApolloServer({
    typeDefs, resolvers, context: ({ req }) => ({
        req, 
        // database
    })
})

const app = process.env.PORT || 4003;
server.listen(app).then(() => console.log(`🔥 Server ready at ${app}`));