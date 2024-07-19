import { Link, useRouteError } from 'react-router-dom';

import '../styles/errorPage.css'

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className='error__page'>
        <div className='error__content'>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <h2>{error.status}</h2>
            <i>{error.data}</i>
          </p>
          <h2>
            Please return to <Link to='/'>Home</Link>
          </h2>
        </div>
      </div>
  );
};
