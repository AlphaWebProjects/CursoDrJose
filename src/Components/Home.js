import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../img/logoSmall.png';
import backgroundHome from '../img/Background1.png'
import UserContext from "../context/UserContext.js"
import { Link } from 'react-router-dom';
import { useContext } from "react"
import { Fade, Zoom } from 'react-awesome-reveal';
function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth)
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData)
  async function handleLogout(){
    try {
      await api.LogoutSession(userData.token)
      setUserData({})
      window.location.reload()
    } catch (error) {
      setUserData({})
      console.log(error)
    }
  }
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
      {userData.token ? (
        <LogOutContainer>
            <AdminButton>
              <Link to="/admin">
                <StyledLoginButton>Admin</StyledLoginButton>
              </Link>
            </AdminButton>
          <span>Olá, { userData.name.split(" ")[0] }</span>
            <StyledLogoutButton onClick={handleLogout}>Sair</StyledLogoutButton>

        </LogOutContainer>
    ) : (
        <Link to="/auth">
            <StyledLoginButton>Login</StyledLoginButton>
        </Link>
    )}
      <MainContentHome>
        <CenterContent>
          {width > 1200?
                    <Fade triggerOnce={true}>
                    <Logo>
                      <img src={logo} width="390" height="100" alt="Logo" />
                    </Logo>
                    </Fade>:<></>
          }
        <Fade delay={300} cascade  damping={0.3} triggerOnce={true} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Left isVisible={isVisible}>
            <img src={logo}/>
            <h1><span style={{ color: '#158a7a' }}>Domine o Essencial:<br /> Suporte no Manejo da Via Aérea</span></h1>
            {width < 1200 
            ? 
            <>
              <p>
              Descubra o poder de <span style={{ color: '#158a7a' }}> salvar vidas</span> com confiança! Nosso curso de 
              <span style={{ color: '#158a7a' }}> Suporte Integral no Manejo da Via Aérea</span> é a chave para a excelência na prestação de cuidados médicos. 
            </p>
            <p>
            Projetado para profissionais de saúde que buscam dominar as <span style={{ color: '#158a7a' }}>técnicas vitais de intervenção em situações críticas</span>, 
              este curso oferece uma abordagem abrangente, desde os fundamentos até as práticas avançadas.
            </p>
            </> 
            : 
            <>
              <p>
              Descubra o poder de <span style={{ color: '#158a7a' , fontWeight:'bold'}}> salvar vidas</span> com confiança! Nosso curso de 
              <span style={{ color: '#158A7A', fontWeight:'bold' }}> Suporte Integral no Manejo da Via Aérea</span> é a chave para a excelência na prestação de cuidados médicos. Projetado para profissionais de saúde que buscam dominar as 
              <span style={{ color: '#158A7A', fontWeight:'bold' }}>técnicas vitais de intervenção em situações críticas</span>, 
              este curso oferece uma abordagem abrangente, desde os fundamentos até as práticas avançadas.
            </p>
            </> 
            }
            <Zoom  triggerOnce={true} >
            <Button  onClick={() => handleHeaderClick()} >Saiba Mais</Button>
            </Zoom>
          </Left>
          </Fade>
        </CenterContent>
      </MainContentHome>
    </Container>
  );
}

export default Home;

const Logo = styled.div`
  position:absolute;
`
const AdminButton = styled.div`
 background-color: #158A7A;
 text-decoration: none;
 left:15px;
top:-25px;
position: absolute;
`

const LogOutContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:250px;
z-index:3;
right:15px;
top:25px;
position: absolute;
span{
  font-size: 16px;
  font-weight: 500;
  color:black;
  margin-right: 10px;
}
`;
const StyledLogoutButton = styled.h2`
  cursor: pointer;
  min-width: 80px;
  height: 40px;
  text-align: center;
  color: #FFFFFF;
  font-size: 16px;
  background-color: red;
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

const StyledLoginButton = styled.h2`
  cursor: pointer;
  max-width: 100px;
  width:100px;
  height: 40px;
  text-align: center;
  color: #FFFFFF;
  font-size: 16px;
  background-color: #158A7A;
  text-decoration: none;
  border-radius: 20px;
  z-index:3;
  right:15px;
  top:25px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;  /* Adicionando transição para a mudança de escala */
  
  &:hover {
    transform: scale(1.02); /* Aumenta em 5% ao passar o mouse */
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position:relative;
  background-image: url(${backgroundHome});
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
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  p {
    font-size: 25px;
    font-weight: 500;
    color:#158A7A;
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
  box-shadow: #158A7A 0px 2px 20px;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 25px;
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
  color:#FFFFFF;
  @media (max-width: 420px) {
    margin-top: 10px;
  }
`;
