import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles/auth.module.css";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
function Next() {
  const { session } = useSession();
  return (
    <React.Fragment>
      {session ? JSON.stringify(session.user) : "loading..."}
    </React.Fragment>
  );
}
export default Next;
