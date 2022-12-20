import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles/home.module.css";
import SwitchTheme from "../lib/components/SwitchTheme";

function Home({ theme }) {
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
      <SwitchTheme theme={theme} />
      <div className={styles.container}>
        <div>
          <h2 className={styles.welcome}>Welcome to the</h2>

          <h1 className={styles.title}>
            <span>S</span>trane<span>.</span>
          </h1>
        </div>
        <div>
          <Link href="/auth/signup">
            <button className={styles.button}>Start</button>
          </Link>
          <p className={styles.switch}>
            Already have an account?{" "}
            <Link href="/auth/signin" className={styles.lnk}>
              Log In
            </Link>
          </p>
        </div>
        <p className={styles.tos}>
          By continuing you accept our standard terms and condition and our
          privacy policy.
        </p>
      </div>
    </React.Fragment>
  );
}

export default Home;
