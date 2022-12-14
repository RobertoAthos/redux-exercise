import jwt from 'jwt-decode'


const initialState = {
    token: localStorage.getItem('token'),
    name: null,
    email: null,
    _id: null
}

const authReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'SIGN_UP':
                const user = jwt(action.token)
                return {
                    ...initialState,
                    token: action.token,
                    name: user.name,
                    email: user.email,
                    _id: user._id
                }
                default:
                    return !state
        }
}

export default authReducer