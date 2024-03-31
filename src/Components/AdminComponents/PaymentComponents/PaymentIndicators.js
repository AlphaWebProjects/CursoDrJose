import React from 'react';
import styled from 'styled-components';

export default function PaymentIndicator(){

    return(
        <>
         <Container>

            <Number>
                Número
            </Number>

            <Name>
                Nome
            </Name>
            
            <Email>
                Email
            </Email>

            <Value>
                Valor 
            </Value>

            <Status>
                Status
            </Status>

            <Date>
                Pago em
            </Date>
            
            <ShowMore>
                Mais info
            </ShowMore>

         </Container>
        </>
    )

}

const Container = styled.div`
display: flex;
flex-direction: row;
box-shadow: rgba(50, 50, 93, 0.10) 0px 50px 100px -20px inset;
border-radius: 15px;
width: 100%;
border-bottom: 1px solid black;
margin-bottom: -2vh;
`
const Number = styled.div`
display: flex;
padding: 1% 0;
width: 12vh;
justify-content: center;
align-items: center;
border: none;
background-color: none;
`

const Name = styled.div`
display: flex;
padding: 1% 0;
width: 40vh;
justify-content: center;
align-items: center;
border: none;
background-color: none;
`

const Email = styled.div`
display: flex;
padding: 1% 0;
width: 40vh;
justify-content: center;
align-items: center;
border-left: none;
background-color: none;
`

const Status = styled.div`
display: flex;
padding: 1% 0;
width: 12vh;
justify-content: center;
align-items: center;
border: none;
background-color: none;
`

const Value = styled.div`
display: flex;
padding: 1% 0;
width: 15vh;
justify-content: center;
align-items: center;
border: none;
background-color: none;
`

const Date = styled.div`
display: flex;
padding: 1% 0;
width: 20vh;
justify-content: center;
align-items: center;
`

const ShowMore = styled.div`
display: flex;
padding: 1% 0;
width: 10vh;
justify-content: center;
align-items: center;
`