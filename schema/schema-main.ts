import { GraphQLNonNull, GraphQLSchema, GraphQLString } from 'graphql';
import { GraphQLObjectType } from "graphql";
import { userType } from "./schema-users";

export const rootQuery = new GraphQLObjectType({
    name: "rootQuery",
    fields: () => ({
        user: {
            type: userType,
			args: {
				_id: { type: GraphQLNonNull(GraphQLString) }
			},
            resolve: (parent, args) => {
				
			},
        },
    }),
});


export const schema = new GraphQLSchema({
	query: rootQuery
})