import React, { useState } from 'react';
import styled from 'styled-components';
import ShowMoreContainer from './ShowMoreContainer';

export default function Payment({payment, closeBool}){

    const [showMoreBool, setShowMoreBool] = useState(true);

    return(
        <MainContainer>
            <SubContainer>

                <Number>
                    <p>{payment.id}</p>
                </Number>

                <Name>
                    <p>{payment.name}</p>
                </Name>

                <Email>
                    <p>email-email0011@gmail.com</p>
                </Email>

                <Value>
                    <p>R$ {payment.value}</p>
                </Value>

                <Status status={payment.status}>
                    <p>{payment.status ? 'pago' : 'pendente'}</p>
                </Status>

                <Date>
                    <p>{payment.date === '' ? '---' : payment.date}</p>
                </Date>

                <ShowMore>
                    <p onClick={() => setShowMoreBool(!showMoreBool)}>
                        {showMoreBool ? '-' : '+'}
                    </p>
                </ShowMore>

            </SubContainer>
                
            <ShowMoreContainer 
            showMoreBool={showMoreBool} 
            setShowMoreBool={setShowMoreBool} 
            closeBool={closeBool}
            />
         
        </MainContainer>
    )

}

const MainContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
p{
    font-size: 1.7vh !important;
}
`

const SubContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
box-shadow: rgba(50, 50, 93, 0.10) 0px 50px 100px -20px inset;
border-radius: 15px;
width: 100%;
border-bottom: 1px solid black;
margin-top: 2vh;
`
const Number = styled.div`
display: flex;
padding: 1% 0;
width: 12vh;
justify-content: center;
align-items: center;
`

const Name = styled.div`
display: flex;
padding: 1% 0;
width: 40vh;
justify-content: center;
align-items: center;
border-left: 1px solid black;
background-color: none;
`

const Email = styled.div`
display: flex;
padding: 1% 0;
width: 40vh;
justify-content: center;
align-items: center;
border-left: 1px solid black;
background-color: none;
`

const Status = styled.div`
display: flex;
padding: 1% 0;
width: 12vh;
justify-content: center;
align-items: center;
color: ${props => props.status ? 'green' : 'red'};
`

const Value = styled.div`
display: flex;
padding: 1% 0;
width: 15vh;
justify-content: center;
align-items: center;
border-left: 1px solid black;
border-right: 1px solid black;
`

const Date = styled.div`
display: flex;
padding: 1% 0;
width: 20vh;
justify-content: center;
align-items: center;
border-left: 1px solid black;
`

const ShowMore = styled.div`
display: flex;
align-items: center;
padding: 1% 0;
justify-content: center;
width: 10vh;
border-left: 1px solid black;
p{
    font-size: 3vh !important;
    cursor: pointer;
}
`

