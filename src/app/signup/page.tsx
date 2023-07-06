"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const res = await axios.post("api/users/signup", user);
      toast.success("SignUp success",{duration:3000});
      console.log("SignUp success", res.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);

      toast.error("Sign up failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-8 text-2xl font-semibold">
        {loading ? "Processing" : "Sign Up"}
      </h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="User name"
        className="px-4 py-2 mb-4 leading-normal text-black placeholder-gray-400 border border-yellow-300 appearance-none rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
      />
      <label htmlFor="email">email</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
        className="px-4 py-2 mb-4 leading-normal text-black placeholder-gray-400 border border-yellow-300 appearance-none rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
        className="px-4 py-2 mb-4 leading-normal text-black placeholder-gray-400 border border-yellow-300 appearance-none rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
      />
      <button
        className="px-6 py-2 mt-4 font-semibold text-black transition-colors duration-200 bg-yellow-500 rounded-full hover:bg-yellow-600"
        onClick={onSignup}
      >
        {buttonDisabled ? "No Sign" : "Sign Up"}
      </button>
      <Link
        href={"/login"}
        className="mt-4 hover:underline hover:underline-offset-4"
      >
        Visit to LogIn page
      </Link>
    </div>
  );
};

export default Signup;
