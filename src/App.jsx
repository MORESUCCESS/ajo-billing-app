import SignUp from "./pages/signup";
import LoginPage from "./pages/login";
import DashBoard from "./pages/dashboard";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ForgetPasswordPage from "./pages/forgetPassword";
import '@ant-design/v5-patch-for-react-19';


const App = ()=>{

  return(
    <Router>
      <div>
        <Routes>
          {/* Default route → redirect to /login */}
           <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpasswordpage" element={<ForgetPasswordPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;