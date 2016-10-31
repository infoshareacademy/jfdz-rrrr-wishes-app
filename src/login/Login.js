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

import { Line } from 'react-chartjs'

const lineData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
        {
            label: "US Dolars",
            fillColor: "rgba(38,186,38,0.2)",
            strokeColor: "rgba(38,186,38,1)",
            pointColor: "rgba(38,186,38,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(38,186,38,1)",
            data: [40, 70, 80, 60, 30, 50, 20]
        },
        {
            label: "Euro",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [85, 65, 75, 95, 25, 25, 35]
        },
        {
            label: "Polish ZLOTY",
            fillColor: "rgba(191,63,63,0.2)",
            strokeColor: "rgba(191,63,63,1)",
            pointColor: "rgba(191,63,63,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(191,63,63,1)",
            data: [45, 50, 70, 80, 55, 75, 40]
        }
    ]
}
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
        timeslots={8}
        defaultView='week'
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date(2015, 3, 12)}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}`
        )}
        />
        <Line data={lineData} width="600" height="300" />
    </div>  
)

export default connect(mapStateToProps, mapDispatchToProps)(Login)