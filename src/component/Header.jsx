import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";
import gptlogo from "../../assets/GPT.png";
import { toggleGptSearchView } from "../utils/GptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  //Toggle GPT search
  const handleGptSeachClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.error("Sign-out error:", error.message);
        navigate("/error");
      });
  };

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => Unsubscribe();
  }, []);

  return (
    <div className=" absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between items-center">
      <img className=" w-[150px] object-cover" src={LOGO} alt="" />

      {user && (
        <div className="right text-white">
          <ul className=" flex items-center gap-4">
            <li>{user.displayName}</li>{" "}
            <button onClick={handleGptSeachClick}>
              <img className=" w-[30px]" src={gptlogo} alt="" />
            </button>
            <li>
              <button
                onClick={handleSignOut}
                className=" px-2 py-1 rounded-md bg-red-500 hover:bg-red-700 text-white font-semibold text-[12px]"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
