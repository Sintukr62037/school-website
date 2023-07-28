// @flow
import React, { useEffect, useState } from 'react';
import {Accordion,Button,Card} from 'react-bootstrap'
import Ending from '../../components/Ending'
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import '../page-styles.scss';
import './Notices.scss';
import Top from '../Top';

const Notices = () => {
  return (
    <div className="noticebg">
      <Top title="Notices" />
    <div className="page-styles Notices">
      <div style={{fontWeight:'bolder',color:'black',fontSize:'3.4rem',textAlign:'center',margin:'1rem'}}>Latest Notices and Information</div>
      <Accordion >
          <Card bg="primary" border="warning" text="light" style={{boxShadow:'7px 12px gray'}}>
            <Card.Header>
              <Accordion.Toggle style={{color:"white",fontWeight:'bolder',fontSize:'1.5rem',textDecoration:"none"}} as={Button} variant="link" eventKey="0">
                Notice Title
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body style={{border:'3px solid white',backgroundColor:'darkblue'}}>The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <br/>
          <Card bg="primary" border="warning" text="light" style={{boxShadow:'5px 10px #888888'}} >
            <Card.Header>
              <Accordion.Toggle style={{color:"white",fontWeight:'bolder',fontSize:'1.5rem',textDecoration:"none"}} as={Button} variant="link" eventKey="1">
                Notice Title
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body style={{border:'3px solid white',backgroundColor:'darkblue'}}>The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <br/>
          <Card bg="primary" border="warning" text="light" style={{boxShadow:'5px 10px #888888'}}>
            <Card.Header>
              <Accordion.Toggle style={{color:"white",fontWeight:'bolder',fontSize:'1.5rem',textDecoration:"none"}} as={Button} variant="link" eventKey="2">
                Notice Title
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body style={{border:'3px solid white',backgroundColor:'darkblue'}}>The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <br/>
          <Card bg="primary" border="warning" text="light" style={{boxShadow:'5px 10px #888888'}}>
            <Card.Header>
              <Accordion.Toggle style={{color:"white",fontWeight:'bolder',fontSize:'1.5rem',textDecoration:"none"}} as={Button} variant="link" eventKey="3">
                Notice Title
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body style={{border:'3px solid white',backgroundColor:'darkblue'}}>The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <br/>
          <Card bg="primary" border="warning" text="light" style={{boxShadow:'5px 10px #888888'}}>
            <Card.Header>
              <Accordion.Toggle style={{color:"white",fontWeight:'bolder',fontSize:'1.5rem',textDecoration:"none"}} as={Button} variant="link" eventKey="4">
                Notice Title
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body style={{border:'3px solid white',backgroundColor:'darkblue'}}>The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.</Card.Body>
            </Accordion.Collapse>
          </Card>
       </Accordion>
    </div>
    <Ending />
    </div>
  );
};

export default Notices;
