"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.rootQuery = void 0;
const graphql_1 = require("graphql");
const graphql_2 = require("graphql");
const schema_users_1 = require("./schema-users");
exports.rootQuery = new graphql_2.GraphQLObjectType({
    name: "RootQuery",
    fields: () => ({
        user: {
            type: schema_users_1.userType,
            resolve: () => ({ name: "abc" }),
        },
    }),
});
exports.schema = new graphql_1.GraphQLSchema({
    query: exports.rootQuery
});
