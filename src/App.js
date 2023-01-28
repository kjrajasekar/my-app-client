import './App.css';
import Home from './Home'
import Login from './Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={  <Login />} />
      <Route exact path="/home" element={  <Home />} />
       <Route path="/login" element={<Login />} />
      </Routes> 
  </Router>
  );
}

export default App;
