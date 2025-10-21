import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import ResetPage from "./Components/ResetPage";
import Forgotpass from "./Components/Forgotpass";

const App = () => {
    return (
        <Router>
      
      <Routes>
       <Route path="/loginpage" element={<LoginPage />} /> 
       <Route path="/resetpage" element={<ResetPage/>} /> 
       <Route path="/forgotpass" element={<Forgotpass/>}/>
          
      </Routes>
    </Router>
    );
};

export default App;
