import EventContent from '@/components/event-detail/event-content'
import EventLogistics from '@/components/event-detail/event-logistics'
import EventSummary from '@/components/event-detail/event-summary'
import { getEventById } from '@/dummy-data'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

export default function ParticularEvent (props) {
  const router = useRouter()
  const eventid = router.query.eventid
  const eventdata = getEventById(eventid)

  if (!eventdata) {
    return   <ErrorAlert>No such events found</ErrorAlert>
  }

  return (
    <Fragment>
      <EventSummary title={eventdata.title}></EventSummary>

      <EventLogistics
        date={eventdata.date}
        address={eventdata.location}
        image={eventdata.image}
      ></EventLogistics>
      <EventContent>
        <p>{eventdata.description}</p>
      </EventContent>
    </Fragment>
  )
}
