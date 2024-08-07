import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../img/logoSmall.png';
import backgroundPag2 from '../img/Background2.png';
import { Fade, Zoom } from 'react-awesome-reveal';
function SobreNos() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.fadeInOnScroll');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
          setFadeIn(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <MainContentUs>
      <Fade delay={300} cascade  damping={0.3} triggerOnce={true} >
        <CenterContent>
          <Left className="fadeInOnScroll">
            <AnimatedImage src={logo} width="390" height="100" alt="Logo" fadeIn={fadeIn} />
          </Left>
          <Right className="fadeInOnScroll"  fadeIn={fadeIn}>
            <h1><span style={{ color: '#3E9E90' }}>Nosso objetivo</span></h1>
            <p>
              Nosso objetivo é <span style={{ color: '#3E9E90' }}>trazer segurança para o médico no manejo da via aérea. </span>   
              É importante ter em mente que a laringoscopia é apenas uma parte do grande cenário que permeia o manejo da via aérea do paciente crítico. 
               
            </p>
            <p>
            Existem pré-requisitos <span style={{ color: '#3E9E90' }}> fundamentais e necessários </span>  antes da  técnica de intubação que precisam ser dominados para se ter uma via área segura e são sobre esses pilares que o SIMVA se fundamenta, 
              propiciando diretrizes bem estruturadas para o manejo e segurança no cuidado do seu paciente.
            </p>
          </Right>
        </CenterContent>
        </Fade>
      </MainContentUs>
    </Container>
  );
}

export default SobreNos;

const AnimatedImage = styled.img`
  opacity: ${({ fadeIn }) => (fadeIn ? 1 : 0)};
  transition: opacity 2s ease-in-out;
  width: 55.5vh;
  height: 16.5vh; 
  @media (max-width: 1200px) {
    height: auto;
    width: 35vh;
    height: 11vh;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  padding-top: 2%;
  text-align: center;
  flex-direction: column;
  font-weight: 500;
  p, h1{
    opacity: ${({ fadeIn }) => (fadeIn ? 1 : 0)};
  transition: opacity 0.7s ease-in-out;
  }
  h1{
    font-size: 45px;
    padding: 12px;
    border-radius: 12px;
    border-bottom: 3px solid #4bc6b4;
  }
  p{
    font-size: 21.5px;
    color: #1D4D45
  }
  @media (max-width: 1200px) {
    width: 100%;
    h1{
      font-size: 35px;
    }
    p{
      font-size: 17px;
    }
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 90%;
  background-image: url(${backgroundPag2});
  background-size: cover;
  background-position: center;
  @media (max-width: 1200px) {
    height: auto;
  }
`;

const MainContentUs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5%;
  color:#FFFFFF;
  @media (max-width: 1200px) {
    height: auto;
  }
`;

const CenterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 20px;
  padding: 5%;
  transition: transform 3s, box-shadow 0.3s, border-radius 0.3s;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;
