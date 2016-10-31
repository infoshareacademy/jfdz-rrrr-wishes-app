import React from 'react'
import {connect} from 'react-redux'
import GoogleLogin from 'react-google-login'

import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import events from './events'
import moment from 'moment'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);


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
        <button className="logOut" onClick={() => props.logOut()}> Log out</button>
        
        <GoogleLogin className="logIn"
            clientId="630341204564-at7usoc2ueh94d7q9bucfrlktv3nvqpc.apps.googleusercontent.com"
            buttonText="Log in"
            onSuccess={props.loginSuccess}
            onFailure={props.loginFailure}
        />
    
    <BigCalendar
        selectable
        events={events}
        timeslots={3}
        defaultView='week'
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date(2015, 3, 12)}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}`
        )}
        />
        
    </div>  
)

export default connect(mapStateToProps, mapDispatchToProps)(Login)