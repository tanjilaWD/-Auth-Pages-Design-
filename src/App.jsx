import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";

const App = () => {
    return (
        <Router>
      
      <Routes>
       <Route path="/loginpage" element={<LoginPage />} /> 
          
      </Routes>
    </Router>
    );
};

export default App;
