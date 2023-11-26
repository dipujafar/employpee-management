import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginImg from "../assets/loginLogo/login.gif";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import useAuth from "../hook/useAuth";

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState('')
  const { singInUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {email,password} = data || {};
    singInUser(email, password)
    .then(result=>{
      console.log(result.user);
      reset();
    })
    .catch(error=>setError(setError(error.message)))
  };
  return (
    <div className="md:flex md:flex-row-reverse justify-center items-center min-h-screen">
      <div className="md:w-1/2 flex justify-center">
        <img src={loginImg} alt="" />
      </div>
      <div className="md:w-2/6 bg-white mx-auto border  rounded shadow-md shadow-gray-300 p-5">
        <h1 className="text-2xl font-medium mb-5 text-center text-orange-400">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center mb-5 ">
            <label>
              <AiOutlineMail className="text-2xl"></AiOutlineMail>
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              id=""
              placeholder="Your Email"
              className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
            />
          </div>
          {errors.email?.type === "required" && (
            <span className="text-red-400 ml-10">Email is required</span>
          )}

          <div className="flex items-center mb-5 relative">
            <label>
              <RiLockPasswordLine className="text-2xl"></RiLockPasswordLine>
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
              id=""
              placeholder="Password"
              className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
            />
            <span onClick={() => setShow(!show)} className="absolute right-10">
              {show ? (
                <AiOutlineEye className="text-2xl"></AiOutlineEye>
              ) : (
                <AiOutlineEyeInvisible className="text-2xl"></AiOutlineEyeInvisible>
              )}
            </span>
          </div>
          {errors.password?.type === "required" && (
            <span className="text-red-400 ml-10">Password is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-red-400 ml-10">
              Password must be 6 character.
            </span>
          )}
          {errors.password?.type === "maxLength" && (
            <span className="text-red-400 ml-10">
              Password must less then 20 character.
            </span>
          )}
          <Button variant="outlined" className="w-full">
            <input type="submit" value="Login" className="w-full" />
          </Button>
          <p className="mt-2">
            Do not have account?{" "}
            <Link to="/register">
              <span className="text-blue-500">Register</span>
            </Link>
          </p>
          <p className="text-xl text-red-700">{error}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
