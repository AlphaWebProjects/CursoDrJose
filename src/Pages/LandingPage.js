import styled from 'styled-components';
import Depoimentos from '../Components/Depoimentos';
import Equipe from '../Components/Equipe';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Home from '../Components/Home';
import Pagamento from '../Components/Pagamento';
import SobreCurso from '../Components/SobreCurso';
import SobreNos from '../Components/SobreNos';

export default function LandingPage() {
    return (
        <Container>
            <Header />
            <Home/>
            <SobreNos/>
            <SobreCurso/>
            <Equipe/>
            <Depoimentos/>
            <Pagamento/>
            <Footer/>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: -21px;
    box-sizing: border-box;
`