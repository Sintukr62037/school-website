import React,{useState,useEffect} from 'react';
import {Form,Button,Dropdown,DropdownButton} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../Join.scss';
import { FcGoogle } from 'react-icons/fc';

const Auth = ({type,google,signup,signin,authError,setOverlay}) =>{
  const [name, setName] = useState(null);
  const [aadhar, setAadhar] = useState(null);
  const [std, setStd] = useState('Select Standard');
  const [email, setEmail] = useState(null);
  const [password,setPassword] = useState(null);
  const [password2,setPassword2] = useState(null);
  const [error,setError] = useState(null);

  if(authError){
      setOverlay(false);
  }

  const handleSubmit = () => {
      setOverlay(true);
      if(email && validateEmail(email) && password && password === password2 && password.length > 5){
        if(type === 'signin'){
            setError(null);
            signin(email,password);
        }//if
        else{
            if(name && validateName(name) && aadhar && aadhar.length === 16 && std.length < 8){
            setError(null);
            signup(name,aadhar,std,email,password);
            }//if
            else{
                setOverlay(false);
                if(!name || !aadhar || !std)
                setError("Enter Name,Aadhar and Select Standard.")
                else if(std.length > 7)
                setError('Select Standard.')
                else if(!validateName(name))
                setError('Invalid Name.');
                else if(aadhar.length !== 16)
                setError("Aadhar Number should have 16 digits only.")
            }//else
        }//else
      }//if
      else{
            setOverlay(false);
            if(!email || !password || !password2)
            setError("Enter Email and Password.")
            else if(!validateEmail(email))
            setError('Invalid Email.')
            else if(password !== password2)
            setError("Passwords do not Match.")
            else if(password.length < 6)
            setError('Password should be at least 6 characters long.');
      }//else
  }//func

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}//func

const validateName = (name) => {
        var regex = /^[a-zA-Z ]{2,30}$/;
        return regex.test(name);
}
    return (
      <div>
          {(error || authError)?<div className="error">*&nbsp;{error}{authError}</div>:null}
         <Form style={{display:"flex",flexDirection:'column'}}>  
             <br/>
             { 
             type === 'signup'?
             <div>
             <Form.Group controlId="formBasicEmail">
                <Form.Control required type="name" placeholder="Enter Student's Name" value={name} 
                onChange={(e) => setName(e.target.value)} autocomplete="chrome-off"/>
             </Form.Group> 
            <Form.Group controlId="formBasicEmail">
                <Form.Control required minLength={16} maxLength={16} type="number" placeholder="Enter Student's Aadhar Number" value={aadhar} onChange={(e) => setAadhar(e.target.value)} autocomplete="chrome-off"/>
            </Form.Group> 
            <Form.Group controlId="formBasicEmail">
                <DropdownButton 
                required
                variant="tertiary"
                menuAlign={{ lg: 'left' }}
                title="Left-aligned but right aligned when large screen"
                id="dropdown-menu-align-responsive-1" 
                style={{width:'10rem',color:'#6B757D',backgroundColor:'white',border:'1px solid #A6ABB0',borderRadius:'3%'}} 
                title={`${std}   `}>
                <Dropdown.Item active onSelect={() => setStd('Select Standard')}>Select Standard</Dropdown.Item>
                <Dropdown.Item onSelect={() => setStd('LKG')} >LKG</Dropdown.Item>
                <Dropdown.Item onSelect={() => setStd('UKG')}>UKG</Dropdown.Item>
                <Dropdown.Item onSelect={() => setStd('Nursery')}>Nursery</Dropdown.Item>
                </DropdownButton>
            </Form.Group>
            </div>
            :null
            }
            <Form.Group controlId="formBasicEmail">
                <Form.Control required type="email" placeholder="Enter Email" value={email} 
                onChange={(e) => setEmail(e.target.value)} autocomplete="chrome-off"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control required="true" type="password" placeholder="Enter Password" value={password} 
                onChange={(e) => setPassword(e.target.value)} autocomplete="new-password"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control required type="password" placeholder="Confirm Password" value={password2} 
                onChange={(e) => setPassword2(e.target.value)} autocomplete="new-password"/>
            </Form.Group>

            <Button onClick={() => handleSubmit()} style={{marginTop:'1rem',width:'70%',alignSelf:'center',fontWeight:'bolder',fontSize:'1.08rem'}} variant="primary" >
                Submit
            </Button>
           
            <Button className="google" onClick={() => google()} style={{marginTop:'1.1rem',width:'70%',alignSelf:'center',fontWeight:'600',fontSize:'1.08rem',background:'none',color:'darkblue'}} variant="primary" type="button">
            <FcGoogle size={24} />&nbsp;&nbsp;Sign In with Google 
            </Button>
        </Form>
    </div>
    );
};

export default Auth;