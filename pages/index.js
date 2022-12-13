import Link from "next/link";
import React from "react";
import styles from "./styles/home.module.css";

function Home() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span>S</span>trane<span>.</span>
        </h1>
        <h2 className={styles.text}>
          {" "}
          Coming soon...
          <p>
            <Link
              href="https://github.com/lifecats/strane-web/"
              className={styles.button}
            >
              Check out our github
            </Link>
          </p>
        </h2>
      </div>
    </React.Fragment>
  );
}

export default Home;
