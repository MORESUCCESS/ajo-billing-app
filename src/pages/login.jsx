
import 'remixicon/fonts/remixicon.css'
import Divider from '../components/divider'
import 'animate.css'
import { Link } from 'react-router-dom'

const bgColor = "#00C896"

const LoginPage =()=>{

    const topItem = () => {
        return (
            <div className="flex item-center flex-col text-center">
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <p className="font-medium">Sign in back to your account</p>
            </div>
        );
};

    const redirectText =()=>{
    return(
         <div className='text-center'>
                <p>Don't have an account? 
                    <Link 
                    to="/signup"
                    style={{color: bgColor}}
                        className='cursor-pointer'
                    > Sign up</Link>
                    </p>
            </div>
    );
}

    return(
        <div className='min-h-screen bg-gray-100 flex flex-col items-center py-15 animate__animated animate__fadeIn overflow-hidden'>
            <div className="w-full max-w-md flex flex-col gap-3 animate__animated animate__backInUp">
                 <div className="flex item-center justify-center text-gray-100">
                    <h1 className="text-2xl font-bold p-3 px-5 rounded-2xl" 
                        style={{backgroundColor: bgColor}}>₦</h1>
                </div>
            {
                topItem()
            }

            <div className="bg-white rounded-2xl p-3 px-6 py-5">
                <form className='flex flex-col gap-5'>

                    <div>
                        <label htmlFor="email">Email Address</label>
                        <div className='border border-gray-300 rounded-lg flex p-2 gap-2'>
                            <i className="ri-mail-fill"></i>
                            <input 
                                id='email'
                                required
                                className='w-full focus:outline-none'
                                placeholder='Enter your email address'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <div className='border border-gray-300 rounded-lg flex p-2 gap-2'>
                            <i className="ri-lock-2-fill"></i>
                            <input 
                                id='password'
                                required
                                className='w-full focus:outline-none'
                                placeholder='Enter your password'
                            />
                            <i className="ri-eye-fill"></i>
                        </div>
                    </div>

                    <div className='flex justify-end'>
                        <p>
                            <Link
                                style={
                                    {color: bgColor}
                                }
                                to="/forgetpasswordpage"
                            >
                                Forgot Password?
                            </Link>
                        </p>
                    </div>

                    <button 
                    style={{backgroundColor: bgColor}} 
                        className='text-white p-3 rounded-lg cursor-pointer font-medium hover:scale-105 transition-transform duration-300'>
                            Sign In
                    </button>

                    <Divider/>

                    <button 
                        className='p-3 border border-gray-300 rounded-lg cursor-pointer flex justify-center gap-2 hover:scale-105 transition-transform duration-300'>
                        <i className="ri-google-fill text-rose-500"></i>
                        Continue with Google
                    </button>
                </form>
            </div>
            {
                redirectText()
            }
            </div>
        </div>    
    );
}

export default LoginPage;