import styled from 'styled-components';
import Header from '../Components/Header';

function Home() {
    return (
      
      <Container>
          <Header />
            <MainContentHome>
              <CenterContent>
                <Left>
                <h1><span style={{ color: '#ff0002' }}>EM BUSCA DA APROVAÇÃO</span></h1>
                <p>
                  Este curso representa o primeiro passo em direção à <span style={{ color: '#ff0002' }}>tão almejada</span> oportunidade de ingressar na residência. 
                  Em meio à tanta concorrência, estamos aqui para auxiliá-lo a atingir suas metas e destacar-se em sua jornada acadêmica e profissional.
                </p>
                <p>
                  Prepare-se para desfrutar de aulas excepcionais ministradas por profissionais altamente qualificados e experientes. 
                  Nossos instrutores estão empenhados em fornecer o melhor ambiente de aprendizado possível para sua jornada rumo ao sucesso.
                </p>
                <Button>Saiba Mais</Button>
                </Left>
                <Right>

                </Right>
              </CenterContent>
            </MainContentHome>
      </Container>
    );
  }
  
  export default Home;
  
  const Container = styled.div`
    width: 100%;
    height: 100vh;
`;
 const MainContentHome= styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    padding: 5%;
    background-color:red;
    background: #ADA996;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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
  padding:5%
 `
 const Button = styled.button`
  background-color: #ff0002;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 50px;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }
`;

 const Right = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 10px;
 `
  const CenterContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 20px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  `
 