import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../img/logoSmall.png';

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
        <CenterContent>
          <Left className="fadeInOnScroll">
            <AnimatedImage src={logo} width="390" height="100" alt="Logo" fadeIn={fadeIn} />
          </Left>
          <Right className="fadeInOnScroll"  fadeIn={fadeIn}>
            <h1><span style={{ color: '#158A7A' }}>Quem somos?</span></h1>
            <p>
              Nosso objetivo é <span style={{ color: '#158A7A' }}>trazer segurança para o médico no manejo da via aérea. </span>   
              É importante ter em mente que a laringoscopia é apenas uma parte do grande cenário que permeia o manejo da via aérea do paciente crítico. 
               
            </p>
            <p>
            Existem pré-requisitos <span style={{ color: '#158A7A' }}> fundamentais e necessários </span>  antes da  técnica de intubação que precisam ser dominados para se ter uma via área segura e são sobre esses pilares que o SIMVA se fundamenta, 
              propiciando diretrizes bem estruturadas para o manejo e segurança no cuidado da via aérea.
            </p>
          </Right>
        </CenterContent>
      </MainContentUs>
    </Container>
  );
}

export default SobreNos;

const AnimatedImage = styled.img`
  width: 80%;
  height: 40%;
  opacity: ${({ fadeIn }) => (fadeIn ? 1 : 0)};
  transition: opacity 2s ease-in-out;
  @media (max-width: 1200px) {
    height: auto;
    width: 35vh;
    height: 15vh;
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
    border-bottom: 3px solid #158a7a;
  }
  p{
    font-size: 19px;
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
  @media (max-width: 1200px) {
    height: auto;
  }
`;

const MainContentUs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background: #ADA996;
  background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  
  background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); 
  @media (max-width: 1200px) {
    height: auto;
  }
`;

const CenterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 5%;
  transition: transform 3s, box-shadow 0.3s, border-radius 0.3s;
  &:hover {
    transform: scale(1.015);
    border-radius: 20px;
    box-shadow: #158A7A 0px 5px 15px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    box-shadow: #158A7A 0px 5px 15px;
  }
`;
