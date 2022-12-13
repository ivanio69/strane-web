import "./styles/general.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <div className="appContainer">
        <Component {...pageProps} />
      </div>
    </>
  );
}
