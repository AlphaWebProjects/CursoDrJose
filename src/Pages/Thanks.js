import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Thanks() {
    const [cupom, setCupom] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const paymentData = location.state?.paymentData;
    
    const base64ToBlob = (base64, contentType = '', sliceSize = 512) => {
        const byteCharacters = atob(base64);
        const byteArrays = [];
    
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          const slice = byteCharacters.slice(offset, offset + sliceSize);
          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }
    
        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };

    const downloadAutomatically = (base64pdfTest) => {
        const blob = base64ToBlob(base64pdfTest, 'application/pdf');
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'boleto_simva.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const downloadManually = (base64pdfTest) => {
        const blob = base64ToBlob(base64pdfTest, 'application/pdf');
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'boleto_simva.pdf';
        a.textContent = 'Download PDF';
        document.body.appendChild(a);

        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    useEffect(() => {
        downloadAutomatically(paymentData.pdfBoleto)
    }, [])

    //DADOS DUMMY EM TODO O PROJETO

    return (
        <Container>
            <TopBackground/>
            <CourseContainer>
                <h1>{"Agradecemos a confiança"}</h1>
                <p>{"Seu boleto foi gerado e deve começará o download automaticamente."}</p>
                <p>{"Ao realizar o pagamento entre em contato com (11) 98765-4321."}</p>
                <DownloadButton onClick={() => downloadManually(paymentData.pdfBoleto)}>{"Caso contrario, clique aqui para baixar"}</DownloadButton>
                <HomeButton onClick={() => navigate("/")}>{"Voltar para Home"}</HomeButton>
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
    user-select: none;
    text-decoration: underline;
    font-size: 20px !important;
    color: #4646465D !important;
    cursor: pointer;
`;

const HomeButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #1EC4AE;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    transition: background-color 0.3s;
    &:hover {
        background-color: #22D8C0;
    }
`;
