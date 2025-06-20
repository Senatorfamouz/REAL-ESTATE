import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const LogIn = () => {
  const validationSchema = Yup.object().shape({
    role: Yup.string().required("Please select a role"),
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    console.log("Login data:", data);
    alert(`Logged in as ${data.role === "superadmin" ? "SuperAdmin" : "SubAdmin"}`);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-black">Login</h2>
          <p className="text-sm text-black">
            Welcome back to <strong className="text-amber-600">FDEE ESTATE HOME & COMFORT</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Role */}
          <div>
            <select
              {...register("role")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 text-gray-700"
            >
              <option value="">Select Role</option>
              <option value="superadmin">SuperAdmin</option>
              <option value="subadmin">SubAdmin</option>
            </select>
            {errors.role && <p className="text-sm text-red-600">{errors.role.message}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
            />
            {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
            />
            {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-black text-white font-semibold py-2 rounded-lg transition"
          >
            Login
          </button>

          {/* Signup Redirect */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            {/* Replace with react-router Link */}
            <a href="#" className="text-amber-400 hover:underline font-medium">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
