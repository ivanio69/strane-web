import axios from "axios";

export default function stats(req, res) {
  axios.get("http://178.124.169.166:2943/mongoStatus").then((r) => {
    res.send(r.data);
  });
}
