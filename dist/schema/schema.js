"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const root_query_1 = require("./root-query");
exports.schema = new graphql_1.GraphQLSchema({
    query: root_query_1.rootQuery
});
