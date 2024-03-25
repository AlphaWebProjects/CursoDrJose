import styled from 'styled-components';
import Header from '../Components/Header';
import Home from '../Components/Home';
import SobreNos from '../Components/SobreNos';
import SobreCurso from '../Components/SobreCurso';
import Pagamento from './Pagamento';

export default function LandingPage() {
    return (
        <Container>
            <Header />
            <Home/>
            <SobreNos/>
            <SobreCurso/>
            <Pagamento/>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: -21px;
    box-sizing: border-box;
`