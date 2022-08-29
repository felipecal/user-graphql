import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

const typesArray = loadFilesSync(path.join(__dirname, '**', '.gql'));
const typeDefs = mergeTypeDefs(typesArray);

const resolversArray = loadFilesSync(path.join(__dirname, '**', '.ts'))
const resolvers = mergeResolvers(resolversArray);

export { typeDefs, resolvers };