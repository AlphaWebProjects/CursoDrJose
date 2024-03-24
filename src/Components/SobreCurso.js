import styled from 'styled-components';
import doctor2 from '../img/doctor2.jpg';
function SobreCurso() {

    const handleHeaderClick = (index) => {
        const totalHeight = document.body.scrollHeight;
        const scrollToHeight = (totalHeight * 0.94); // Rolar para baixo 30% da altura total da página
        window.scrollTo({ top: scrollToHeight, behavior: 'smooth' });
    };
    return (
      <Container>
        <MainContentCurso>
            <CenterContent>
                    <h1>Sobre o curso</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                       when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing
                         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                      </p>
                      <Button onClick={() => handleHeaderClick()}>Faça sua Inscrição</Button>
            </CenterContent>
        </MainContentCurso>
      </Container>
    );
  }
  
  export default SobreCurso;
  
  const Container = styled.div`
    width: 100%;
    height: 90%;
    background-image: url(${doctor2});
    background-size: cover;
    background-position: center;
`;

 const MainContentCurso = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        padding: 5%;
        
 `
 const CenterContent = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 20px;
        backdrop-filter: blur(15px);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color:rgba(0,0,0,0.15);
        padding:5%;
        h1{
          color:#158A7A;
          font-size: 40px;
        }
         p{
          width:80%;
          font-size: 20px;
         }
`
const Button = styled.button`
background-color: #158A7A;
color: #fff;
border: none;
font-size: 20px;
border-radius: 10px;
padding: 10px 20px;
cursor: pointer;
margin-top: 50px;
transition: transform 0.3s, box-shadow 0.3s,border-radius 0.3s;
&:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
}
`