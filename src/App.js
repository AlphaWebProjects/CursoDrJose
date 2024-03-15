import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import SobreNos from './Pages/SobreNos.js';
import Header from './Components/Header';
import SobreCurso from './Pages/SobreCurso';
import Pagamento from './Pages/Pagamento';
function App() {
  return (
    <AppContainer>
      <Header />
      <Home/>
      <SobreNos/>
      <SobreCurso/>
      <Pagamento/>
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
