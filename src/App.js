import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import Header from './Components/Header';
function App() {
  return (
    <AppContainer>
      <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/register" element={null} />
        <Route path="/login" element={null} />
      </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
  
const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: -21px;
  box-sizing: border-box;
`;