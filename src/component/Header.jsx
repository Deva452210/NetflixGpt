import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);



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
    onAuthStateChanged(auth, (user) => {
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
  }, []);

  return (
    <div className=" absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between items-center">
      <img
        className=" w-[150px] object-cover"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      />

      {user && (
        <div className="right text-white">
          <ul className=" flex items-center gap-4">
            <li>
              <img className=" w-[25px]" src={user.photoURL} alt="" />
            </li>

            <li>
              <button
                onClick={handleSignOut}
                className=" px-2 py-1 rounded-md bg-red-500 hover:bg-red-700 text-white font-semibold text-[12px]"
              >
                Sign Out
              </button>
            </li>
            <li>{user.displayName}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
