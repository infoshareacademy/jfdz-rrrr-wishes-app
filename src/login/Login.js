import React from 'react'
import {connect} from 'react-redux'
import GoogleLogin from 'react-google-login'

const mapStateToProps = (state) => ({
    user: state.login.userData
})

const mapDispatchToProps = (dispatch) => ({
    loginSuccess: (userData) => dispatch({type: 'LOGIN_SUCCESS', data: userData.profileObj}),
    loginFailure: () => dispatch({type: 'LOGIN_FAILURE'}),
    logOut: () => dispatch({type: 'LOG_OUT'})
})

const Login = (props) => (
    <div>
        <h1>Login</h1>
        <button onClick={() => props.logOut()}> Log out</button>
        
        <GoogleLogin
            clientId="630341204564-at7usoc2ueh94d7q9bucfrlktv3nvqpc.apps.googleusercontent.com"
            buttonText="Log in"
            onSuccess={props.loginSuccess}
            onFailure={props.loginFailure}
        />
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Login)