import styles from "../../../pages/styles/auth.module.css";
import Link from "next/link";
import { toast } from "react-toastify";

export default function SignIn() {
  return (
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
      <input className={styles.input} type="password" placeholder="Password" />
      <div className={styles.lb} />

      <input className={styles.button} type="submit" value="Sign In" />
      <p className={styles.switch}>
        Dont have an account yet?{" "}
        <Link href="/auth/signup" className={styles.lnk}>
          Create account
        </Link>
      </p>
    </form>
  );
}
