import "remixicon/fonts/remixicon.css";
import "animate.css";
import { Link } from "react-router-dom";

const bgColor = "#00C896";

const ForgetPasswordPage = () => {
  const topItem = () => {
    return (
      <div className="flex item-center flex-col text-center">
        <h1 className="text-2xl font-bold">Forgot Password ?</h1>
        <p className="font-medium">
          No worries, enter your email or phone number, we'll send you a reset
          link
        </p>
      </div>
    );
  };

  const redirectText = () => {
    return (
      <div className="text-center">
        <p>
          Remember your password?{" "}
          <Link
            to="/login"
            style={{ color: bgColor }}
            className="cursor-pointer"
          >
            Back to Login
          </Link>
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-15 animate__animated animate__fadeIn overflow-hidden">
      <div className="w-full max-w-md flex flex-col gap-3 animate__animated animate__backInUp">
        <div className="flex item-center justify-center text-gray-100">
          <h1
            className="text-2xl font-bold p-3 px-5 rounded-2xl"
            style={{ backgroundColor: bgColor }}
          >
            ₦
          </h1>
        </div>

        {topItem()}

        <div className="bg-white rounded-2xl p-3 px-6 py-5">
          <div className="flex items-center justify-center w-full text-4xl mb-5">
            <i
              style={{ color: bgColor }}
              className="ri-key-2-fill bg-gray-100 rounded-full p-3"
            ></i>
          </div>
          <form className="flex flex-col gap-5">
            <div>
              <label htmlFor="email">Email or Phone Number</label>
              <div className="border border-gray-300 rounded-lg flex p-2 gap-2">
                <i className="ri-at-line text-gray-400"></i>
                <input
                  required
                  className="w-full focus:outline-none"
                  placeholder="Enter your email address or phone number"
                />
              </div>
            </div>

            <button
              style={{ backgroundColor: bgColor }}
              className="text-white p-3 rounded-lg cursor-pointer font-medium hover:scale-105 transition-transform duration-300"
            >
              Send reset link
            </button>

            <div className="bg-indigo-100 p-3 border border-indigo-300 rounded-lg text-blue-600">
              <h1>
                <i className="ri-info-i bg-indigo-600 text-white rounded-full mr-3"></i>
                What happens next?
              </h1>
              <ul className="list-disc pl-5 ml-4">
                <li>Check your email inbox or SMS message</li>
                <li>Click the reset link we send you</li>
                <li>Create a new password</li>
              </ul>
            </div>

            <div className="text-center">
              <p>Don't receive the link?</p>
              <p style={{ color: bgColor }}>Resend reset link</p>
            </div>
          </form>
        </div>
        {redirectText()}
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
