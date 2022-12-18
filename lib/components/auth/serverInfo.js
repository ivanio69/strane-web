import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./styles/ServerInfo.module.css";
import Link from "next/link";

function ServerInfo({ state }) {
  const [serverInfo, setServerInfo] = useState(null);
  useEffect(() => {
    axios.get("/api/getAuthServer").then((r) => {
      setServerInfo(r.data);
    });
  }, []);
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Please verify that the server you are connected to is actual Strane
        authentication server:
      </p>

      <div className={styles.serverInfo}>
        {serverInfo ? (
          <>
            <p>
              Server: <span>{serverInfo.name}</span>
            </p>
            <p>
              IP address: <span>{serverInfo.ip}</span>
            </p>
            <p>
              Region: <span>{serverInfo.region.region}</span>
            </p>
            <p>
              Server hoster: <span>{serverInfo.provider.fullName}</span>
            </p>
            <Link href="/faq/">Why do i have to do this?</Link>
            <button
              className={styles.button}
              onClick={() => {
                state(true);
              }}
            >
              Verify
            </button>
          </>
        ) : (
          <p> Loading...</p>
        )}
      </div>
    </div>
  );
}

export default ServerInfo;
