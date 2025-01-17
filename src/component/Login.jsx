import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setisSignInForm] = useState(false);
  const [errorMessage, seterrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setisSignInForm(!isSignInForm);
  };

  const handleButonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(message);

    if (message) return;

    //  Authentication

    if (isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://cdn-icons-png.flaticon.com/512/7915/7915522.png",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              seterrorMessage(error);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " - " + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" p-10 bg-black text-white absolute w-3/12  my-36 mx-auto left-0 right-0 flex flex-col items-centers gap-3 justify-center rounded-md bg-opacity-85"
      >
        <h1 className="  font-bold text-center text-xl">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Username"
            className=" p-2 outline-none border-none bg-slate-600 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className=" p-2 outline-none border-none bg-slate-600 rounded-sm"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className=" p-2 outline-none border-none bg-slate-600 rounded-sm"
        />

        <p className=" text-sm text-red-500">{errorMessage}</p>

        <button
          onClick={handleButonClick}
          className=" p-2 bg-red-600 border-none text-white font-semibold rounded-sm"
        >
          {isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p className=" cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix? Sign In"
            : "Already registered? Sign Up"}
        </p>
      </form>
    </div>
  );
};

export default Login;
