import { useSession } from "next-auth/react";
import { useEffect } from "react";
import styles from "./styles/Header.module.css";
import { useRouter } from "next/router";
import { Grid } from "react-loader-spinner";

export default function Header() {
  const { data: session, loading } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session && !loading) {
      router.push("/auth/signin");
    }
  });
  return (
    <>
      {loading || !session ? (
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
        <div className={styles.container}>
          <div className={styles.image} />
          <p className={styles.name}>{session.user.name}</p>
          <i className={styles.status}>{"Set status..." /* TO REPLACE */}</i>
        </div>
      )}
    </>
  );
}
