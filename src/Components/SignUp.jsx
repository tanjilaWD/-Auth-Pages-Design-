import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0e0e0e] text-white">
            <div className="w-full max-w-md px-6 py-10">
                <h2 className="text-3xl font-semibold mb-2">Sign up</h2>
                <p className="text-sm text-gray-400 mb-8">Sign up to start your journey</p>

                <form className="space-y-5">
                   <div className="relative">
                    
                    <CiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"/>
                    <input type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent border border-gray-700 rounded-full py-3 pl-12 pr-4 text-sm text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-[#10b981]"
                    />
                    </div> 

                    <div className="relative">
                        
                        <CiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"/>
                        <input type="email"
                         placeholder="Enter your email"
                         className="w-full bg-transparent border border-gray-700 rounded-full py-3 pl-12 pr-4 text-sm text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-[#10b981] "
                        />
                    </div>

                       <div className="relative">
                        
                        <input type={showPassword ? "text" : 'password'}
                         placeholder="password"
                         className="w-full bg-transparent border border-gray-700 rounded-full py-3 pl-4 pr-4 text-sm text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-[#10b981] "
                        />
                        <button
                        type="button"
                        onClick={() => setShowPassword (!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                {showPassword ?  <IoEyeOutline/> :<FaRegEyeSlash />}    
                </button>
                </div>

                 <div className="relative">
                   
                        <input type={showPassword ? "text" : 'password'}
                         placeholder="confirm password"
                         className="w-full bg-transparent border border-gray-700 rounded-full py-3 pl-4 pr-4 text-sm text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-[#10b981] "
                        />
                        <button
                        type="button"
                        onClick={() => setShowConfirm (!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                {showPassword ?  <IoEyeOutline/> :<FaRegEyeSlash />}    
                </button>
                </div>
                
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 accent-[#10b981]"/>
                    <label className="text-sm text-gray-400">Remember me</label>
                </div>

                <button className="w-full bg-[#10b981] hover:bg-[#0ea371] text-white rounded-full py-3 text-sm font-medium transition">
                    Create Account
                </button>

                <button
                type="button" className="w-full border border-gray-700 rounded-full py-3 text-sm text-gray-300 flex items-center justify-center gap-2 hover:bg-gray-800 transition"
                >
                 <FcGoogle className="w-5 h-5"/>Google
                </button>

                <p className="text-center text-sm text-gray-400 mt-4">
                    Already have an account? {" "} <a href="/loginpage" className="text-[#10b981] hover:underline">Log in</a>
                </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;