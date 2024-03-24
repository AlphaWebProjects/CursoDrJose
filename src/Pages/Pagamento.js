import styled from 'styled-components';

function Pagamento() {
    return (
        <Container>
        <MainContentPayment>
          <CenterContent>
        
          </CenterContent>
        </MainContentPayment>
    </Container>
    );
  }
  
  export default Pagamento;
  
  const Container = styled.div`
    width: 100%;
    height: 90%;
    margin-top: -2px;
`;

const MainContentPayment = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 5%;
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