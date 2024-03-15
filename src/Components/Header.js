import React, { useState } from 'react';
import styled from 'styled-components';

function Header() {
  const [activeHeader, setActiveHeader] = useState(1);

  const handleHeaderClick = (index) => {
    setActiveHeader(index);
  };

  return (
    <HeaderContainer>
        <h1>Dr. José Neto</h1>
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
  width: 100%;
  background-color: #FFFFFF;
  color:#ff0002;
  height: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
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
  color: ${({ active }) => (active ? '#ff0002' : '#808080')};
  &:hover {
    color:#ff0002;
  }
`;

const Indicator = styled.div`
  position: absolute;
  bottom: -1px;
  left: ${({ activeHeader }) => `${(activeHeader -0.6) * 25}%`};
  width: 5%;
  height: 2px;
  background-color: #ff0002;
  transition: left 0.3s ease-in-out;
`;
const StyledLoginButton = styled.h2`
  cursor: pointer;
  min-width: 100px;
  height: 40px;
  text-align: center;
  color: #FFFFFF;
  font-size: 16px;
  background-color: #ff0002;
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
