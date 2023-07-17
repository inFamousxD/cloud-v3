import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const watchListType = new GraphQLObjectType({
    name: "watchlistType",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        section: { type: GraphQLNonNull(GraphQLString) },
    }),
});
