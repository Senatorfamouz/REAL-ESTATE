import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PiEyeClosed } from "react-icons/pi";
import { RxEyeOpen } from "react-icons/rx";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useLoginUserMutation } from '../static/userRTK';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(values).unwrap();
      alert(`Login successful! Welcome back!`);
      navigate('/header'); // Redirect to the header page after successful login
    } catch (err) {
      console.error('Login failed:', err);
      alert(error?.data?.message || 'Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96"> 
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                placeholder="Enter your password"
                required
                minLength="6"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-800"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <PiEyeClosed /> : <RxEyeOpen />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200 flex items-center justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <>
                <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>
          {isError && (
            <p className="mt-2 text-red-500 text-sm text-center">
              {error?.data?.message || 'Login failed. Please try again.'}
            </p>
          )}
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <span 
              className="text-blue-600 cursor-pointer hover:underline" 
              onClick={() => navigate('/signup')}
            >
              Signup
            </span>
          </p>
        </form> 
      </div>
    </div>
  );
};

export default Login;