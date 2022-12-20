import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./SwitchTheme.module.css";

export default function SwitchTheme() {
  const [theme, setTheme] = useState("light");
  const [oppositeTheme, setOppositeTheme] = useState("dark");
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (document.cookie.split("; ").find((row) => row.startsWith("theme="))) {
        if (
          document.cookie
            .split("; ")
            .find((row) => row.startsWith("theme="))
            .split("=")[1] == "dark"
        ) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      } else {
      }
      setOppositeTheme(theme == "dark" ? "light" : "dark");
    }
  });
  return (
    <div
      onClick={() => {
        document.cookie = "theme=" + oppositeTheme;
        window.location.reload();
      }}
      className={styles.container}
    >
      <svg
        width={40}
        height={40}
        fill={theme == "dark" ? "white" : "black"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 8a1.913 1.913 0 0 1-1.913-1.913V1.913a1.913 1.913 0 0 1 3.826 0v4.174A1.913 1.913 0 0 1 20 8ZM20 40a1.913 1.913 0 0 1-1.913-1.913v-4.174a1.913 1.913 0 0 1 3.826 0v4.174A1.913 1.913 0 0 1 20 40ZM29.838 12.075a1.913 1.913 0 0 1-1.353-3.265l2.951-2.952a1.913 1.913 0 0 1 2.706 2.706l-2.952 2.95a1.907 1.907 0 0 1-1.352.56ZM7.21 34.703a1.913 1.913 0 0 1-1.352-3.267l2.951-2.95a1.913 1.913 0 1 1 2.706 2.704l-2.952 2.952a1.907 1.907 0 0 1-1.353.56ZM38.087 21.913h-4.174a1.913 1.913 0 0 1 0-3.826h4.174a1.913 1.913 0 0 1 0 3.826ZM6.087 21.913H1.913a1.913 1.913 0 0 1 0-3.826h4.174a1.913 1.913 0 0 1 0 3.826ZM32.79 34.703a1.906 1.906 0 0 1-1.353-.561l-2.952-2.952a1.913 1.913 0 0 1 2.706-2.705l2.951 2.951a1.913 1.913 0 0 1-1.352 3.267ZM10.162 12.075a1.903 1.903 0 0 1-1.352-.56L5.859 8.564a1.913 1.913 0 0 1 2.705-2.706l2.951 2.952a1.914 1.914 0 0 1-1.353 3.265ZM20 28.87A8.87 8.87 0 1 1 28.87 20 8.88 8.88 0 0 1 20 28.87Z" />
      </svg>
    </div>
  );
}
