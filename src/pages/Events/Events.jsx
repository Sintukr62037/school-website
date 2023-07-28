import React from 'react';
import { useEffect,useState } from 'react';
import EventCard from './components/EventCard';
import Ending from '../../components/Ending'
import '../page-styles.scss';
import './Events.scss';
import Top from '../Top';
import firebase from '../../utils/firebase';
import {Spinner} from 'react-bootstrap'

const Events = () => {
  const [events, setEvents] = useState(null);
  const [eventsAreDownloaded,setEventsAreDownloaded] = useState(false);

  useEffect(() => {
     getEvents();
  }, []);

  const getEvents = async () => {
     await firebase.database().ref('Events').once('value',(snapshot) => {
      var eventdata = [];
      snapshot.forEach((data) => {
         var res = [];
         data.forEach((value) => {res.push(value.val())});
         eventdata.push({[data.key]:res});
      });
      setEvents(eventdata);
      /* console.log("Events are :",eventdata); */
    });
  }//func

  return (
    <div className="eventbg">
      <Top title="Events" />
    <div className="page-styles Events">
      {
        events && events.length > 0 ?
        events.map((type,i) => {
          for(let key in type){
            var str = key.slice(0,key.length-5) + " " + key.slice(key.length-5) + " Events";
          return (
             <div key={key+i}>
              <center>
                <div className="heading">{str}</div>
              </center>
              <hr style={{border:'1px solid navy'}} />
              <EventCard eventdata={type[key]} />
             </div>
          )}//for
        }):
        <center style={{marginTop:'5%'}}>
        <Spinner animation="border" role="status" />
        </center>
      }
    </div>
    <Ending />
    </div>
  );
};

export default Events;
