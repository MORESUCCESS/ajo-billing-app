import 'remixicon/fonts/remixicon.css'
import Divider from '../components/divider'
import { Link } from 'react-router-dom'
import 'animate.css'

const bgColor = "#00C896"

const SignUp =()=>{

    const FormButton = () => {
        return (
            <button
            style={{ backgroundColor: bgColor }}
            className="text-white p-3 rounded-lg cursor-pointer font-medium hover:scale-105 transition-transform duration-300"
            >
            Create Account
            </button>
        );
};


    const topItem = () => {
        return (
            <div className="flex item-center flex-col text-center">
            <h1 className="text-2xl font-bold">Create Account</h1>
            <p className="font-medium">Join us and start your financial journey today!</p>
            </div>
        );
};

    const redirectText =()=>{
    return(
         <div className='text-center'>
                <p>Already have an account? 
                    <Link 
                    to="/login"
                    style={{color: bgColor}}
                        className='cursor-pointer'
                    > Login</Link></p>
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
                        <label htmlFor="fname">Full Name</label>
                        <div className='border border-gray-300 rounded-lg flex p-2 gap-2'>
                            <i className="ri-user-fill"></i>
                            <input 
                                required
                                className='w-full focus:outline-none'
                                placeholder='Enter your full name'
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <div className='border border-gray-300 rounded-lg flex p-2 gap-2'>
                            <i className="ri-phone-fill"></i>
                            <input 
                                required
                                className='w-full focus:outline-none'
                                placeholder='Enter your phone number'
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email">Email Address</label>
                        <div className='border border-gray-300 rounded-lg flex p-2 gap-2'>
                            <i className="ri-mail-fill"></i>
                            <input 
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
                                required
                                className='w-full focus:outline-none'
                                placeholder='Create a password'
                            />
                            <i className="ri-eye-fill"></i>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="cpassword">Confirm Password</label>
                        <div className='border border-gray-300 rounded-lg flex p-2 gap-2'>
                            <i className="ri-lock-2-fill"></i>
                            <input 
                                required
                                className='w-full focus:outline-none'
                                placeholder='Confirm your password'
                            />
                            <i className="ri-eye-fill"></i>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <input type="checkbox" 
                            required
                        />
                        <p>I agree 
                            <span style={{color: bgColor}} 
                            className='font-bold cursor-pointer'> Terms of Service </span> 
                            and 
                            <span style={{color: bgColor}} 
                            className='font-bold cursor-pointer'> Privacy Policy</span>
                        </p>
                    </div>

                    {
                        FormButton()
                    }

                    <Divider/>

                    <button 
                        className='p-3 border border-gray-300 rounded-lg cursor-pointer flex justify-center gap-2 hover:scale-105 transition-transform duration-300'>
                        <i className="ri-google-fill text-rose-500"></i>
                        Sign up with Google
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

export default SignUp;