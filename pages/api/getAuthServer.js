import { MongoClient } from "mongodb";

export default (req, res) => {
  const uri = "mongodb://178.124.169.166:27017";
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("STR_LCINF_EU-EAST-1");
      const movies = database.collection("config");
      const query = {};
      const movie = await movies.findOne(query);
      res.send(movie);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
};
