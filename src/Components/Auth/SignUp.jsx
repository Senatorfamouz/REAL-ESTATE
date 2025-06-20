import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import dee from '../../assets/FDee.jpg';

const SignUp = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
    terms: Yup.bool().oneOf([true], "You must accept the terms & conditions"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    console.log("Signup data:", data);
    alert(`Welcome ${data.firstName} to FDEE ESTATE HOME & COMFORT!`);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Side Image */}
        <div className="hidden md:block">
          <img
            src={dee}
            alt="Real Estate"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="p-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-black">Sign Up</h2>
            <p className="text-base text-black mt-2">
              Join <strong className="text-amber-600">FDEE ESTATE HOME & COMFORT</strong> today
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                />
                {errors.firstName && <p className="text-sm text-red-600 mt-1">{errors.firstName.message}</p>}
              </div>
              <div>
                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                />
                {errors.lastName && <p className="text-sm text-red-600 mt-1">{errors.lastName.message}</p>}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="FDEE@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <input
                {...register("phone")}
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
              />
              {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>}
            </div>

            {/* Password */}
            <div>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
              />
              {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
            </div>

            {/* Terms Checkbox */}
            <div className="space-y-2">
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  {...register("terms")}
                  className="form-checkbox text-amber-600 accent-amber-800"
                />
                <span className="text-sm text-gray-700">
                  I Agree with{" "}
                  <span className="text-amber-400 hover:underline">Terms & Conditions</span>
                </span>
              </label>
              {errors.terms && <p className="text-sm text-red-600">{errors.terms.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-black text-white font-semibold py-3 rounded-lg transition"
            >
              Sign Up
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600">
              Already Have an Account?{" "}
              <a href="#" className="text-amber-400 hover:underline font-medium">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
