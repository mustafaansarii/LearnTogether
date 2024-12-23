import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
          <div>
            <h2 className="lg:text-5xl text-4xl font-extrabold lg:leading-[55px] text-gray-800 dark:text-white">
              Forgot Your Password?
            </h2>
            <p className="text-sm mt-6 text-gray-800 dark:text-white">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
            <p className="text-sm mt-12 text-gray-800 dark:text-white">
              Remembered your password?
              <Link
                to="/login"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Login here
              </Link>
            </p>
          </div>

          <form className="max-w-md md:ml-auto w-full">
            <h3 className="text-gray-800 dark:text-white text-3xl font-extrabold mb-8">
              Reset Password
            </h3>

            <div className="space-y-4">
              <div>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-gray-100 dark:bg-gray-800 w-full text-sm text-gray-800 dark:text-white px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent dark:focus:bg-transparent"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div className="!mt-8">
              <button
                type="button"
                className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Send Reset Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
