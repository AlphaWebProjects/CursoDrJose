import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import felipe from '../img/felipe.png';
import gabriel from '../img/gabriel.png';
import jose from '../img/jose.png';
function Equipe() {
  const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setIsVisible(true);
      }, 50); // Altera a opacidade após 1 segundo
    }, []);

    return (
        <Container>
        <MainContentEquipe>
          <CenterContent>
          <h1>Equipe</h1>
          <Members  isVisible={isVisible}>
            <div>
            <img src={felipe} width="150" height="150" alt="Logo" />
              <h2>Felipe Albuquerque</h2>
              <h3>Co-fundador</h3>
              <p>Medico formado pela Universidade de São Paulo (USP) - Residência: Anestesiologia Hospital das Clinicas da USP</p>
            </div>
            <div>
            <img src={gabriel} width="150" height="150" alt="Logo" />
              <h2>Gabriel Lima</h2>
              <h3>Co-fundador</h3>
              <p>Medico formado pela Universidade Federal de Viçosa - Residência: Anestesiologia Hospital das Clinicas da USP</p>
            </div>
            <div>
            <img src={jose} width="150" height="150" alt="Logo" />
              <h2>Jose Neto</h2>
              <h3>Co-fundador</h3>
              <p>Médico formado pela Universidade Federal de Uberlândia - Residência: Clínica Médica na Famerp e Anestesiologia no Hospital das Clinicas da USP</p>
            </div>
          </Members>
          </CenterContent>
        </MainContentEquipe>
    </Container>
    );
  }
  
  export default Equipe;
  
  const Container = styled.div`
    width: 100%;
    height: 90%;
    margin-top: -2px;
    @media (max-width: 1200px) {
     height: auto;
  }
`;

const Members= styled.div`
  display: flex;
  width: 100%;  
  justify-content: space-around;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
    transition: opacity 1s ease-in-out;
  div{
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width:20%
  }
  p{
    text-align:center;
    font-size: 15px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    div{
      width: 100%;
      border-top: 1px solid black;
      padding: 9vh 0;
    }
  }
`

const MainContentEquipe= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 5%;
    background: #ADA996;
    background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);
    background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); 
    @media (max-width: 1200px) {
    height: auto;
  }
`
const CenterContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding:5%;
    h1 {
    color: #158a7a;
    font-size: 40px;
  }
  @media (max-width: 1200px) {
    height: auto;
    h1{
      margin-bottom: 8vh;
    }
  }
`