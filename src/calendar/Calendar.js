import React from 'react'
import {connect} from 'react-redux'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import moment from 'moment'
import events from './events'


BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

const mapStateToProps = (state) => ({
    calendar:state.calendar
})

const Calendar = (props) => (
<div>
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
</div>
)
export default connect(mapStateToProps)(Calendar)


