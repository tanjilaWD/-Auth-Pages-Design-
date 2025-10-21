import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import ResetPage from "./Components/ResetPage";

const App = () => {
    return (
        <Router>
      
      <Routes>
       <Route path="/loginpage" element={<LoginPage />} /> 
       <Route path="/resetpage" element={<ResetPage/>} /> 
          
      </Routes>
    </Router>
    );
};

export default App;
