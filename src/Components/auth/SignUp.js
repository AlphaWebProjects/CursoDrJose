import styled from "styled-components"
// import logo from "../../img/background-auth.jpg"
import { useContext, useState } from "react"
import { toast } from "react-toastify"
import Button from "../../common/form/Button"
import Input from "../../common/form/Input"
import { Spinner } from "../../common/spinner/Spinner"
import UserContext from "../../context/UserContext"
import { useCustomForm } from "../../hooks/useCustomForms"
import api from "../../services/API"
import { ButtonWrapper } from "./ButtonWrapper"
import { InputWrapper } from "./InputWrapper"

export default function SignUp ({changeAuth}) {

    const [form, handleForm] = useCustomForm()
    const { setUserData } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false)

    function isValidEmail(email) {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        const str = phone.toString();

        const phoneRegex = /^\d{2}(?:9)?\d{8}$/;
        return phoneRegex.test(str);
    }

    function isUF(UF) {
        const uf = UF.toUpperCase();
        return estados.includes(uf);
    }

    const cpfValidator = (value) => {
        const cleanCPF = value.replace(/[^\d]/g, '');
    
        // Verificar se o CPF contém apenas números e tem comprimento igual a 11
        if (!/^\d{11}$/.test(cleanCPF)) {
            return false; // Retorna falso se o CPF contém caracteres não numéricos ou tem comprimento diferente de 11
        }
    
        // Validação do CPF
        let sum = 0;
        let remainder;
    
        for (let i = 1; i <= 9; i++) {
            sum += parseInt(cleanCPF.substring(i - 1, i)) * (11 - i);
        }
        remainder = (sum * 10) % 11;
    
        if ((remainder === 10) || (remainder === 11)) remainder = 0;
        if (remainder !== parseInt(cleanCPF.substring(9, 10))) {
            return false;
        }
    
        sum = 0;
        for (let i = 1; i <= 10; i++) {
            sum += parseInt(cleanCPF.substring(i - 1, i)) * (12 - i);
        }
        remainder = (sum * 10) % 11;
    
        if ((remainder === 10) || (remainder === 11)) remainder = 0;
        if (remainder !== parseInt(cleanCPF.substring(10, 11))) {
            return false;
        }
    
        return true;
    };
    

    const estados = [
        "AC",
        "AL",
        "AP",
        "AM",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MT",
        "MS",
        "MG",
        "PA",
        "PB",
        "PR",
        "PE",
        "PI",
        "RJ",
        "RN",
        "RS",
        "RO",
        "RR",
        "SC",
        "SP",
        "SE",
        "TO"
    ];

    async function SubmitForms(){
        setIsLoading(true)
        if (!form.email|| !form.password){
            setIsLoading(false)
            return toast.error("Preencha todos os Campos")
        }

        const body = {
            email: form.email,
            name: form.name,
            password: form.password,
            cpf: form.cpf,
            phone: form.phoneNumber,
            birthday: form.birthday,
            address: form.adress,
            neighborhood: form.neighborhood,
            cep: form.cep,
            city: form.city,
            uf: form.uf.toUpperCase(),
            role:'USER'
        }


        if(form.password !== form.passwordVerify){
            setIsLoading(false)
            return toast.error("As senhas não são iguais")
        }

        const verificaCPF = cpfValidator(form.cpf);

            if(verificaCPF === false){
                setIsLoading(false);
                return toast.error('Insira um CPF válido')
            }

            const verificaEmail = isValidEmail(form.email);
            if(verificaEmail === false){
                setIsLoading(false);
                return toast.error('Insira um email válido')
            }

            const verificaCelular = isValidPhone(form.phoneNumber)
            if(verificaCelular === false){
                setIsLoading(false);
                return toast.error('Insira um número de celular válido')
            }

            const verificaUF = isUF(form.uf)
            if(!verificaUF){
                setIsLoading(false)
                return toast.error('Insira um UF válido')
            }

        try {   

            if(form.cep === undefined || form.cep === ''){
                setIsLoading(false)
                return toast.error('Insira o seu CEP')
            }
            const verificaCEP = await api.VerificaCep(form.cep);


            const response = await api.CreateUser(body)
            if( response.status === 201){
                setUserData(response.data)
                toast.dark("Cadastro realizado com sucesso!")
                setIsLoading(false)
                changeAuth()
                return
            }

        } catch (error) {
            if(error.config.url === `https://viacep.com.br/ws/${form.cep}/json/`){
                setIsLoading(false)
                return toast.error("Insira um CEP válido")
            }
            console.log(error)
            setIsLoading(false)
            toast.error("Verifique os valores!")
            return
        }
    }

    return(
        <Container isLoading={isLoading}>

            {/* <img src={logo} alt="" onClick={() => setIsLoading(!isLoading)}/> */}

            <UserActionsContainer isLoading={isLoading}>
            <Column>
                <InputWrapper width={"100%"}>
                    <Input 
                        label="Email"     
                        type="email" 
                        name={"email"} 
                        value={form.email} 
                        onChange={handleForm}
                        width="80%"
                        disabled={isLoading}
                    />
                </InputWrapper>

                <InputWrapper width={"100%"}>
                    <Input 
                        label="Nome"     
                        type="text" 
                        name={"name"} 
                        value={form.name} 
                        onChange={handleForm}
                        width="80%"
                        disabled={isLoading}
                    />
                </InputWrapper>

                <InputWrapper width={"100%"}>
                    <Input 
                        label="Senha"     
                        type="password" 
                        name={"password"} 
                        value={form.password} 
                        onChange={handleForm}
                        width="80%"
                        disabled={isLoading}
                    />
                </InputWrapper>

                <InputWrapper width={"100%"}>
                    <Input 
                        label="Digite sua senha novamente"     
                        type="password" 
                        name={"passwordVerify"} 
                        value={form.passwordVerify} 
                        onChange={handleForm}
                        width="80%"
                        disabled={isLoading}
                    />
                </InputWrapper>

                <InputWrapper width={"100%"}>
                    <Input 
                        label="Qual seu CPF?"     
                        placeholder='Apenas números'    
                        type="text" 
                        name={"cpf"} 
                        value={form.cpf} 
                        onChange={handleForm}
                        width="80%"
                        disabled={isLoading}
                    />
                </InputWrapper>

                <InputWrapper width={"100%"}>
                    <Input 
                        label="Data de Nascimento"     
                        type="text" 
                        placeholder='Apenas números'    
                        name={"birthday"} 
                        value={form.birthday} 
                        onChange={handleForm}
                        width="80%"
                        disabled={isLoading}
                    />
                </InputWrapper>
            </Column>
            <Column> 
                <InputWrapper width={"100%"}>
                    <Input 
                        label="Celular com DDD"     
                        type="text" 
                        placeholder='Apenas números' 
                        name={"phoneNumber"} 
                        value={form.phoneNumber} 
                        onChange={handleForm}
                        width="80%"
                        disabled={isLoading}
                    />
                </InputWrapper>

                <InputWrapper width={"100%"}>
                    <Input 
                        label="Endereço"     
                        type="text" 
                        name={"adress"} 
                        value={form.adress} 
                        onChange={handleForm}
                        width="80%"
                        disabled={isLoading}
                    />
                </InputWrapper>

                <InputWrapper width={"100%"}>
                    <Input 
                        label="Bairro"     
                        type="text" 
                        name={"neighborhood"} 
                        value={form.neighborhood} 
                        onChange={handleForm}
                        width="80%"
                        disabled={isLoading}
                    />
                </InputWrapper>

                <InputWrapper width={"100%"}>
                    <Input 
                        label="Estado"
                        placeholder='Sigla (UF)'     
                        type="text" 
                        name={"uf"} 
                        value={form.uf} 
                        onChange={handleForm}
                        width="80%"
                        disabled={isLoading}

                    />
                </InputWrapper>

                <InputWrapper width={"100%"}>
                    <Input 
                        label="Cidade"     
                        type="text" 
                        name={"city"} 
                        value={form.city} 
                        onChange={handleForm}
                        width="80%"
                        disabled={isLoading}
                    />
                </InputWrapper>

                <InputWrapper width={"100%"}>
                    <Input 
                        label="CEP"     
                        type="text" 
                        name={"cep"} 
                        value={form.cep} 
                        onChange={handleForm}
                        width="80%"
                        disabled={isLoading}
                    />
                </InputWrapper>

                </Column>
                <ButtonWrapper width={"100%"}>
                    <Button onClick={() => SubmitForms()} width={"80%"} height={"55px"}>{"Criar"}</Button>
                    <ChangeAuthButton onClick={changeAuth}>Ja tenho um Cadastro</ChangeAuthButton>
                </ButtonWrapper>

            </UserActionsContainer>

            {isLoading ? (<Spinner/>):(<></>)}
            
        </Container>
    )
}

const Container = styled.div`
    width: 490px;
    height: 580px;
    background-color: #FFFFFF;
    box-shadow: 0 8px 50px 0 #00000038;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5vh;
    row-gap: 5vh;
    position: relative;
    margin-bottom: 30px;
    img {
        max-height: 150px;
        max-width: 60%;
        opacity: ${props => props.isLoading ? ("0.2"):("1")};
    }
    @media (max-width: 850px) {
        width: 100%;
    }
`

const UserActionsContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    row-gap: 3vh; 
    opacity: ${props => props.isLoading ? ("0.2"):("1")};
    pointer-events: ${props => props.isLoading ? ("none"):("initial")};
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%; // Cada coluna ocupará metade da largura
`

export const ChangeAuthButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1.5vh;
    user-select: none;
    cursor: pointer;
    text-decoration: underline;
    color: #707070;
`