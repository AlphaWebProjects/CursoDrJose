import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../img/logoSmall.png';
import background from '../img/backgroundSimva.png'
function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {

    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Altera a opacidade após 1 segundo

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const handleHeaderClick = () => {
    if(width < 1200){
      window.scrollTo({
        top: 1430,
        left: 0,
        behavior: 'smooth'
      });
      return
    }
    const totalHeight = document.body.scrollHeight;
    const scrollToHeight = totalHeight * 0.27;
    window.scrollTo({ top: scrollToHeight, behavior: 'smooth' });
  };

  return (
    <Container>
      <MainContentHome>
        <CenterContent>
          <Left isVisible={isVisible}>
            <img src={logo}/>
            <h1><span style={{ color: '#158A7A' }}>Domine o Essencial:<br /> Suporte no Manejo da Via Aérea</span></h1>
            {width < 1200 
            ? 
            <>
              <p>
              Descubra o poder de <span style={{ color: '#158A7A' }}> salvar vidas</span> com confiança! Nosso curso de 
              <span style={{ color: '#158A7A' }}> Suporte Integral no Manejo da Via Aérea</span> é a chave para a excelência na prestação de cuidados médicos. 
            </p>
            <p>
            Projetado para profissionais de saúde que buscam dominar as <span style={{ color: '#158A7A' }}>técnicas vitais de intervenção em situações críticas</span>, 
              este curso oferece uma abordagem abrangente, desde os fundamentos até as práticas avançadas.
            </p>
            </> 
            : 
            <>
              <p>
              Descubra o poder de <span style={{ color: '#158A7A' }}> salvar vidas</span> com confiança! Nosso curso de 
              <span style={{ color: '#158A7A' }}> Suporte Integral no Manejo da Via Aérea</span> é a chave para a excelência na prestação de cuidados médicos. Projetado para profissionais de saúde que buscam dominar as <span style={{ color: '#158A7A' }}>técnicas vitais de intervenção em situações críticas</span>, 
              este curso oferece uma abordagem abrangente, desde os fundamentos até as práticas avançadas.
            </p>
            </> 
            }
            
            <Button  onClick={() => handleHeaderClick()} >Saiba Mais</Button>
          </Left>
        </CenterContent>
      </MainContentHome>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 90%;
  margin-top: 120px;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  @media (max-width: 1200px) {
    margin-top: 0;
    height: auto;
  }
`;

const MainContentHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5%;
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.45) 25px 0px 20px -20px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 1s ease-in-out;
  p {
    font-size: 20px;
    font-weight: 500;
  }
  h1{
    font-size: 40px;
    padding: 12px;
    border-radius: 12px;
    border-bottom: 3px solid #158a7a;
  }
  img{
    display: none;
  }
  @media (max-width: 1200px) {
    img{
      display: block;
      width: 35vh;
      height: 11vh;
    }
    p{
      font-size: 18px ;
    }
    h1{
      font-size: 28px;
    }
    padding: 7vh 5%;
  }
`;

const Button = styled.button`
  background-color: #158A7A;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 50px;
  transition: transform 0.3s, box-shadow 0.3s, border-radius 0.3s;
  &:hover {
    transform: scale(1.05);
    border-radius: 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 420px) {
    margin-top: 10px;
  }
`;

const CenterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 20px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  background-color: rgba(255, 255, 255, 0.85);
  @media (max-width: 420px) {
    margin-top: 10px;
  }
`;
