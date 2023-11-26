import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiOutlineBank, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import {BsPeople } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import useAuth from "../hook/useAuth";


const Register = () => {
    const [show, setShow] = useState(false);
    const {createUser} = useAuth();
    const [error,setError] = useState('')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
       const {name, email, password, account, salary,} = data || {};

       createUser(email,password)
       .then(result=>{
        console.log(result.user)
       })
       .catch(error=>setError(error.message))
       

      }
    return (
      <div className="bg-gradient-to-r  bg-opacity-0 from-green-100">
        <div className=" bg-transparent bg-opacity-0">
        <div className="md:w-1/2 mx-auto border  rounded shadow-md shadow-gray-300 p-5">
          <h1 className="text-2xl font-medium mb-5 text-center text-orange-400">
            Register Now
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center mb-5 ">
              <label>
                <BsPeople className="text-2xl"></BsPeople>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Your Name*"
                className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
              />
            </div>
            {errors.name?.type === 'required' && <span className="text-red-400 ml-10">Name is required</span>}
            <div className="flex items-center mb-5 ">
              <label>
                <AiOutlineMail className="text-2xl"></AiOutlineMail>
              </label>
              <input
                type="email"   
                {...register("email", { required: true })}
                placeholder="Your Email*"
                className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
              />
            </div>
            {errors.email?.type === "required" && <span className="text-red-400 ml-10">Email is required</span>}

            <div className="flex items-center mb-5 relative">
              <label>
                <RiLockPasswordLine className="text-2xl"></RiLockPasswordLine>
              </label>
              <input
                type={show ? "text" : "password"}
                {...register("password", { required: true, minLength: 6, maxLength: 20, pattern:/^[A-Z][!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/ })}
                placeholder="Password*"
                className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
              />
              <span onClick={() => setShow(!show)} className="absolute right-14">
                {show ? (
                  <AiOutlineEye className="text-2xl"></AiOutlineEye>
                ) : (
                  <AiOutlineEyeInvisible className="text-2xl"></AiOutlineEyeInvisible>
                )}
              </span>
            </div>
            {errors.password?.type === "required" && <span className="text-red-400 ml-10">Password is required</span>}
            {errors.password?.type === "minLength" && <span className="text-red-400 ml-10">Password must be 6 character.</span>}
            {errors.password?.type === "maxLength" && <span className="text-red-400 ml-10">Password must less then 20 character.</span>}
            {errors.password?.type === "pattern" && <span className="text-red-400 ml-10">Password must need a capital letter and a special character.</span>}
            
            <div className="flex items-center mb-5 ">
              <label>
                <AiOutlineBank className="text-2xl"></AiOutlineBank>
              </label>
              <input
                type="type"
                name="account"
                {...register("account")}
                placeholder="Your Bank Account No."
                className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
              />
            </div>
            
            <div className="flex items-center mb-5 ">
              <label>
                <FaMoneyCheckDollar className="text-2xl"></FaMoneyCheckDollar>
              </label>
              <input
                type="type"
                {...register("salary")}
                placeholder="Your Salary"
                className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
              />
            </div>

            <div className="flex items-center mb-5 ">
              <label>
                <GrUserAdmin className="text-2xl"></GrUserAdmin>
              </label>
              <input
                type="type"
                {...register("designation")}
                placeholder="Your Designation"
                className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
              />
            </div>

            <div className="w-full my-3">
              <label >
                <span className="font-bold">Your Role*</span>
              </label>
              <select
                defaultValue="default"
                {...register("role",{required: true})}
                required
                className="border border-black py-2 rounded w-full "
              >
                <option disabled value="default">
                  Select Your Role
                </option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="hr">HR</option>
              </select>
            </div>
            {errors.role?.type === "required" && <span className="text-red-400 ml-10">Role is required</span>}

            <div className="my-3">
              <label className="font-bold block mt-2">Your Profile Picture</label>
              <input type="file" name="" id="" />
            </div>

            <Button variant="outlined" className="w-full">
            <input
              type="submit"
              value="Sing Up"
              className="w-full"
            />
            </Button>
            <p className="mt-2">
              Already have account?{" "}
              <Link to="/login">
                <span className="text-blue-300">Login</span>
              </Link>
            </p>
            <p className="text-xl text-red-700">{error}</p>
            <p className="text-xl text-red-700"></p>
          </form>
        </div>
      </div>
      </div>
    );
};

export default Register;