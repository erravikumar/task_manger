import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-xl text-gray-800 mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-600 italic mb-6">
        {error.statusText || error.message}
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
