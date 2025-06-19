import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const SignUp = () => {
  const validationSchema = Yup.object().shape({
    role: Yup.string().required("Please select a role"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string().required("Password is required"),
    // terms: Yup.bool().oneOf([true], "You must accept the terms & conditions"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    console.log("Signup data:", data);
    alert(`Welcome ${data.role === "superadmin" ? "SuperAdmin" : "SubAdmin"} to FDEE ESTATE HOME & COMFORT!`);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-black">Sign Up</h2>
          <p className="text-sm text-black">
            Join <strong className="text-amber-600">FDEE ESTATE HOME & COMFORT</strong> today
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Role Selection */}
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

          {/* Name Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                {...register("firstName")}
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
              />
              {errors.firstName && <p className="text-sm text-red-600">{errors.firstName.message}</p>}
            </div>
            <div>
              <input
                {...register("lastName")}
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
              />
              {errors.lastName && <p className="text-sm text-red-600">{errors.lastName.message}</p>}
            </div>
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

          {/* Phone No */}
          <div>
            <input
              {...register("phone")}
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
            />
            {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
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

          {/* Terms Checkbox */}
          {/* <div className="space-y-2">
            <label className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                {...register("terms")}
                className="form-checkbox text-amber-600"
              />
              <span className="text-sm text-gray-700">
                I Agree with{" "}
                <a href="#" className="text-amber-400 hover:underline">Terms & Conditions</a>
              </span>
            </label>
            {errors.terms && <p className="text-sm text-red-600">{errors.terms.message}</p>}
          </div> */}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-black text-white font-semibold py-2 rounded-lg transition"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already Have an Account?{" "}
            {/* Replace with react-router Link */}
            <a href="#" className="text-amber-400 hover:underline font-medium">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
