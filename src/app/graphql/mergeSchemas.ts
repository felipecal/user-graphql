import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';

import path from 'path';

const typesArray = loadFilesSync(path.join(__dirname, 'modules', 'schemas', '**'));
const typeDefs = mergeTypeDefs(typesArray);

const resolversArray = loadFilesSync(path.join(__dirname, 'modules', 'resolvers', '**'));
const resolvers = mergeResolvers(resolversArray) as any;

export { typeDefs, resolvers };