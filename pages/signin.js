import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles/auth.module.css";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import LoggedIn from "../lib/components/auth/loggedIn";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { Grid } from "react-loader-spinner";
import { animlib } from "../lib/animations";

function Next() {
  const { data: session } = useSession();
  const animation = animlib[0];
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    console.log(session);
    if (session !== undefined && session !== null) {
      setLoggedIn(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 750);
  }, [session]);

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
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait">
            <m.div
              key={animation.name + JSON.stringify(loading)}
              className={styles.right}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={animation.variants}
              transition={animation.transition}
              opacity={0}
            >
              {loading ? (
                <Grid
                  height="80"
                  width="80"
                  color="#6349ff"
                  ariaLabel="grid-loading"
                  radius="12.5"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              ) : (
                <>
                  {" "}
                  {loggedIn ? (
                    <LoggedIn />
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        toast.error(
                          "We are sorry, but password authentication is not yet supported."
                        );
                      }}
                    >
                      <input
                        className={styles.input}
                        type="email"
                        placeholder="Email"
                      />
                      <div className={styles.lb} />
                      <input
                        className={styles.input}
                        type="password"
                        placeholder="Password"
                      />
                      <div className={styles.lb} />

                      <input
                        className={styles.button}
                        type="submit"
                        value="Sign In"
                      />
                      <p className={styles.switch}>
                        Dont have an account yet?{" "}
                        <Link href="/signup" className={styles.lnk}>
                          Create account
                        </Link>
                      </p>
                    </form>
                  )}
                </>
              )}
            </m.div>
          </AnimatePresence>
        </LazyMotion>
        <div className={styles.lb} />
        {loggedIn ? null : (
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
        )}
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
