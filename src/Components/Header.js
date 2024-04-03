import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logoSmall.png';
function Header() {
  const [activeHeader, setActiveHeader] = useState(1);

  const handleHeaderClick = (index) => {
    setActiveHeader(index);
    if (index === 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (index === 2) {
      window.scrollTo({ top: 890, behavior: 'smooth' });
    }
    if (index === 3) {
      window.scrollTo({ top: 1800, behavior: 'smooth' });
    }
    if (index === 4) {
      window.scrollTo({ top: 2700, behavior: 'smooth' });
    }
    if (index === 5) {
      window.scrollTo({ top: 3750, behavior: 'smooth' });
    }
    if (index === 6) {
      window.scrollTo({ top: 4825, behavior: 'smooth' });
    }
    

  };

  return (
    <HeaderContainer>
        <h1><img src={logo} width="230" height="60" alt="Logo"/> </h1>
      <MiddleHeader>
        <StyledH2 active={activeHeader === 1} onClick={() => handleHeaderClick(1)}>Home</StyledH2>
        <StyledH2 active={activeHeader === 2} onClick={() => handleHeaderClick(2)}>Simva</StyledH2>
        <StyledH2 active={activeHeader === 3} onClick={() => handleHeaderClick(3)}>Sobre o curso</StyledH2>
        <StyledH2 active={activeHeader === 4} onClick={() => handleHeaderClick(4)}>Equipe</StyledH2>
        <StyledH2 active={activeHeader === 5} onClick={() => handleHeaderClick(5)}>Comentários</StyledH2>
        <StyledH2 active={activeHeader === 6} onClick={() => handleHeaderClick(6)}>Oferta</StyledH2>
        {/* <Indicator activeHeader={activeHeader} /> */}
      </MiddleHeader>
        <StyledLoginButton as={Link} to="/auth">Login</StyledLoginButton>
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
  @media (max-width: 1200px) {
    display: none;
  }
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
  left: ${({ activeHeader }) => `${(activeHeader -0.6) * 20}%`};
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
  text-decoration: none;
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
