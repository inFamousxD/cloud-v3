"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userType = void 0;
const graphql_1 = require("graphql");
const schema_notes_1 = require("./schema-notes");
const schema_watchlist_1 = require("./schema-watchlist");
exports.userType = new graphql_1.GraphQLObjectType({
    name: "user",
    description: "Fetch a single user and all it's underlying contents",
    fields: () => ({
        id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        name: { type: graphql_1.GraphQLString },
        notes: { type: new graphql_1.GraphQLList(schema_notes_1.notesType) },
        watchlist: { type: new graphql_1.GraphQLList(schema_watchlist_1.watchListType) }
    }),
});
