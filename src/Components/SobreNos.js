import styled from 'styled-components';

function SobreNos() {
    return (
      
      <Container>
              <MainContentUs>
                <CenterContent>
                    aaaaa
                </CenterContent>
              </MainContentUs>
      </Container>
    );
  }
  
  export default SobreNos;
  
  const Container = styled.div`
    width: 100%;
    height: 90%;
`;

const MainContentUs = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 5%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background: #ADA996;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
const CenterContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding:5%
`