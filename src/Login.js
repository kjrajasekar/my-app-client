import React, { useState } from 'react';
import './design.css';
import axios from 'axios';

function Login() {
const [fields, setFields] =useState({})
const [errors, setErrors] =useState({})

 const  handleChange=(e) =>{
    // let fields = this.state.fields;
    fields[e.target.name] = e.target.value;    
    setFields(fields)
  }

  const submituserRegistrationForm=(e)=> {
    e.preventDefault();
    if (validateForm()) {
      fetchData(fields)
    }
    // else{
    //   navigate('/login', {replace:true})
    // }
  }

 const  fetchData = async (data) => {
    await axios.post('http://localhost:4455/user/signin', data)
      .then((response) => {
        // alert(response.data.message);
        alert("Login success");
        // navigate('/home', {replace:true})
   
      }, (error) => {
        alert(error.response.data.message);
        window.location.reload(true);
      });
  }

  const validateForm=()=> {

    let errors = {};
    let formIsValid = true;

    //email_Id
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-Id.";
    }

    if (typeof fields["email"] !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-Id.";
      }
    }

    //Password and conform password
    if ((!fields["password"]) && (!fields["conform_pass"])) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
      errors["conform_pass"] = "*Please enter your conform password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter strong password(must be 8 characters including 1 uppercase, 1 special character and alphanumeric characters).";
        errors["conform_pass"] = "*Please enter strong password(must be 8 characters including 1 uppercase, 1 special character and alphanumeric characters).";
      }
    }
    setErrors(errors)    
    return formIsValid;
  }

    return (
      <div id="main-registration-container" >
        <div id="register" style={{marginTop:"90px"}}>
          <h3>Login </h3>
          <form method="post" name="userRegistrationForm" onSubmit={submituserRegistrationForm} encType="multpart" >
            <label>Email Id</label>
            <input type="text" name="email" 
            // value={fields.email }
            onChange={handleChange} />
            <div className="errorMsg">{errors.email}</div>

            <label>Password</label>
            <input type="password" name="password" 
            // value={fields.password} 
            onChange={handleChange} />
            <div className="errorMsg">{errors.password}</div>

            <input type="submit" className="button"  value="Login" />
          </form>
          <div className='reg'>
        
          </div>
        </div>
      </div>
    );
  }



export default Login;