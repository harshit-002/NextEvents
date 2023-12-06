import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { useRouter } from "next/router";
import { getAllEvents } from "@/dummy-data"

export default function Events(){
    const router=useRouter();
    const allevents=getAllEvents();
    function searchHandler(month,year){
        const fullpath=`/events/${month}/${year}`;
        router.push(fullpath);
    }
    
return (<div>
    <EventSearch onSearch={searchHandler}></EventSearch>
    <EventList items={allevents}/>
</div>)
}