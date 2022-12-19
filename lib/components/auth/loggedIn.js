import { signOut, useSession } from "next-auth/react";
import styles from "../../../pages/styles/auth.module.css";
import Link from "next/link";
export default function LoggedIn() {
  const { data: session, loading } = useSession();

  return (
    <div className={styles.lgin}>
      {loading || !session ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className={styles.loggedin}>You are already logged in as</p>
          <div className={styles.user}>
            <div
              style={{
                backgroundImage: `url(${session.user.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 50,
                width: 50,
              }}
              className={styles.image}
            />
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
        </>
      )}
    </div>
  );
}
