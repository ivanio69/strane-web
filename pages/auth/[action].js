import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/auth.module.css";
import Image from "next/image";
import { signIn, useSession, signOut } from "next-auth/react";
import LoggedIn from "../../lib/components/auth/loggedIn";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { Grid } from "react-loader-spinner";
import { animlib } from "../../lib/animations";
import ServerInfo from "../../lib/components/auth/serverInfo";
import SignUp from "../../lib/components/auth/SignUp";
import SignIn from "../../lib/components/auth/SignIn";
import { useRouter } from "next/router";

function Next() {
  const router = useRouter();
  const { data: session } = useSession();
  const animation = animlib[0];
  const [loading, setLoading] = useState(true);
  const [serverVerified, setServerVerified] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const { action } = router.query;

  useEffect(() => {
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
          {action == "signin" ? (
            <h2 className={styles.create}>Sign In</h2>
          ) : action == "signup" ? (
            <h2 className={styles.create}>Create account</h2>
          ) : (
            <p></p>
          )}
        </div>

        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait">
            <m.div
              key={
                animation.name +
                JSON.stringify(loading) +
                JSON.stringify(serverVerified)
              }
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
                  {!serverVerified ? (
                    <ServerInfo state={setServerVerified} />
                  ) : (
                    <>
                      {loggedIn ? (
                        <LoggedIn />
                      ) : (
                        <>
                          {action == "signin" ? (
                            <SignIn />
                          ) : action == "signup" ? (
                            <SignUp />
                          ) : (
                            <p>
                              Sorry, action that you requested is not available
                            </p>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </m.div>
          </AnimatePresence>
        </LazyMotion>
        <div className={styles.lb} />
        {loggedIn ? null : (
          <div
            className={styles.googlebox}
            onClick={() => {
              signIn("google");
            }}
          >
            <span>Or use authentication provider:</span>{" "}
            <div className={styles.item}>
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
