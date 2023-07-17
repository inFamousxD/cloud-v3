import { GraphQLObjectType, GraphQLString } from 'graphql';

export const rootQuery = new GraphQLObjectType({
	name: 'RootQuery',
	fields: () => ({
		example: {
			type: GraphQLString,
			resolve: () => ("example")
		}
	})
})