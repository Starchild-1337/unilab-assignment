import "./Error.css";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="error">
      <h1>
        Error <span>{error.status}</span>
      </h1>
      <p>{error.statusText}</p>
      <Link to={-1}>Back</Link>
    </div>
  );
};

export default Error;
