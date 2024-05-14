import styled from 'styled-components';
import { useState } from 'react';

export default function Thanks() {
    const [cupom, setCupom] = useState("");

    function handleCupom({ target: { value } }) {
        setCupom(value);
    }

    return (
        <Container>
            <TopBackground/>
            <CourseContainer>
                <h1>{"Agradecemos a confiança"}</h1>
                <p>{"Seu boleto foi gerado e deve começará o download automaticamente"}</p>
                <DownloadButton>{"Caso contrario, clique aqui para baixar"}</DownloadButton>
            </CourseContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f4f4f4;
    position: relative;
`;

const TopBackground = styled.div`
    width: 100%;
    height: 30vh;
    background-color: #158a7a;
`;

const CourseContainer = styled.div`
    width: 60%;
    position: absolute;
    top: 40vh;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fefefe;
    border-radius: 10px;
    border: 2px solid #F1F1F1;
    padding: 10px 40px;
    padding-bottom: 42px;
    > h1 {
        font-size: 50px;
    }
    > p {
        font-size: 26px;
        color: #464646;
    }
`;
const DownloadButton = styled.p`
    text-decoration: underline;
    font-size: 20px !important;
    color: #4646465D !important;
    cursor: pointer;
`