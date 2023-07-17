import { GraphQLSchema } from 'graphql';
import { GraphQLObjectType } from "graphql";
import { userType } from "./schema-users";

export const rootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: () => ({
        user: {
            type: userType,
            resolve: () => ({ name: "abc" }),
        },
    }),
});


export const schema = new GraphQLSchema({
	query: rootQuery
})