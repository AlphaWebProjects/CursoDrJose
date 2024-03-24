import styled from 'styled-components';
import fotoAlunos from '../img/fotoAlunos.jpeg';
import React, { Component } from 'react';


function Home() {
  const handleHeaderClick = () => {
    const totalHeight = document.body.scrollHeight;
    const scrollToHeight = totalHeight * 0.5; // Rolar para baixo 50% da altura total da página
    window.scrollTo({ top: scrollToHeight, behavior: 'smooth' });
  };

  return (
    <Container>
      <MainContentHome>
        <CenterContent>
          <Left>
            <h1><span style={{ color: '#158A7A' }}>Domine o Essencial:<br></br> Suporte no Manejo da Via Aérea</span></h1>
            <p>
              Descubra o poder de <span style={{ color: '#158A7A' }}> salvar vidas</span> com confiança! Nosso curso de 
              <span style={{ color: '#158A7A' }}> Suporte Integral no Manejo da Via Aérea</span> é a chave para a excelência na prestação de cuidados médicos. 
              Projetado para profissionais de saúde que buscam dominar as <span style={{ color: '#158A7A' }}>técnicas vitais de intervenção em situações críticas</span>, 
              este curso oferece uma abordagem abrangente, desde os fundamentos até as práticas avançadas
            </p>
            <Button onClick={() => handleHeaderClick()}>Saiba Mais</Button>
          </Left>
          <Right>
            <VideoPlayer />
          </Right>
        </CenterContent>
      </MainContentHome>
    </Container>
  );
}

class VideoPlayer extends Component {
  componentDidMount() {
    const element = document.querySelector('.ytp-gradient-top');
    if (element) {
      element.style.display = 'none';
    }
  }

  render() {
    return (
      <iframe width="292" height="515" src="https://www.youtube.com/embed/8YJWvcsc2og?autoplay=1&modestbranding=1&showinfo=0" frameBorder="0" allowFullScreen></iframe>
    );
  }
}

export default Home;

  
  const Container = styled.div`
    width: 100%;
    height: 90%;
    margin-top:120px;
    background-image: url(${fotoAlunos});
    background-size: cover;
    background-position: center;
`;
 const MainContentHome= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 5%;

 `
 const Left = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.45) 25px 0px 20px -20px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding:5%;
  p{
    font-size: 18px;
    font-weight: 500;
  }
 `
 const Button = styled.button`
  background-color: #158A7A;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 50px;
  transition: transform 0.3s, box-shadow 0.3s,border-radius 0.3s;
  &:hover {
    transform: scale(1.05);
    border-radius: 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }
`;

 const Right = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
 `
  const CenterContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 20px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    background-color: rgba(255, 255, 255, 0.9);
  `
 