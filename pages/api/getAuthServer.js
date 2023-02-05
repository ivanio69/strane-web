import { MongoClient } from "mongodb";

export default (req, res) => {
  const uri = "mongodb://178.124.169.166:27017";
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("STR_LCINF_EU-EAST-1");
      const config = database.collection("config");
      const query = {};
      const r = await config.findOne(query);
      res.send(r);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
};
