import React from 'react';
import { useRouteError } from 'react-router-dom';

export const Error = () => {
  const error = useRouteError();
  console.error(error); // Log error in console for debugging

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Oops!</h1>
      <p className="text-lg md:text-xl mb-2">Something went wrong.</p>

      {/* Error status and message */}
      <p className="text-red-400 text-md md:text-lg">
        {error.status} - {error.statusText || error.message}
      </p>

      {/* Optional: Go Back button */}
      <button
        onClick={() => window.history.back()}
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-800 rounded-lg transition"
      >
        Go Back
      </button>
    </div>
  );
};
