const fs = require("fs");
const readline = require("readline");
const app = require("express")();
import { MongoClient } from "mongodb";

const uri = "mongodb://178.124.168.166:27017";

const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db("STR_LCINF_EU-EAST-1");
    const movies = database.collection("config");
    const query = {};
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get("/mongoStatus", (req, res) => {
  async function processLineByLine() {
    const fileStream = fs.createReadStream("../mongoLog.log");

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
    const result = [];
    for await (const line of rl) {
      // Each line in input.txt will be successively available here as `line`.
      result.push(line);
    }
    console.log(result);
    res.send(result);
  }

  processLineByLine();
});

app.listen(2943);
