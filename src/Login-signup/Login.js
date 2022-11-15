import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import LoadingSpinner from "../Shared/LoadingSpinner";
import bg from "../images/Onnorokom Cover image.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  //*Enable later
  // const [token] = useToken(user || gUser);

  let signInError;
  //*Enable later
  //   const [token] = useToken(user || gUser);

  //*Enable later
  //   useEffect(() => {
  //     if (token) {
  //       navigate(from, { replace: true });
  //     }
  //   }, [navigate, from, user, gUser, token]);
  if (loading || gLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (error || gError) {
    signInError = (
      <p>
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  //current url location
  
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    if (user) {
      toast("You are Logged In!");
      navigate('/');
    }
  };
  return (
    <div
      className="flex items-center min-h-screen justify-center pt-20 "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover",
        backgroundBlendMode: "lighten",
      }}
    >
      <div className="card lg:w-96 w-full bg-base-100 shadow-2xl ">
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl text-accent ">Login</h2>
          {/* form */}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              {/* Email input */}

              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input  input-bordered input-accent  w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "An Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide A Valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/* password */}
            <div className="form-control w-full max-w-xs mb-6">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered input-accent w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Provide A 6 character password",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.password.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            {/* Login Button */}
            <input
              className="btn btn-outline btn-accent w-full max-w-xs shadow-lg  hover:drop-shadow-xl ease-in"
              value="Login"
              type="submit"
            />
          </form>
          <p className="mt-3">
            <small>
              New to Doctors Portal?{" "}
              <Link
                className="text-secondary hover:underline font-bold"
                to="/signup"
              >
                Sign Up
              </Link>{" "}
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-info shadow-lg hover:shadow-xl ease-in "
          >
            Google Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
