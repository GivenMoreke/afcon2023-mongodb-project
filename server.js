const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());

const uri = "mongodb+srv://Given:Given123@afcon2023.jijoj2f.mongodb.net/?retryWrites=true&w=majority&appName=AFCON2023";

async function main() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("afcon2023");

  // List collections endpoint
  app.get('/collections', async (req, res) => {
    try {
      const collections = await db.listCollections().toArray();
      res.json(collections.map(c => c.name));
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Search documents endpoint
  app.get('/documents', async (req, res) => {
    try {
      const collectionName = req.query.collection;
      const search = req.query.search || "";
      if (!collectionName) return res.status(400).json({ error: "collection parameter is required" });

      const collection = db.collection(collectionName);
      const filter = search
        ? { Player_Name: { $regex: search, $options: "i" } }
        : {};

      const docs = await collection.find(filter).limit(50).toArray();
      res.json(docs);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
}

main().catch(console.error);
