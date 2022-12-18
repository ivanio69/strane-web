import styles from "../../../pages/styles/auth.module.css";
import Link from "next/link";
import { toast } from "react-toastify";

export default function SignUp() {
  return (
    <form
      className={styles.form}
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

      <input className={styles.button} type="submit" value="Sign Up" />

      <p className={styles.switch}>
        Already have an account?{" "}
        <Link href="/auth/signin" className={styles.lnk}>
          Log In
        </Link>
      </p>
    </form>
  );
}
