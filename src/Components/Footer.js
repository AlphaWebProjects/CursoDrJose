import styled from "styled-components";
import logo from "../img/logoSmall.png";

export default function Footer(){
  const instagram = "https://www.instagram.com"
  const whatsappNumber = "+553538216262";
  const whatsappMessage = `Olá, eu gostaria de fazer uma cotação com o comercial da Rodrimar.`;

  const handleItemClick = (item) => {
    window.scrollTo({ top: item.position, behavior: 'smooth' })
  };

  return (
    <Container>

      <TitleContainer>
        <h3>{"Conecte-se Conosco"}</h3>
        <SocialContainer>
          <a href={instagram} target="_blank" rel="noopener noreferrer"></a>
          <a
            target="_blank"
            onClick={(e) => e.stopPropagation()} rel="noopener noreferrer"></a>
        </SocialContainer>
      </TitleContainer>

      <SubContainer>
        <ImageContainer>
          <img src={logo} alt="" />
        </ImageContainer>

        <TextColumn>
          <h4>{"Nosso Site"}</h4>
          <h5 onClick={() => handleItemClick({position: 0})}>{"Página Inicial"}</h5>
          <h5 onClick={() => handleItemClick({position: 890})}>{"Nosso objetivo"}</h5>
          <h5 onClick={() => handleItemClick({position: 1800})}>{"Sobre o curso"}</h5>
          <h5 onClick={() => handleItemClick({position: 2700})}>{"Equipe"}</h5>
          <h5 onClick={() => handleItemClick({position: 3750})}>{"Comentários"}</h5>
          <h5 onClick={() => handleItemClick({position: 4825})}>{"Oferta"}</h5>
        </TextColumn>

        <TextColumn>
          <h4>{"Contato"}</h4>
          <h5>{"Email: email@email.com"}</h5>
          <h5>{"Endereço: Av. Prof. Lúcio Martins Rodrigues, 445 - Cidade Universitária Butantã, São Paulo - SP, 05508-020, sala 12 do prédio Prédio da Faculdade de Medicina da USP (FMUSP)"}</h5>
          <h5>{"Celular: (11) 99999-9999"}</h5>
        </TextColumn>

      </SubContainer>

      <AboutContainer>
        <span>{"Todos Direitos Reservados ©"}</span>
      </AboutContainer>

    </Container>
  )
}

const Container = styled.footer`
  background-color: #158A7A;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2vh 0;
  color: #FFFFFF;
  row-gap: 4vh;
  @media (max-width: 850px) {
    padding: 2vh 0vw;
  }
  h3{
    margin: 0 !important;
  }
  h4{
    margin: 0 !important;
  }
  h5{
    margin: 0 !important;
  }
  span{
    margin: 0 !important;
  }
  a{
    margin: 0 !important;
  }
`
const TitleContainer = styled.div`
  width: 80%;
  padding: 1.7vh 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #FFFFFF;
  > h3 {
    font-size: 24px;
  }
  svg {
    font-size: 27px;
    cursor: pointer;
  }
  @media (max-width: 850px) {
    > h3 {
      font-size: 20px;
    }
    svg {
      font-size: 24px;
    }
  }
`
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.6vw;
  @media (max-width: 850px) {
    column-gap: 4vw;
  }
`
const SubContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5vw;
  @media (max-width: 850px) {
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
const ImageContainer = styled.div`
background-color: white !important;
border-radius: 15px;
padding: 2vh;
margin: 0 !important;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
transition: transform 0.3s ease-in-out;
  img {
    height: 15vh;
    width: 42vh;
    cursor: pointer;
  }
  &:hover {
    transform: scale(1.03);
  }
  @media (max-width: 850px) {
    display: none;
  }
`
const TextColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 2vh;
  h4 {
    font-size: 22px;
    font-weight: 600;
  }
  h5 {
    font-size: 16px;
    max-width: 300px;
    cursor: pointer;
  }
  @media (max-width: 850px) {
    width: auto;
    max-width: 58%;
    padding-left: 5vh;
    h5 {
      width: 90%;
      font-size: 12px;
    }
    h4 {
      font-size: 20px;
    }
  }
`
const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1vw;
  padding: 1.2vh 0;
  > :last-child {
    text-decoration: underline;
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    font-size: 15px;
    column-gap: 0;
    padding: 0;
    margin: 0 !important;
  }
`