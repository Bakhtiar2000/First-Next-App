"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <p className="text-center text-4xl text-red-500">
        Something went wrong...
      </p>
      <p className="text-center text-4xl text-red-500 mt-5">{error.message}</p>
      <button
        onClick={() => reset()}
        className="text-center bg-orange-500 mt-5"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
