import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
const LoginPage = () => {
    return (
       <section className="min-h-screen flex justify-center items-center bg-[#111] text-white">
        <div className="w-full max-w-sm flex flex-col items-center "> 
            <div className="mb-6">
                <h2 className="text-center text-xl font-bold text-white">Log in</h2>
                <p className="text-gray-400 text-sm text-center mt-1">Dont't have an account yet?{" "}
                    <a href="#" className="text-pink-400 hover:underline">Sign up</a>
                </p>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-[#222] hover:bg-[#333] text-white py-3 rounded-full mb-3 transition">
                <FcGoogle size={20} />Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-[#222] hover:bg-[#333] text-white py-3 rounded-full mb-3 transition">
                <FaApple size={20} />Continue with Apple
            </button>

            <div className="flex items-center w-full my-4">
            <div className=" flex-grow h-px bg-gray-700"></div>
            <span className="text-gray-500 text-xs px-2">OR</span>
            <div className="flex-grow h-px bg-gray-700"></div>
           </div>

           <div className="w-full mb-3">
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input type="email"
              placeholder="Enter your email address" className="w-full bg-transparent border border-gray-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-pink-500"/>
           </div>

           <div className="w-full mb-2 relative">
            <label className="block text-sm text-gray-400 md-1">Password</label>
            <input 
            type="password"
            placeholder="password"className="w-full bg-transparent border border-gray-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-pink-500" />
            <span className="absolute right-3 top-9 text-gray cursor-pointer text-sm">
                <IoEyeOutline />
            </span>
           </div>

           <div className="w-full text-right mb-5">
             <a href="#" className="text-pink-300 text-xs hover:underline">Forgot Password</a>
           </div>

           <button className="w-full bg-pink-500 hover:bg-pink-600 text-black font-semibold py-3 rounded-full transition">
            Sign in
           </button>
        </div>
       </section>
    );
};

export default LoginPage;