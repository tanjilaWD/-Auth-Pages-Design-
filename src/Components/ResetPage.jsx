import { useState } from "react";
import { VscKey } from "react-icons/vsc";

const ResetPage = () => {
     const [otp, setOtp] = useState(["","","","","",""]);
     const handleChange = (e, index) =>{
        const value = e.target.value;
        if(!/^[0-9]? $/.test(value)) return;
        const newOtp = [...otp];
        newOtp [index] = value;
        setOtp(newOtp);

        if(value && e.target.nextSibling){
            e.target.nextSibling.focus();
        }

     }
    return (
       
       <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-sm text-center" >
            <div className="flex justify-center mb-4">
               <div className="bg-blue-100 p-3 rounded-full">
                <VscKey className="text-blue-500 text-2xl"/>
                </div> 
            </div>

            <h2 className="text-xl font-semibold text-gray-500">
              Enter Verification Code  
            </h2>
            <p className="text-gray-500 text-sm mt-1">
          A 6-digit code has been sent to your email.
              </p>
            
            <div className="flex justify-center gap-2 mt-6">
                {otp.map((digit, index) =>(
             <input
             key= {index}
             type="text"
             maxLength="1"
             value={digit}
             onChange={(e) => handleChange(e, index)}
             className="w-10 h-12 border border-gray-300 rounded-md text-center lext-lg focus:border-blue-500 focus:outline-none"
             />
                ))}

            </div>
            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition cursor-pointer">
           Verify
        </button>

        <p className="text-sm text-gray-600 mt-4">Didn’t receive the code?{" "}
            <a href="#" className="text-blue-600 hover:underline font-medium">
                Resend
            </a>
        </p>
        <p className="text-xs text-gray-400 mt-1">Code expires in <samp className="text-gray-600 font-semibold">01:00</samp></p>
            </div> 
       </section>
    );
};

export default ResetPage;