import classes from './main-header.module.css'
import Link from 'next/link'
export default function MainHeader () {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
            <Link href='/events'>Browse all events</Link>
      </nav>
    </header>
  )
}
