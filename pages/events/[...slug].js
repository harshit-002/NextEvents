import { Fragment } from 'react'
import ResultsTitle from '@/components/event-detail/results-title'
import EventList from '@/components/events/event-list'
import { getFilteredEvents } from '@/dummy-data'
import { useRouter } from 'next/router'
import Button from '@/components/ui/button'
import ErrorAlert from '@/components/ui/error-alert'

export default function filteredevent () {
  const router = useRouter()
  const filteredDate = router.query.slug

  if (!filteredDate) {
    return (
      <Fragment>
          <ErrorAlert>Loading</ErrorAlert>
      </Fragment>
    )
  }
  const numYear = +filteredDate[1]
  const numMonth = +filteredDate[0]

  if (isNaN(numYear) || isNaN(numYear) || numMonth < 1 || numMonth > 12) {
    return (
      <Fragment>
        <ErrorAlert>Invalid Filter</ErrorAlert>
        <div className="center">
          <Button link='/events'>Show all events</Button>
        </div>
      </Fragment>
    )
  }

  const filteredevents = getFilteredEvents({ year: numYear, month: numMonth })
  if (!filteredevents || filteredevents == 0) {
    return (
      <Fragment>
        <ErrorAlert>No events for chosen filter</ErrorAlert>
        <div className="center">
          <Button link='/events'>Show all events</Button>
        </div>
      </Fragment>
    )
  }
  const date = new Date(numYear, numMonth - 1)
  return (
    <Fragment>
      <ResultsTitle date={date}></ResultsTitle>
      <EventList items={filteredevents}></EventList>
    </Fragment>
  )
}
