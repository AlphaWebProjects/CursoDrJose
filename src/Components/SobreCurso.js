import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import doctor2 from '../img/FotosAlunos1.jpeg';
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
              <h2>Um treinamento para vida</h2>
              <ul>
                <li>Treinamento para manejo da via aérea</li>
                <li>Desenvolvido por especialistas da USP</li>
                <li>Voltado para a realidade médica do dia a dia</li>
                <li>Fundamentado em casos reais</li>
                <li>Gerenciamento seguro da via aérea avançada</li>
                <li>Manejo refinado de condução de fármacos</li>
              </ul>
            </LeftInfos>
            <RightInfos isVisible={isVisible}>
              <div>
                <img src={img1} width="150" height="150" alt="Logo" />
                <h2>Prático</h2>
                <h3>Treinamento prático com casos clínicos reais</h3>
              </div>
              <div>
                <img src={img2} width="150" height="150" alt="Logo" />
                <h2>Teórico</h2>
                <h3>Conteúdo didático sedimentado através de uma metodologia exclusiva</h3>
              </div>
              <div>
                <img src={img3} width="150" height="150" alt="Logo" />
                <h2>Qualidade Usp</h2>
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
`;

const LeftInfos = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;
  li {
    margin-top: 10px;
  }
`;

const RightInfos = styled.div`
  display: flex;
  width: 45%;
  justify-content: space-between;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
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
`;

const Container = styled.div`
  width: 100%;
  height: 90%;
  background-image: url(${doctor2});
  background-size: cover;
  background-position: center top 60%;
`;

const MainContentCurso = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5%;
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
  }
  p {
    width: 80%;
    font-size: 20px;
  }
`;
