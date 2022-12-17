import { signOut, useSession } from "next-auth/react";
import styles from "../../../pages/styles/auth.module.css";
import Link from "next/link";
import Image from "next/image";
export default function LoggedIn() {
  const { data: session, loading } = useSession();

  return (
    <div className={styles.lgin}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className={styles.loggedin}>You are already logged in as</p>
          <div className={styles.user}>
            <Image
              src={session.user.image}
              width={50}
              height={50}
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
