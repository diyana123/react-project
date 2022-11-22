import { useState } from "react";
import FormInput from "../formInput/FormInput.styles.scss";

import Button from "../button/button";
// import {
//   signInWithGooglePopUp,
//   createAuthUserWithEmailAndPassword,
//   createUserDocumentFromAuth,
//   signInAuthUserWithEmailAndPassword,
// } from "../../utils/firebase/Firebase";
// import { signInWithCredential } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // const signInWithGoogle = async () => {
  //   await signInWithGooglePopUp();
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   localStorage.setItem("user", JSON.stringify(FormInput));
  //   navigate("/");

  //   const loggedUser = localStorage.getItem("user");
  //   if (email === loggedUser.email && password === loggedUser.password) {
  //     navigate("/");
  //   } else {
  //     alert("wrong Email or password");
  //   }

  //   try {
  //     const response = await signInAuthUserWithEmailAndPassword(
  //       email,
  //       password
  //     );
  //     console.log(response);
  //     resetFormFields();
  //   } catch (error) {
  //     switch (error.code) {
  //       case "auth/wrong-password":
  //         // navigate("/auth");
  //         alert("incorrect password for email");
  //         // navigate("/auth");
  //         break;
  //       case "auth/user-not-found":
  //         alert("no user associated with this email");
  //         // navigate("/auth");
  //         break;
  //       // case " ":
  //       //   navigate("/");
  //       //   break;
  //       default:
  //         console.log(error);
  //     }
  //     console.log("user sign in failed", error);
  //     resetFormFields();
  //   }
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormFields({ ...formFields, [name]: value });
  // };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      {/* <form onSubmit={handleSubmit}> */}
        <FormInput
          label="Email"
          type="email"
          required
          // onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          // onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <div className="button-submit">
            <Button >
              Sign In
            </Button>
          </div>
          <div className="button-google">
            <Button
              buttonType="google"
              type="button"
              // onClick={signInWithGoogle}
            >
              Sign In With Google
            </Button>
          </div>
        </div>
      {/* </form> */}
    </div>
  );
};

export default SignInForm;
