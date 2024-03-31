import styled from 'styled-components';
import felipe from '../img/felipe.png';
import gabriel from '../img/gabriel.png';
import React, { useState, useEffect } from 'react';
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
`

const MainContentEquipe= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 5%;
    background: #ADA996;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
`