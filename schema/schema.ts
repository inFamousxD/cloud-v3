import { GraphQLSchema } from 'graphql';
import { rootQuery } from './root-query';

export const schema = new GraphQLSchema({
	query: rootQuery
})