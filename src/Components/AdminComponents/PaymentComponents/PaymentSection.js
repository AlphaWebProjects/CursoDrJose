import { format, parseISO } from 'date-fns';
import { useState } from 'react';
import styled from 'styled-components';
import Payments from './Payments';

export async function PaymentSection(){

    const [paymentsArrState, setPaymentsArrState] = useState([])

    const paymentsArr = [
        {
            id: 1,
            status: false,
            value: 135.99,
            date: ''
        },
        {
            id: 2,
            status: true,
            value: 135.99,
            date: '14/05/2024'
        },
        {
            id: 3,
            status: false,
            value: 135.99,
            date: ''
        },
        {
            id: 4,
            status: true,
            value: 135.99,
            date: '12/05/2024'
        },
        {
          id: 5,
          status: true,
          value: 135.99,
          date: '22/05/2024'
      },
      {
        id: 6,
        status: true,
        value: 135.99,
        date: '25/05/2024'
    },
    {
      id: 7,
      status: true,
      value: 135.99,
      date: '25/05/2024'
    },
    {
      id: 8,
      status: true,
      value: 135.99,
      date: '08/05/2024'
    },
    ]

  function setByStatus(status){

    console.log(status)

    if(status === 'all'){
      setPaymentsArrState(paymentsArr);
      return
    }

    if(status === 'true'){
      setPaymentsArrState(paymentsArr.filter(p => p.status === true))
      return
    }

    if(status === 'false'){
      setPaymentsArrState(paymentsArr.filter(p => p.status === false))
      return
    }

  }

  function setByDate(date){

    const dataFormatada = format(parseISO(date), 'dd/MM/yyyy');

    console.log(dataFormatada, date)

    const filtered = paymentsArr.filter(p => p.date === dataFormatada)

    if(filtered.length === 0){
      return
    }

    setPaymentsArrState(filtered)

  }
  

    return(
        <>
            <Options>

            <p>Pagamentos</p>

                <Select onChange={(e) => setByStatus(e.target.value)} placeholder='Status'>

                <option value=''>- Status -</option>
                <option value='all'>Todos</option>
                <option value={true}>Pagos</option>
                <option value={false}>Pendentes</option>

                </Select>

                <Datepicker onChange={(e) => setByDate(e.target.value)} type='date'/>

            </Options>

            <Payments paymentsArr={paymentsArrState}/>
        </>
    )


}

const Options = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const Select = styled.select`
margin-left: 2vh;
width: 10vh;
height: 2.8vh;
border-radius: 10px;
`

const Datepicker = styled.input`
margin-left: 2vh;
width: 13vh;
height: 2.8vh;
border-radius: 10px;
`