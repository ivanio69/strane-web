import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./styles/auth.module.css";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";

function Next() {
  const { data: session, status } = useSession()
  useEffect(() => {
    if (typeof data !== "undefined") {
      window.location.href = "/me"
    }
  }, [])
  return (
    <React.Fragment>
      <Link href="/">
        <p className={styles.back}> {"<"}</p>
      </Link>

      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            <span>S</span>trane<span>.</span>
          </h1>
          <h2 className={styles.create}>Log in</h2>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.error(
              "We are sorry, but password authentication is not yet supported."
            );
          }}
        >
          <input className={styles.input} type="email" placeholder="Email" />
          <div className={styles.lb} />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <div className={styles.lb} />

          <input className={styles.button} type="submit" value="Sign In" />
          <p className={styles.switch}>
            Dont have an account yet?{" "}
            <Link href="/signup" className={styles.lnk}>
              Create account
            </Link>
          </p>
        </form>
        <div className={styles.lb} />

        <div className={styles.googlebox}>
          <span>Or use authentication provider:</span>{" "}
          <div
            className={styles.item}
            onClick={() => {
              signIn("google");
            }}
          >
            <Image src="/icons/google.svg" width={30} height={30} />{" "}
            <span>Google</span>
          </div>
        </div>
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
