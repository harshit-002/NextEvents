import { useRef } from 'react'
import Button from '../ui/button'
import classes from './event-search.module.css'

export default function EventSearch (props) {
  const selectedYearRef = useRef()
  const selectedMonthRef = useRef()
 
  function submitHandler (event) {
    event.preventDefault()
    const selectedmonth = selectedMonthRef.current.value
    const selectedyear = selectedYearRef.current.value

    props.onSearch(selectedmonth, selectedyear)
  }
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'>Year</label>
          <select id='year' ref={selectedYearRef}>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
      </div>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='month'>Month</label>
          <select id='month' ref={selectedMonthRef}>
            <option value='1'>January</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>June</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>Septemer</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>{' '}
          </select>
        </div>
      </div>

      <div>
        <Button>Find events</Button>
      </div>
    </form>
  )
}
