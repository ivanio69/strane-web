import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles/auth.module.css";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";

function Next() {
  const { session } = useSession();
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (typeof session !== "undefined") {
      setLoggedIn(true);
    }
  }, []);

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
        {loggedIn ? (
          <div className={styles.lgin}>
            <p className={styles.loggedin}>You are already logged in as</p>
            <div className={styles.user}>
              <h3 className={styles.name}>{session.user.name}</h3>
              <p className={styles.email}>{session.user.email}</p>
              <Link href="/">
                {" "}
                <p
                  className={styles.logout}
                  onClick={() => {
                    signOut({ redirect: false });
                  }}
                >
                  Log out
                </p>
              </Link>
            </div>{" "}
            <button className={styles.button}>Continue</button>
          </div>
        ) : (
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
        )}
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
