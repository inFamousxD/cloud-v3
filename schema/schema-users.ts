import {
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";
import { notesType } from "./schema-notes";
import { watchListType } from "./schema-watchlist";

export const userType = new GraphQLObjectType({
    name: "user",
    description: "Fetch a single user and all it's underlying contents",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        notes: { type: new GraphQLList(notesType) },
		watchlist: { type: new GraphQLList(watchListType) }
    }),
});
