import React from "react";
import Link from "next/link";
import styles from "./styles/auth.module.css";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
function Next() {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (typeof data !== "undefined") {
      window.locatiobn.href = "/me";
    }
  }, [data]);
  return <React.Fragment>{JSON.stringify(session.user)}</React.Fragment>;
}
export default Next;
