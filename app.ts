import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/schema-main";
const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
);

app.get('/login', (request, response) => {
	response.send('loginreq')
});

app.get('/notes', (request, response) => {
	response.send('notes')
});

app.get('/watchlist', (request, response) => {
	response.send('watchlist')
});

app.listen(5000, () => console.log("Server Up"));
