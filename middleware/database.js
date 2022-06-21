import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb+srv://NextJsMongo78:4893Heard!@cluster0.oyncg.mongodb.net/meetups?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  await client.connect();
  req.dbClient = client;
  req.db = client.db('meetups');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;