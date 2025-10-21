import { LuMailCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import { TiChevronLeft } from "react-icons/ti";

const Forgotpass = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#2c2c54]">
           <div className="w-full max-w-md bg-transparent text-white px-6 py-10">
            <h2 className="text-3xl font-semibold mb-2">Forgot Password</h2>
            <p className="text-sm text-gray-400 mb-8">Please enter your details below</p>

            <form className="space-y-5">
                <div className="relative">
                     <LuMailCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"/>
                     <input
                      type="email"
                      placeholder="enter your email address" className="w-full bg-transparent border border-amber-700 rounded-full py-3 pl-12 pr-4 text-sm text-amber-300 focus:outline-none focus:border-amber-50 placeholder:text-gray-500" 
                      />
                </div>
                
                <button
                type="submit" className="w-full bg-[#7b7dfd] hover:bg-[#6a6cf0] text-white rounded-full py-3 text-sm font-medium transition">
                    Send reset email
                </button>

                <div>
                    <Link to="/loginpage" className="flex items-center justify-center gap-2 text-gray-400 hover:text-gray-200 text-sm"
                    > <span className="text-lg flex items-center"><TiChevronLeft /> Back to sign in</span>
                    </Link>
                </div>
            </form>
            </div> 
        </div>
    );
};

export default Forgotpass;