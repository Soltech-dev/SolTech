import React from "react";
import { Card } from "../components/ui/card";
import solarImage from "../images/login.png";
import logo from "../images/logo.png";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4 lg:p-0">
      <div className="w-full flex flex-col lg:flex-row">
        {/* Left Side Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img
            src={solarImage}
            alt="Solar Panels"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Login Form */}
        <div className="w-full lg:w-1/2 p-8">
          <Card className="p-8 space-y-6 bg-white shadow-lg rounded-lg">
            {/* Logo and Title */}
            <div>
              <div className="flex justify-center items-center gap-2">
                <div className="hidden lg:flex lg:w-1/2 relative">
                  <img
                    src={logo}
                    alt="SOLTech"
                    className="absolute inset-0 w-3/4 sm:w-1/2 lg:w-auto h-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="text-center space-y-2 mt-12">
                <h1 className=" font-bold text-gray-900 text-xl sm:text-2xl">
                  Access your Dashboard
                </h1>
                <p className="text-gray-900 font-bold">Log in</p>
              </div>
            </div>

            <form className="space-y-4">
              <div className="space-y-2 ">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter e-mail address"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter password"
                />
                <div className="text-left">
                  <a
                    href="#" //Link to reset password (forgot password page)
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200"
                //after a successful login- redirect to the landing page
              >
                Log In
              </button>

              {/* Sign up link */}
              <div className="text-center text-sm">
                <span className="text-gray-600">Don't have an Account? </span>
                <a
                  href="#" // link to the login page
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign up
                </a>
              </div>

              {/* Social Login */}
              <div className="flex justify-center flex-col items-center gap-4 sm:flex-row">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-200 p-0">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                  Log in with Google
                </button>

                <button className="w-full sm:w-auto flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-200 p-0">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Log in with Facebook
                </button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
