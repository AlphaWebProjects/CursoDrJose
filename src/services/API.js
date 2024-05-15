import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACK_END_URL || 'https://api-drjose-a332c114b508.herokuapp.com';

function CreateSession(body) {
    return axios.post(`${BASE_URL}/auth/sign-in`, body);
}
function CreateUser(body) {
    return axios.post(`${BASE_URL}/auth/sign-up`, body);
}
function LogoutSession(token) {

    return axios.delete(`${BASE_URL}/auth/logout`, {headers: { Authorization: `Bearer ${token}`}});
}
function CreatePayment({ token, cupom }) {
    return axios.post(
        `${BASE_URL}/payment?cupom=${cupom || "none"}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
}

function VerificaCep(cep){
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}

const api = {
    CreateSession,
    LogoutSession,
    CreateUser,
    CreatePayment,
    VerificaCep
};

export default api;
