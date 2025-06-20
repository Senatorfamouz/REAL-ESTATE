import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const LogIn = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    console.log("Login data:", data);
    alert(`Welcome back, ${data.email.split("@")[0]}!`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10 md:p-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-black">Log In</h2>
          <p className="text-base text-black mt-2">
            Welcome back to{" "}
            <span className="text-amber-600 font-semibold">FDEE ESTATE HOME & COMFORT</span>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Email Field */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="FDEE@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Password</label>
            <input
              {...register("password")}
              type="password"
              placeholder="Input your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-black text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Log In
          </button>

          {/* Bottom Text */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-amber-500 hover:underline font-medium">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
