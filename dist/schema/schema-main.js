"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.rootQuery = void 0;
const graphql_1 = require("graphql");
const graphql_2 = require("graphql");
const schema_users_1 = require("./schema-users");
exports.rootQuery = new graphql_2.GraphQLObjectType({
    name: "rootQuery",
    fields: () => ({
        user: {
            type: schema_users_1.userType,
            args: {
                _id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) }
            },
            resolve: (parent, args) => {
            },
        },
    }),
});
exports.schema = new graphql_1.GraphQLSchema({
    query: exports.rootQuery
});
