import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const watchListType = new GraphQLObjectType({
    name: "watchlistType",
    fields: () => ({
        _id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        section: { type: GraphQLNonNull(GraphQLString) },
		_createdBy: { type: GraphQLNonNull(GraphQLString) }
    }),
});
