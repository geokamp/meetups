import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://geokamp98:vbO93jwFireX9Gby@cluster0.p4nkj.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetup");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
