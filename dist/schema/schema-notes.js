"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesType = void 0;
const graphql_1 = require("graphql");
exports.notesType = new graphql_1.GraphQLObjectType({
    name: "notesType",
    fields: () => ({
        id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        name: { type: graphql_1.GraphQLString },
        section: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
    }),
});