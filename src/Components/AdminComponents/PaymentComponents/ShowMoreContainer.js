import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function ShowMoreContainer({showMoreBool, setShowMoreBool, closeBool}){

    useEffect(() => {
        
        setShowMoreBool(false)
        
      }, [closeBool, setShowMoreBool]);

    return(
        
        <>
            <Container showMoreBool={showMoreBool}>
                
                <CpfIndicator>
                    <p>CPF</p>
                </CpfIndicator>

                <PhoneIndicator>
                    <p>Telefone</p>
                </PhoneIndicator>

                <BirthdayIndicator>
                    <p>Nascido em</p>
                </BirthdayIndicator>

            </Container>

            <Container showMoreBool={showMoreBool}>

                <Cpf>
                    <p>000.000.000-00</p>
                </Cpf>

                <Phone>
                    <p>{'(35)99999-9999'}</p>
                </Phone>

                <Birthday>
                    <p>07/07/1997</p>
                </Birthday>

            </Container>
        </>
        
    )

}

const Container = styled.div`
display: ${props => props.showMoreBool ? 'flex' : 'none'};
flex-direction: row;
box-shadow: rgba(50, 50, 93, 0.10) 0px 50px 100px -20px inset;
border-radius: 15px;
width: auto;
border-bottom: 1px solid black;
padding: 0;
`

const CpfIndicator = styled.div`
display: flex;
padding: 1% 0;
width: 20vh;
justify-content: center;
align-items: center;
`

const PhoneIndicator = styled.div`
display: flex;
padding: 1% 0;
width: 20vh;
justify-content: center;
align-items: center;
`

const BirthdayIndicator = styled.div`
display: flex;
padding: 1% 0;
width: 20vh;
justify-content: center;
align-items: center;
`
const Cpf = styled.div`
display: flex;
padding: 1% 0;
width: 20vh;
justify-content: center;
align-items: center;
`

const Phone = styled.div`
display: flex;
padding: 1% 0;
width: 20vh;
justify-content: center;
align-items: center;
border-left: 1px solid black;
border-right: 1px solid black;
`

const Birthday = styled.div`
display: flex;
padding: 1% 0;
width: 20vh;
justify-content: center;
align-items: center;
`
