import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignIn = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div className=" h-full">
      <Header />
      <div className=" absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_medium.jpg"
          alt=""
        />
      </div>
      <form className=" p-10 bg-black text-white absolute w-3/12  my-36 mx-auto left-0 right-0 flex flex-col items-centers gap-3 justify-center rounded-md bg-opacity-85">
        <h1 className="  font-bold text-center text-xl">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {isSignInForm && (
          <input
            type="text"
            placeholder="Username"
            className=" p-2 outline-none border-none bg-slate-600 rounded-sm"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className=" p-2 outline-none border-none bg-slate-600 rounded-sm"
        />
        <input
          type="text"
          placeholder="Password"
          className=" p-2 outline-none border-none bg-slate-600 rounded-sm"
        />

        <button className=" p-2 bg-red-600 border-none text-white font-semibold rounded-sm">
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className=" cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix? Signup"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
