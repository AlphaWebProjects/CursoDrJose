import styled from 'styled-components';
import { useContext, useState } from 'react';
import api from '../services/API';
import { toast } from 'react-toastify';
import UserContext from '../context/UserContext';

export default function Payment() {
    //const base64pdfTest = "JVBERi0xLjQKJeLjz9MKMyAwIG9iago8PC9UeXBlL1hPYmplY3QvU3VidHlwZS9JbWFnZS9XaWR0aCA1NzgvSGVpZ2h0IDM4NC9GaWx0ZXIvRENURGVjb2RlL0NvbG9yU3BhY2U";
    const [cupom, setCupom] = useState("");
    const { userData } = useContext(UserContext);

    function handleCupom({ target: { value } }) {
        setCupom(value);
    }

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
        a.download = 'file.pdf';
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
        a.download = 'file.pdf';
        a.textContent = 'Download PDF';
        document.body.appendChild(a);
        // A linha abaixo deve ser comentada para deixar o link visível para o usuário clicar manualmente
        // a.click();
        // a.remove();
        // URL.revokeObjectURL(url);
    };

    async function handlePayment(){
        


        try {        
            const response = await api.CreatePayment({token: userData.token, cupom});
            if( response.status === 201){
                console.log(response.data);
                downloadAutomatically(response.data.pdfBoleto)
                toast.dark("Boleto gerado com sucesso!");
                return;
            }
        } catch (error) {
            console.log(error);
            toast.error("Verifique os valores !!");
            return;
        }
 
    }

    return (
        <Container>
            <TopBackground/>
            <CourseContainer>
                <h1>{"Curso do Dr José"}</h1>
                <p>{"Uberlândia - 21/05 - 19h"}</p>
                <SubDataContainer>
                    <div>
                        <h3>{"Pagamento"}</h3>
                        <p>{"Boleto"}</p>
                    </div>

                    <div>
                        <h3>{"Valor"}</h3>
                        <p>{"R$ 1.900,00"}</p>
                    </div>

                    <div>
                        <h3>{"Cupom"}</h3>
                        <StyledInput 
                            type="text" 
                            placeholder="Caso possua, insira o cupom" 
                            value={cupom} 
                            onChange={handleCupom}
                        />
                    </div>

                </SubDataContainer>
                 
                <ButtonWrapper>
                    <StyledButton onClick={handlePayment}>{"QUERO GARANTIR MINHA VAGA"}</StyledButton>
                </ButtonWrapper>
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
    width: 80%;
    position: absolute;
    top: 45vh;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fefefe;
    border-radius: 10px;
    border: 2px solid #F1F1F1;
    padding: 10px 40px;
    padding-bottom: 42px;
    > p {
        font-size: 20px;
    }
`;

const SubDataContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    column-gap: 120px;
    margin-top: 40px;
`;

const StyledInput = styled.input`
    margin-top: -10px;
    width: 180px;
    height: 25px;
    padding: 5px 10px;
    border: 1px solid #D3D3D38C;
    border-radius: 5px;
    background-color: #F1F1F162;
    color: #141414;
    &::placeholder {
        color: #d3d3d3;
    }
    &:hover, &:focus, &:hover & {
        outline: none;
        border-color: #05060f;
    }

    &:hover .label, &:focus {
    color: #05060fc2;
    }
`;

const StyledButton = styled.button`
    background-color: #1EC4AE;
    color: #fff;
    width: 340px;
    height: 65px;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #22D8C0;
    }
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
`;
