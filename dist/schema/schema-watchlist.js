"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.watchListType = void 0;
const graphql_1 = require("graphql");
exports.watchListType = new graphql_1.GraphQLObjectType({
    name: "watchlistType",
    fields: () => ({
        _id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        name: { type: graphql_1.GraphQLString },
        section: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        _createdBy: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) }
    }),
});
