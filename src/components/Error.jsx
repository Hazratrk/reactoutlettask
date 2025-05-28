const Error = ({ message = "Page not found" }) => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>{message}</p>
    </div>
  );
};

export default Error;