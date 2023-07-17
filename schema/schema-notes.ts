import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const notesType = new GraphQLObjectType({
    name: "notesType",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
		section: { type: GraphQLNonNull(GraphQLString) },
    }),
});
