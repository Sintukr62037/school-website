import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.scss';
import {Card,Button,CardDeck} from 'react-bootstrap'
import eventImage from 'assets/images/event.jpg'

const EventCard = ({eventdata}) => {
  return (
    <div >
      <CardDeck className="event-card">
      {
        eventdata && eventdata.length > 0 && 
        eventdata.map((data,i) => {
          console.log(data);
          return (
            <Card classname="card" key={data.id} style={{maxWidth:'20rem',border:'1px solid gray'}}>
              <Card.Img style={{border:'2px solid gray'}} variant="top" src={eventImage} />
              <Card.Footer>
                <b>Event Title : </b>{data.title}
              </Card.Footer>
              <Card.Body>
              <Card.Title><b>Event Date : </b>{data.date}</Card.Title>
              <Card.Title><b>Event Handler : </b>{data.eventHandler}</Card.Title>
                <Card.Text>
                  <b>Event Description : </b><br/>
                 {data.description}
                </Card.Text>
              </Card.Body>    
          </Card>
          );
        }) 
      }
      </CardDeck>
    </div>
  );
};

export default EventCard;
