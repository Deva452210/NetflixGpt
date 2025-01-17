export const checkValidData = (email, password) => {
  const isEmailValid =
    /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email Id is not Valid";
  if (!isPasswordValid) return "Enter correct password";

  return null;
};
