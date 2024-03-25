import styled from 'styled-components';
import './App.css';
import Header from './Components/Header';
function App() {
  return (
    <AppContainer>
      <Header />
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
