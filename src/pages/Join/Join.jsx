// @flow
import React, { useState } from 'react';
import {Tabs,Tab} from 'react-bootstrap'
import  { Redirect,withRouter } from 'react-router-dom'
import './Join.scss';
import Auth from './components/Auth';
import firebase from '../../utils/firebase';
import LoadingOverlay from 'react-loading-overlay';

const Join = ({history}) => {
  const [authError,setAuthError] = useState(null);
  const [showLoader,setShowLoader] = useState(false);

  const setOverlay = (val) => {
    setShowLoader(val);
  }//func

  const signup = (name,aadhar,std,email,password) => {
    console.log(email,password);
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email,password);
    promise
    .then(signup => {
        console.log("User data :",signup.user.email);
        console.log("User data :",signup.user.uid);
        localStorage.setItem('loggedin',true);
        localStorage.setItem('user',signup.user.email);
        history.push('/')
        window.location.reload();
       /*  console.log("storage data :",localStorage.getItem('user')); */
    })
    .catch(e =>{
        var err = e.message;
       /*  this.setState({err : err}); */
        console.log("error data is :",err);
        setAuthError(err);
        setInterval(() => setAuthError(null),7000);
    });
}

const signin = (email,password) => {
    console.log(email,password);
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email,password);

    promise
    .then(login =>{
        var err = "Successfully logged in, "+login.user.email;
        console.log("User data :",login.user.email);
        console.log("User data :",login.user.uid);
        localStorage.setItem('loggedin',true);
        localStorage.setItem('user',login.user.email);
        history.push('/')
        window.location.reload();
       /*  console.log("storage data :",localStorage.getItem('user')); */
    })
    
    .catch(err =>{
        var error = err.message;
        console.log(error);
        setAuthError(error);
        setInterval(() => setAuthError(null),7000);
        /* this.setState({err : error}); */
    });
}//func
 
const google = () => {
    console.log("i am in google ");
    var provider = new firebase.auth.GoogleAuthProvider();
    var promise = firebase.auth().signInWithPopup(provider);
    /* firebase.auth().signInWithRedirect(provider);
    var promise = firebase.auth().getRedirectResult(); */

    promise
      .then(result => {
          var user = result.user;
          console.log("result object is :",result);
          console.log("user object is :",user);
          localStorage.setItem('loggedin',true);
          localStorage.setItem('user',result.user.email);
          console.log("storage data :",localStorage.getItem('user'));
          history.push('/')
          window.location.reload();         
      })
      .catch(e=>{
          var err = e.message;
          var code = e.code;
          console.log("Error is:"+err+". Error code is :"+code);
          setAuthError("Error is:"+err+". Error code is :"+code);
          setInterval(() => setAuthError(null),7000);
      });
     
}//func

  return (
    <section className="Join">
       <div className="join-flex-container">
       <LoadingOverlay
          active={showLoader}
          spinner
          text='Authenticating...'
        >
        <div className="join-container"> 
        <Tabs defaultActiveKey="signin" id="uncontrolled-tab-example" style={{backgroundColor:'#82CFD5',borderRadius:'3%',border:'1px solid black',boxShadow:'6px 10px darkblue'}}>
          <Tab eventKey="signin"  title={<div className="tab-title">Sign In</div>}>
            <Auth setOverlay={setOverlay} type="signin" google={google} signin={signin} authError={authError} />
          </Tab>
          <Tab eventKey="signup" title={<div className="tab-title">Sign Up</div>}>
            <Auth setOverlay={setOverlay} type="signup" google={google} signup={signup} authError={authError} />
          </Tab>
        </Tabs>
        </div>
       </LoadingOverlay>
       </div>
    </section>
  );
};

export default withRouter(Join);
