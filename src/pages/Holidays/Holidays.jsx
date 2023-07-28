// @flow
import React, { useEffect, useState } from 'react';
import {Accordion,Button,Card,Table,Spinner} from 'react-bootstrap'
import Ending from '../../components/Ending'
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import '../page-styles.scss';
import './Holidays.scss';
import Top from '../Top';
import firebase from '../../utils/firebase';

const Notices = () => {
  const [holidays,setHolidays] = useState(null);
  useEffect(() => {
      getHolidays();
  },[])

  const getHolidays = () => {
    console.log("reached getHolidays function");
    firebase.database().ref('Holidays').once('value',(snapshot) => {
      var holidaylist = [];
      snapshot.forEach((data) => {holidaylist.push(data.val());});
      setHolidays(holidaylist);
      /* console.log("holidays are :",holidaylist); */
    });
  }
  

  return (
    <div className="noticebg">
      <Top title="Holidays" />
    <div className="page-styles Notices">
      <div style={{fontWeight:'bolder',color:'black',fontSize:'3.4rem',textAlign:'center',margin:'1rem'}}>Holidays at the Preschool</div>
      {
        !holidays?
        <center style={{marginTop:'5%'}}>
        <Spinner animation="border" role="status" />
        </center>:
      <Table striped bordered hover style={{border:'3px solid gray'}}>
        <thead>
          <tr style={{backgroundColor:'black',color:'white'}}>
            <th>Serial No.</th>
            <th>Date</th>
            <th>Reason for Holiday</th>
          </tr>
        </thead>
        <tbody>
          {
            holidays && holidays.length > 0 &&
            holidays.map((data,i) => {
            return (
              <tr>
              <td style={{borderRight:'1px solid gray'}}>{i+1}</td>
              <td style={{borderRight:'1px solid gray'}}>{data.date}</td>
              <td>{data.reason}</td>
              </tr>
            );})
          }
        </tbody>
      </Table>
      }
    </div>
    <Ending />
    </div>
  );
};

export default Notices;
