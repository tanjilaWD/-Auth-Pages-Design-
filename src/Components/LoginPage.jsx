import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
const LoginPage = () => {
    return (
        <section className="w-3xl h-[1000px] mx-auto items-center justify-center">
            
                <h2>Log in</h2>
                <p>Don’t have an account yet ? <span>Sign up</span></p>
                
                <button><FcGoogle />Continue with Google</button>
                <button><FaApple />Continue with Apple</button>
        </section>
    );
};

export default LoginPage;