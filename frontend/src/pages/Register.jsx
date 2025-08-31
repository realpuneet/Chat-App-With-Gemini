import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import axiosInstance from "../config/axios";
import { useUser } from "../context/user.context";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setUser } = useUser();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axiosInstance.post('/api/user/register', data)
      .then(response => {
        console.log("Registration Successful:", response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        setUser(response.data);
        navigate('/Login');
      })
      .catch(error => {
        console.error("Registration Error:", error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Create an account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: true })}
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">Name is required</p>
            )}
          </div> */}

          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">Email is required</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true, minLength: 6 })}
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          {/* <div>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", { required: true })}
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-sm mt-1">
                Confirm password is required
              </p>
            )}
          </div> */}

          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-gray-300 text-sm text-center mt-6">
          Already have an account?
          <Link to="/login" className="text-purple-400 hover:underline ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
