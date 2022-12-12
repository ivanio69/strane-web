import React from "react";
import Link from "next/link";
import styles from "./styles/auth.module.css";
function Next() {
  return (
    <React.Fragment>
      <Link href="/home">
        <p className={styles.back}> {"<"}</p>
      </Link>

      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            <span>S</span>trane<span>.</span>
          </h1>
          <h2 className={styles.create}>Create account</h2>
        </div>
        <form>
          <input className={styles.input} type="email" placeholder="Email" />
          <div className={styles.lb} />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <div className={styles.lb} />

          <input className={styles.button} type="submit" value="Sign Up" />
        </form>
        <div className={styles.lb} />
        <p className={styles.signin}>
          Already have an account?{" "}
          <Link href="/signin" className={styles.lnk}>
            Log In
          </Link>
        </p>
        <div className={styles.lb} />
        <p className={styles.tos}>
          By continuing you accept our standard terms and condition and our
          privacy policy.{" "}
        </p>
      </div>
    </React.Fragment>
  );
}
export default Next;
