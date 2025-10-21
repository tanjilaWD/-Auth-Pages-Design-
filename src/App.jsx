import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import ResetPage from "./Components/ResetPage";
import Forgotpass from "./Components/Forgotpass";

import SignUp from './Components/SignUp';

const App = () => {
    return (
        <Router>
      
      <Routes>
       <Route path="/loginpage" element={<LoginPage />} /> 
       <Route path="/resetpage" element={<ResetPage/>} /> 
       <Route path="/forgotpass" element={<Forgotpass/>}/>
       <Route path="/signup" element={<SignUp/>}/>
          
      </Routes>
    </Router>
    );
};

export default App;
