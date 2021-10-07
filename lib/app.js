import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import charactersController from './controllers/characters.js';
import standsController from './controllers/stands.js';
// import { graphqlHTTP } from 'express-graphql';
// import { buildSchema } from 'graphql';
import cors from 'cors';

const app = express();

// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);


// const root = {
//   hello: () => {
//     return 'Hello world!';
//   },
// };

app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(express.json());

// app.use('/', {
//   hello: 'world'
// });

app.use('/api/v1/characters', charactersController);
app.use('/api/v1/stands', standsController);

// app.use('/graphql', graphqlHTTP({
//   schema,
//   rootValue: root,
//   graphiql: true,
// }));

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
