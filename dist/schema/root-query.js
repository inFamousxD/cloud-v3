"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootQuery = void 0;
const graphql_1 = require("graphql");
exports.rootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        example: {
            type: graphql_1.GraphQLString,
            resolve: () => ("example")
        }
    })
});
