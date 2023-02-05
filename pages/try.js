import Link from "next/link";

export default function TryBeta() {
  return (
    <p style={{ textAlign: "center", marginTop: "30vh" }}>
      We are really sorry, but the beta testing is yet to begin. Come back
      later! Bye!
      <br />
      <Link href="/">Go home</Link>
    </p>
  );
}
