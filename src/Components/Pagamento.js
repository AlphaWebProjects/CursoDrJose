import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import styled from 'styled-components';
import doctor2 from '../img/FotosAlunos1.jpeg';

function Pagamento() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elementOffset = document.getElementById('mainContentCurso').offsetTop;
      const isVisible = scrollTop > elementOffset - window.innerHeight + 200;
      setIsVisible(isVisible);
    };

    //function

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <MainContentCurso id="mainContentCurso">
        <CenterContent>
          <h1>Sobre a nossa oferta</h1>
          <InfoContainer>
            <LeftInfos isVisible={isVisible}>
              <h2>Investimento</h2>
              <ul>
                <li>• Preparação completa para o manejo de ferramentas {<Check/>}</li>
                <li>• Várias aplicações práticas com feedback {<Check/>}</li>
                <li>• Suporte completo para dúvidas {<Check/>}</li>
                <li>• Metodologia moderna e aplicável {<Check/>}</li>
                <li>• Contato direto com a equipe de instrutores {<Check/>}</li>
                <li>• Reembolso em até 7 dias sem burocracia {<Check/>}</li>
              </ul> 
            </LeftInfos>
            <RightInfos isVisible={isVisible}>
              <div>
                <p>De <b>R$ 1299,99</b> por até</p>
                <h2>12x de <br></br>R$ 87,50</h2>
                <p>ou R$ 900,00 à vista</p>
                <Button>Quero garantir minha vaga!</Button>
              </div>
            </RightInfos>
          </InfoContainer>
        </CenterContent>
      </MainContentCurso>
    </Container>
  );
}

export default Pagamento;

const InfoContainer = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  justify-content: space-between;
  padding-top: 1vh;
  @media (max-width: 1200px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 1vh;
  }
`;

const LeftInfos = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 2s ease-in-out;
  ul{
    padding: 4vh 5vh;
    border: 3px solid #158A7A;
    height: auto;
    border-radius: 13px;
    transition: transform 0.3s, box-shadow 0.3s, border-radius 0.3s;
    overflow-y: scroll;
    scrollbar-width: thin; 
    scrollbar-color: #158A7A transparent; 
    &:hover {
    transform: scale(1.015);
    cursor: pointer;
    box-shadow: #158A7A 0px 5px 15px;
  }
  }
  ul::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem para navegadores baseados em WebKit */
  }

  ul::-webkit-scrollbar-thumb {
      background-color: #158A7A; /* Cor do polegar (a parte que você arrasta) */
      border-radius: 4px; /* Raio de borda do polegar */
  }
  li {
    margin-top: 10px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #158A7A;
    padding: 1vh 0;
    width: 55vh;
    &:last-child {
    border: none;
  }
  transition: transform 0.3s, box-shadow 0.3s, border-radius 0.3s;
    &:hover {
    transform: scale(1.1);
    cursor: pointer;
    @media (max-width: 1200px) {
    transform: scale(1);
  }
  }
  }
  h2{
    font-size: 32px !important;
    border-top: 3.5px solid  #158A7A;
    border-bottom: 3.5px solid  #158A7A;
    box-shadow: #222726 0px 0px 10px;
    padding: 1.5vh 3vh;
    border-radius: 10px;
    color: #158A7A
  }
  @media (max-width: 1200px) {
    height: auto;
    width: 110%;
    h2{
      font-size: 20px !important;
    }
    li{
      font-size: 14px !important;
      width: auto;
      padding: 2vh 1vh;
    }
    ul{
      width: 100%;
      padding: 0;
      border-left: 0;
      border-right: 0;
      border-radius: 0;
    }
  }
`;

const Check = styled(FaCheckCircle)`
color:green;
width: 2vh !important;
height: 2vh !important;
`

const RightInfos = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 2s ease-in-out;
  height: auto;
  padding: 0 !important;
  width: 50%;
  padding-top: 6vh !important;
  div {
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5vh;
    width: 100%;
    box-shadow: #158A7A 0px 5px 15px;
    border-radius: 15px;
    transition: transform 0.3s, box-shadow 0.3s, border-radius 0.3s;
    &:hover {
    transform: scale(1.01);
  }
  }
  p{
    font-size: 36px !important;
    margin: 0 ;
    text-align: center;
  }
  h2{
    font-size: 55px;
    color: green;
    margin: 0 ;
    text-align: center;
  }
  b{
    text-decoration: line-through;
  }
  @media (max-width: 1200px) {
    height: auto;
    width: 90%;
    flex-direction: column;
    align-items: center;
    div{
      margin-bottom: 5vh;
      width: 100%;
    }
    p{
      font-size: 30px;
    }
  }
`;

const Button = styled.button`
  background-color: #158A7A;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 28px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 50px;
  transition: transform 0.3s, box-shadow 0.3s, border-radius 0.3s;
  &:hover {
    transform: scale(1.05);
    border-radius: 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 420px) {
    margin-top: 10px;
    font-size: 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${doctor2});
  background-size: cover;
  background-position: center top 60%;
  @media (max-width: 1200px) {
    height: auto;
  }
`;

const MainContentCurso = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5%;
  @media (max-width: 1200px) {
    height: auto;
  }
`;

const CenterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 5%;
  h1 {
    color: #158a7a;
    font-size: 40px;
    padding: 12px;
    border-radius: 12px;
    border-bottom: 3px solid #158a7a;
    text-align: center;
  }
  p {
    font-size: 20px;
  }
`;