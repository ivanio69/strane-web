import React from "react";
import Link from "next/link";
import styles from "./styles/auth.module.css";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
function Next() {
  const { session } = useSession();
  useEffect(() => {
    if (typeof session !== "undefined") {
      window.locatiobn.href = "/me";
    }
  }, [data]);
  return <React.Fragment>{JSON.stringify(session.user)}</React.Fragment>;
}
export default Next;
