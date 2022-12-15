import React from "react";
import Link from "next/link";
import styles from "./styles/auth.module.css";
import Image from "next/image";
function Next() {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (typeof session !== "undefined") {
      window.locatiobn.href = "/me";
    }
  }, [session]);
  return <React.Fragment>{JSON.stringify(session.user)}</React.Fragment>;
}
export default Next;
