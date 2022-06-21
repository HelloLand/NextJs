//import { MongoClient } from "mongodb";
import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
  let doc = await req.db.collection("meetups").find().toArray();
  console.log(doc);
  res.json(doc);
});

handler.post(async (req, res) => {
  const data = req.body;
  let doc = await req.db.collection("meetups").insertOne(data);
  console.log(doc);
  res.status(201).json({ message: "Meetup inserted" });
});

export default handler;

// api/new-meetup

// async function handler(req, res) {
//   if (req.method === "POST") {
//     const data = req.body;
//     //const { title, image, address, description } = data;
//     const client = await MongoClient.connect(
//       "mongodb+srv://NextJsMongo78:4893Heard!@cluster0.oyncg.mongodb.net/meetups?retryWrites=true&w=majority"
//     );
//     const db = client.db();
//     const meetupsCollection = db.collection("meetups");

//     const result = await meetupsCollection.insertOne(data);
//     console.log(result);

//     client.close();

//     res.status(201).json({ message: "Meetup inserted" });
//   }
// }

// export default handler;
