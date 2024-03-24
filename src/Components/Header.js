import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../img/logoSmall.png';
function Header() {
  const [activeHeader, setActiveHeader] = useState(1);

  const handleHeaderClick = (index) => {
    setActiveHeader(index);
    console.log(index)
    if (index === 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (index === 2) {
      const totalHeight = document.body.scrollHeight;
      const scrollToHeight = (totalHeight * 0.24); // Rolar para baixo 30% da altura total da página
      window.scrollTo({ top: scrollToHeight, behavior: 'smooth' });
    }
    if (index === 3) {
      const totalHeight = document.body.scrollHeight;
      const scrollToHeight = (totalHeight * 0.50); // Rolar para baixo 30% da altura total da página
      window.scrollTo({ top: scrollToHeight, behavior: 'smooth' });
    }
    if (index === 4) {
      const totalHeight = document.body.scrollHeight;
      const scrollToHeight = (totalHeight * 0.74); // Rolar para baixo 30% da altura total da página
      window.scrollTo({ top: scrollToHeight, behavior: 'smooth' });
    }
    

  };

  return (
    <HeaderContainer>
        <h1><img src={logo} width="210" height="60" alt="Logo"/> </h1>
      <MiddleHeader>
        <StyledH2 active={activeHeader === 1} onClick={() => handleHeaderClick(1)}>Home</StyledH2>
        <StyledH2 active={activeHeader === 2} onClick={() => handleHeaderClick(2)}>Sobre nós</StyledH2>
        <StyledH2 active={activeHeader === 3} onClick={() => handleHeaderClick(3)}>Sobre o curso</StyledH2>
        <StyledH2 active={activeHeader === 4} onClick={() => handleHeaderClick(4)}>Pagamento</StyledH2>
        <Indicator activeHeader={activeHeader} />
      </MiddleHeader>
        <StyledLoginButton>Login</StyledLoginButton>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
z-index: 2;
  width: 100%;
  background-color: rgb(255,255,255,0.9);
  position:fixed;
  top:0;
  left:0;
  color:#158A7A;
  height: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  backdrop-filter: blur(5px);
`;

const MiddleHeader = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  font-size: 11px;
  justify-content: space-around;
  position: relative;
`;

const StyledH2 = styled.h2`
  cursor: pointer;
  min-width:20%;
  max-width:20%;
  text-align: center;
  transition: color 0.3s ease;
  color: ${({ active }) => (active ? '#158A7A' : '#808080')};
  &:hover {
    color:#158A7A;
  }
`;

const Indicator = styled.div`
  position: absolute;
  bottom: -1px;
  left: ${({ activeHeader }) => `${(activeHeader -0.6) * 25}%`};
  width: 5%;
  height: 2px;
  background-color: #158A7A;
  transition: left 0.3s ease-in-out;
`;
const StyledLoginButton = styled.h2`
  cursor: pointer;
  min-width: 100px;
  height: 40px;
  text-align: center;
  color: #FFFFFF;
  font-size: 16px;
  background-color: #158A7A;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;  /* Adicionando transição para a mudança de escala */
  
  &:hover {
    transform: scale(1.02); /* Aumenta em 5% ao passar o mouse */
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
export default Header;
