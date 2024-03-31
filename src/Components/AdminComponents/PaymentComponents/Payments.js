import React from 'react';
import styled from 'styled-components';
import Payment from './Payment';
import PaymentIndicator from './PaymentIndicators';

export default function Payments({paymentsArr, closeBool}){

    return(
        <>
         <Container>
            <PaymentIndicator/>
            {paymentsArr.map(p => (
                <Payment 
                payment={p} 
                paymentsArr={paymentsArr}
                closeBool={closeBool}
                />
            ))}
         </Container>
        </>
    )

}

const Container = styled.div`
display: flex;
flex-direction: column;
border-radius: 15px !important;
width: 145vh;
margin-bottom: 5vh;
`