import { format, parseISO } from 'date-fns';
import { useState } from 'react';
import styled from 'styled-components';
import Payments from '../Components/AdminComponents/PaymentComponents/Payments';

function Admin() {

  const paymentsArr = [
    {
        id: 1,
        status: false,
        value: 135.99,
        date: '',
        name: 'Pedro Arthur Dias Ribeiro'
    },
    {
        id: 2,
        status: true,
        value: 135.99,
        date: '14/03/2024',
        name: 'Pedro Leôncio Pereira'
    },
    {
        id: 3,
        status: false,
        value: 135.99,
        date: '',
        name: 'Marcus Vinícius de Castro Rodrigues'
    },
    {
        id: 4,
        status: true,
        value: 135.99,
        date: '12/03/2024',
        name: 'Álvaro Caires Ribeiro'
    },
    {
      id: 5,
      status: true,
      value: 135.99,
      date: '22/03/2024',
      name: 'Pablo Siervuli'
  },
  {
    id: 6,
    status: true,
    value: 135.99,
    date: '25/03/2024',
    name: 'Bruno Abdalla'
},
{
  id: 7,
  status: true,
  value: 135.99,
  date: '25/03/2024',
  name: 'Antônio Gabriel Leôcio Pereira'
},
{
  id: 8,
  status: true,
  value: 135.99,
  date: '08/03/2024',
  name: 'Marcelo Alves de Castro'
},
]

  const [paymentsArrState, setPaymentsArrState] = useState([])
  const [inputValue, setInputValue] = useState([])
  const [closeBool, setCloseBool] = useState(false);
  

  function setPaymentsByStatus(status){

    setCloseBool(!closeBool)

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

  function setPaymentsByDate(date){

    setCloseBool(!closeBool)

    if(!date){
      return
    }

    const dataFormatada = format(parseISO(date), 'dd/MM/yyyy');

    const filtered = paymentsArr.filter(p => p.date === dataFormatada)

    if(filtered.length === 0){
      return
    }

    setPaymentsArrState(filtered)

  }

  function inputVerification(value) {

    setCloseBool(!closeBool)

    const arr = paymentsArr;
    const filteredArr = arr.filter(p =>
      p.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(value.toLowerCase()),
    );
    setPaymentsArrState(filteredArr);
    setInputValue(value);
  }

    return (
      
      <Container>
              <MainContentUs>
                <CenterContent>
                  <>
                    <Options>

                    <p>Pagamentos</p>

                    <Select onClick={(e) => setPaymentsByStatus(e.target.value)} onChange={(e) => setPaymentsByStatus(e.target.value)} placeholder='Status'>

                      <option value=''>- Status -</option>
                      <option value='all'>Todos</option>
                      <option value={true}>Pagos</option>
                      <option value={false}>Pendentes</option>

                    </Select>

                    <Datepicker onChange={(e) => setPaymentsByDate(e.target.value)} onClick={(e) => setPaymentsByDate(e.target.value)} type='date'/>

                    <Input 
                    placeholder='Busque por nome...' 
                    onChange={(e) => inputVerification(e.target.value)}
                    value={inputValue}
                    />

                    </Options>

                    <Payments paymentsArr={paymentsArrState} closeBool={closeBool}/>  

                  </>     
                </CenterContent>
              </MainContentUs>
      </Container>
    );
  }
  
  export default Admin;
  
  const Container = styled.div`
  margin-top: 120px;
    width: auto;
    height: auto;
    p{
      font-size: 3vh;
    }
`;

const MainContentUs = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 5%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background: #ADA996;
    background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); 
    background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);
`
const CenterContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding:2% 4%;

`

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

const Input = styled.input`
margin-left: 2vh;
width: 25vh;
height: 2.8vh;
border-radius: 10px;
`