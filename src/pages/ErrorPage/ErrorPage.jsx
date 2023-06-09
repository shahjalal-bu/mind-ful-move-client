import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section>
      <div className="max-w-5xl min-h-screen mx-auto flex flex-col justify-center items-center">
        <div className="">
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            className="w-96 mx-auto"
          />
        </div>
        <h1 className="text-center text-3xl font-luckiestGuy">
          <div className=" text-7xl mb-5">404 </div>
          <br />
          Look like you're lost
          <br />
          The page you are looking for is not available!
        </h1>

        <Link
          to="/"
          className="block w-1/2 text-center mx-auto text-white px-4 py-2 bg-green-600 mt-10"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
