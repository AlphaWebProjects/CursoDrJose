import styled from 'styled-components';
import doctor2 from '../img/doctor2.jpg';
function SobreCurso() {
    return (
      
      <Container>
        <MainContentCurso>
            <CenterContent>
                    aaaaa
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
        border-radius: 20px;
        backdrop-filter: blur(15px);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color:rgba(0,0,0,0.15);
        padding:5%
        `