import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles/home.module.css";

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setIsMobile(true);
    }
  }, []);
  return (
    <React.Fragment>
      <div className={styles.container}>
        <p>We are sorry, but Strane does not work for mobile devices yet.</p>
        <Link href="/home">Go home </Link>
      </div>
    </React.Fragment>
  );
}

export default Home;
