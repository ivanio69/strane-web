import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/Status.module.css";
import Collapsible from "react-collapsible";

export default function StatusPage() {
  const [status, setStatus] = useState(null);
  useEffect(() => {
    axios.get("/api/mongoStats").then((r) => {
      setStatus(r.data);
      console.log(r);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Strane Status </h1>
      <h2>
        Web server: <span>{"operational"}</span>
      </h2>
      <h2>
        API server: <span>{"operational"}</span>
      </h2>
      <h2>
        Push server: <span>{"operational"}</span>
      </h2>
      <h2>
        Database server: <span>{"operational"}</span>
      </h2>
      <div className={styles.logbox}>
        {status !== null ? (
          <Collapsible trigger="MongoDB logs" transitionTime={1}>
            {status.map((el) => {
              const e = JSON.parse(el);
              return (
                <div
                  key={el.id}
                  className={styles.item}
                  style={
                    e.s == "W"
                      ? { backgroundColor: "#ffc547" }
                      : e.s == "E"
                      ? { backgroundColor: "red", color: "#fff" }
                      : null
                  }
                >
                  <p>
                    <b>{e.c} </b> Time: {e.t.$date}
                  </p>
                  <p>level: {e.s}</p>

                  <p>id: {e.id}</p>
                  <p>context: {e.ctx}</p>
                  <p>message: {e.msg}</p>
                </div>
              );
            })}
          </Collapsible>
        ) : null}
      </div>
    </div>
  );
}

//{"t":{"$date":"2022-12-18T12:26:17.229+00:00"},"s":"I", "c":"CONTROL", "id":23285, "ctx":"main","msg":"Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'"}
