import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';
import '../App.css';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error-container dark-theme">
      <div className="noise"></div>
      <div className="overlay"></div>
      <div className="terminal">
        <h1 className="error-title">Error <span>404</span></h1>
        <p className="error-message">{error?.statusText || 'The page you are looking for does not exist or an error occurred.'}</p>
        <p className="error-description">{error?.data || 'Try refreshing the page or return to the homepage.'}</p>
        <NavLink to="/" className="error-button">Go Home</NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
