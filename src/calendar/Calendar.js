import React from 'react'
import {connect} from 'react-redux'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import moment from 'moment'
import events from './events'
import {addEvent, removeEvent} from './actionCreators'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

const mapStateToProps = (state) => ({
    calendar:state.calendar,
    // range:state.calendar.range,
    // event: state.event.event
})

const mapDispatchToProps = (dispatch) => ({
    addEvent: (titel) => dispatch(addEvent(titel)),
    removeEvent: (titel) => dispatch(removeEvent(titel))
})


const Calendar = (props) => (
<div style={{height: 500}}>
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
export default connect(mapStateToProps, mapDispatchToProps)(Calendar)


