"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const schema_main_1 = require("./schema/schema-main");
const app = (0, express_1.default)();
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: schema_main_1.schema,
    graphiql: true,
}));
app.get('/login', (request, response) => {
    response.send('loginreq');
});
app.get('/notes', (request, response) => {
    response.send('notes');
});
app.get('/watchlist', (request, response) => {
    response.send('watchlist');
});
app.listen(5000, () => console.log("Server Up"));
