import Link from "next/link"
import classes from './button.module.css'
export default function Button(props){
if(props.link){
return (<div>
    <Link className={classes.btn} href={props.link}> 
    {props.children}</Link>
</div>)
}
else{
    return (<button className={classes.btn} onClick={props.onClick}>
        {props.children}
    </button>)
}
}