import React from 'react'
import { useEffect,useState } from 'react'
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const [username, usernameupdate] = useState('');
  const [password, passwordupdate] = useState('');

  const usenavigate=useNavigate();

    useEffect(()=>{
sessionStorage.clear();
    },[]);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
        ///implentation
        // console.log('proceed');
        fetch("http://localhost:5000/user/" + username).then((res) => {
            return res.json();
        }).then((resp) => {
            //console.log(resp)
            if (Object.keys(resp).length === 0) {
                toast.error('Please Enter valid username');
            } else {
                if (resp.password === password) {
                    toast.success('Success');
                    sessionStorage.setItem('username',username);
                    sessionStorage.setItem('userrole',resp.role);
                    usenavigate('/register')
                }else{
                    toast.error('Please Enter valid credentials');
                }
            }
        }).catch((err) => {
            toast.error('Login Failed due to :' + err.message);
        });
    }
}

  const validate = () => {
    let result = true;
    if(username === '' || username === null){
      result=false;
      toast.warning('Please Enter username');
    }
    if(password === '' || password === null){
      result=false;
      toast.warning('Please Enter password');
    }
    return result;
  }
  return (
    <div>
      <div className="box">   
        <div className="container2"> 
            <div className="con2 ">
            <div className="row1">
                <h1>Login to Your Account</h1>
                <p className='tag'>Login using social networks</p>
                <div className='social-apps'>
                  <a href=""><i class="fa-brands fa-facebook" id='face'></i></a>
                  <a href=""><i class="fa-brands fa-google-plus" id='google'></i></a>
                  <a href=""><i class="fa-brands fa-linkedin" id='linked'></i></a>
                </div>
                <p className='tag'>OR</p>
                <form action="" onSubmit={ProceedLogin} >
                  <input type="text" value={username} onChange={e=>usernameupdate(e.target.value)} placeholder='Email or Phone Number' id='Email' className='login-input' />
                  <input type="password" value={password} onChange={e=>passwordupdate(e.target.value)} placeholder='Password' id='password' className='login-input'/>
                  <a href="">Forgot Password?</a>
                  <br /><br />
                  <button className='signin-btn' type='submit'>Sign in</button>
                </form>
            </div>
            <div className="row2">
                <h1>New Here?</h1>
                <p className='tag'>Sign up and discover a great amount of new opportunities!</p>
                <button className='signup-btn' ><Link to='/signup'>Sign up</Link></button>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
