import React, { use, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();

  const { signInGoogle } = use(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then(result => {
        console.log(result);
        navigate("/");
      })
      .catch(err => console.log(err));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md p-6 rounded-lg w-[350px]"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {error && (
          <p className="bg-red-100 text-red-700 p-2 rounded mb-3">{error}</p>
        )}

        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          className="input input-bordered w-full mb-3"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <label>Password</label>
        <input
          type="password"
          className="input input-bordered w-full mb-4"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Forget Password */}
        <p className="text-blue-600 text-sm cursor-pointer mb-3">
          Forgot password?
        </p>

        {/* Login button */}
        <button className="btn btn-primary w-full">Login</button>
        <div className='text-center'>
            OR
        </div>

                      {/* Google */}
<button  onClick={handleGoogleSignIn}
className="btn bg-white text-black border-[#e5e5e5] w-full ">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
<Link to="/register"className='pt-3 '>Don't Have account?<span className='text-red-500'>Register</span> </Link>
      </form>
     
    </div>
  );
};

export default Login;
