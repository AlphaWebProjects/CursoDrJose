import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import styled from 'styled-components';
import doctor2 from '../img/Background2.png';
import img1 from '../img/img_curso1.png';
import img2 from '../img/img_curso2.png';
import img3 from '../img/img_curso3.png';

function SobreCurso() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elementOffset = document.getElementById('mainContentCurso').offsetTop;
      const isVisible = scrollTop > elementOffset - window.innerHeight + 200;
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <MainContentCurso id="mainContentCurso">
        <CenterContent>
          <h1>Sobre o curso</h1>
          <InfoContainer>
            <LeftInfos isVisible={isVisible}>
              <h2>Um treinamento para a vida</h2>
              <ul>
                <li>• Treinamento para manejo da via aérea {<Check/>}</li>
                <li>• Desenvolvido por especialistas da USP {<Check/>}</li>
                <li>• Voltado para a realidade médica do dia a dia {<Check/>}</li>
                <li>• Fundamentado em casos reais {<Check/>}</li>
                <li>• Gerenciamento seguro da via aérea avançada {<Check/>}</li>
                <li>• Manejo refinado de condução de fármacos {<Check/>}</li>
              </ul> 
            </LeftInfos>
            <RightInfos isVisible={isVisible}>
              <div style={{textAlign:'center'}}>
                <img src={img1} width="150" height="150" alt="Logo" />
                <h2>Prático</h2>
                <h3>Treinamento prático com casos clínicos reais</h3>
              </div>
              <div style={{textAlign:'center'}}>
                <img src={img2} width="150" height="150" alt="Logo" />
                <h2>Teórico</h2>
                <h3>Conteúdo didático sedimentado através de uma metodologia exclusiva</h3>
              </div>
              <div style={{textAlign:'center'}}>
                <img src={img3} width="150" height="150" alt="Logo" />
                <h2>Qualidade USP</h2>
                <h3>Equipe formada no maior centro de excelência médica do país.</h3>
              </div>
            </RightInfos>
          </InfoContainer>
        </CenterContent>
      </MainContentCurso>
    </Container>
  );
}

export default SobreCurso;

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
  color: #3E9E90;
  ul{
    padding: 4vh 5vh;
    border: 3px solid #4bc6b4;
    border-radius: 13px;
    transition: transform 0.3s, box-shadow 0.3s, border-radius 0.3s;
    list-style-type: disc !important;
    overflow-y: scroll;
    scrollbar-width: thin; /* Define a largura da barra de rolagem */
    scrollbar-color: #4bc6b4 transparent; /* Define a cor da barra de rolagem e do fundo */
    &:hover {
    transform: scale(1.015);
    cursor: pointer;
    box-shadow: #4bc6b4 0px 5px 15px;
    border: 1px solid #4bc6b4;
  }
  }
  ul::-webkit-scrollbar {
    width: 8px;
    display: none;
    background-color: #3E9E90;;
  }

  ul::-webkit-scrollbar-thumb {
      background-color: #4bc6b4; /* Cor do polegar (a parte que você arrasta) */
      border-radius: 4px; /* Raio de borda do polegar */
  }
  li {
    margin-top: 5px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #4bc6b4;
    padding: 1vh 0;
    width: 50vh;
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
    border-left: 3.5px solid white;
    border-right: 3.5px solid white;
    padding: 1.5vh 3vh;
    border-radius: 10px;
    border-color: #3E9E90;
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
      margin: 0;
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
  display: flex;
  width: 45%;
  justify-content: space-between;
  align-items: center;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 2s ease-in-out;
  div {
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10vw;
    padding: 3vh;
    box-shadow: #3E9E90 0px 5px 15px;
    border-radius: 15px;
    margin-right: 4vh;
    transition: transform 0.3s, box-shadow 0.3s, border-radius 0.3s;
    color: #3E9E90;
    &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  }
  h2 {
    font-size: 20px;
  }
  h3{
    text-align:center;
    font-weight: 500;
    font-size: 15px;
  }
  p {
    font-size: 10px;
    text-align: center;
  }
  @media (max-width: 1200px) {
    height: auto;
    width: 90%;
    flex-direction: column;
    align-items: center;
    margin-top: 8vh;
    div{
      margin-bottom: 5vh;
      width: 100%;
      margin-right: 0 !important;
    }
    h2{
      
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${doctor2});
  background-size: cover;
  color:#FFFFFF;
  background-position: center top 60%;
  list-style-type: disc !important;
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
  padding: 5%;
  h1 {
    color: #3E9E90;
    font-size: 40px;
    padding: 12px;
    border-radius: 12px;
    border-bottom: 3px solid #3E9E90;
  }
  p {
    width: 80%;
    font-size: 20px;
  }
`;