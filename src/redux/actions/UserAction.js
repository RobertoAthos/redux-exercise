import axios from "axios";

const url = "https://jwt-api-authentication.herokuapp.com"

export const userRegister =  user => {
    return(dispatch)=>{
        axios.post(`${url}/user/register`, user)
            .then(token=>{
                localStorage.setItem('token', token.data)

                dispatch({
                    type: 'SIGN_UP',
                    token: token.data
                })
            })
            .catch(error=>{
                console.log(error.response)
            })
    }
}
