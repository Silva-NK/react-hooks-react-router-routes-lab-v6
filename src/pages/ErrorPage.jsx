import { useRouteError, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../index.css"

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <header>
        <NavBar />
      </header>
        <main className="error-page">
          <h1>Oops! Looks like something went wrong.</h1>
          <p>
            <i>{error?.statusText || error?.message || "Unknown error occurred"}</i>
          </p>
          <Link to="/">Return to homepage</Link>
        </main>
    </>
  );
}

export default ErrorPage;