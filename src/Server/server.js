import express from 'express';
import bodyparser from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.config';
import redis from 'redis';
import knex from 'knex';
import expressQL from 'express-graphql';
import graphQLSchema from './GraphQL/schema';
import graphQLResolver from './GraphQL/resolvers';

const db = knex({
  client: 'pg',
  connection: {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
  },
});

export const redisClient = redis.createClient('redis://redis:6379');
const compiler = webpack(config);
const server = express();
const PORT = process.env.PORT || 8080;
server.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);
server.use(bodyparser.json());
server.use(webpackHotMiddleware(compiler));
server.use(express.static('build'));
server.set('view engine', 'ejs');
server.use(bodyparser.json());
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

server.get('/', (req, res) => {
  res.render('html');
});

server.get('/API', (req, res) => {
  res.json('It works with reloading now!!');
  console.log;
});

server.use(
  '/graphql',
  expressQL({
    schema: graphQLSchema,
    rootValue: graphQLResolver,
  }),
);

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
