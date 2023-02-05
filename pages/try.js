import Link from "next/link";

export default function TryBeta() {
  return (
    <p style={{ textAlign: "center", marginTop: "30vh" }}>
      We are really sorry, but the beta testing is yet to begin. Come back
      later!
      <br />
      But now you can{" "}
      <Link href="http://x57oo.mjt.lu/wgt/x57oo/1tq/form?c=ca2cb789">
        subscribe to monthly updates about the beta testing:{" "}
        <b>Strane Development Insights</b>!
      </Link>
      <br />
      <Link href="/">Go home</Link>
    </p>
  );
}
