import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Shared/LoadingSpinner";
import { toast } from "react-toastify";
import useToken from "../customHooks/useToken";

//*Enable later
// import useToken from "../../hooks/useToken";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, uError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const [token] = useToken(user || gUser);


  let signUpError;
  if (loading || gLoading ||updating) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signUpError = (
      <p>
        <small>{error?.message || gError?.message}</small>
      </p>
    );
    }
    
    //*Enable later
//   if (token) {
//     console.log(user, gUser);
//     toast("Thanks for signing up");
//     navigate('/login');
//   }

    if (user) {
        // console.log(user, gUser);
        
    toast("Thanks for signing up");
    navigate('/');
    }
    
  const onSubmit = async (data) => {
    //created user in firebase
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });

    //creating user data and sending to userDatabase
    const userData = {
      displayName:  data?.name,
      email:  data?.email,
      password: data?.password
    };
    // post req api
    fetch("http://localhost:8000/api/v1/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((inserted) => {
        console.log(inserted);
        if (inserted.insertedId) {
          toast.success("user Added successfully");
          console.log('user added');
          
        }
      });

  };


  

  return (
    <div className="flex items-center min-h-screen justify-center pt-20">
      <div className="card w-96 bg-base-100 shadow-2xl ">
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl text-accent ">
            Sign Up
          </h2>
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input  input-bordered input-accent  w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.name?.message}
                  </span>
                )}
                {errors.name?.type === "pattern" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.name?.message}
                  </span>
                )}
              </label>
            </div>
            {/* Email input */}
            <div className="form-control w-full max-w-xs">
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
                    {errors.email?.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.email?.message}
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
                {errors.password?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.password?.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.password?.message}
                  </span>
                )}
              </label>
            </div>
            {signUpError}
            {/* Login Button */}
            <input
              className="btn btn-outline btn-accent w-full max-w-xs shadow-lg  hover:drop-shadow-xl ease-in"
              value="Sign Up"
              type="submit"
            />
          </form>
          <p className="mt-3">
            <small>
              already have an account?{" "}
              <Link className="text-primary hover:underline" to="/signup">
                Log In
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

export default SignUp;
