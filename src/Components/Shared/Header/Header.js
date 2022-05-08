import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/Firebase.config";
import {AiFillCar} from "react-icons/ai";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <AiFillCar
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            
          >
          
          </AiFillCar>
          <span className="ml-3 text-xl">The Autostars</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Cars
          </Link>
          {user && (
            <>
              <Link to="/manageItems" className="mr-5 hover:text-gray-900">
                Manage Items
              </Link>
              <Link to="/addItem" className="mr-5 hover:text-gray-900">
                Add Item
              </Link>
              <Link to="/myCars" className="mr-5 hover:text-gray-900">
                My Cars
              </Link>
            </>
          )}
          <Link to="/blogs" className="mr-5 hover:text-gray-900">
            Blogs
          </Link>
        </nav>
        {user ? (
          <button
            onClick={() => signOut(auth)}
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Log Out
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        ) : (
          <Link to="/login">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
