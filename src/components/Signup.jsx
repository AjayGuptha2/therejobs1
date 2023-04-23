import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const Signup = () => {

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        /* if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/[a-z0-9]+@[a-z]+.[a-z]{2,3}/.test(email)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        } */
        return isproceed;
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { id, name, password, email, phone };
        if (IsValidate()) {
        //console.log(regobj);
        fetch("http://localhost:5000/user", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then((res) => {
            toast.success('Registered successfully.')
            navigate('/login');
        }).catch((err) => {
            toast.error('Failed :' + err.message);
        });
    }
}
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 border border-info p-3 rounded signup-form">
                <form onSubmit={handlesubmit} action="">
                    <h1>Create Your Account</h1>
                    <input value={id} onChange={e => idchange(e.target.value)} type="text" className='form-control' placeholder='Username' />
                    <input value={name} onChange={e => namechange(e.target.value)} type="text" className='form-control' placeholder='Enter your Name' />
                    <input value={email} onChange={e => emailchange(e.target.value)}  type="email" className='form-control' placeholder='Enter Your Email' />
                    <input value={password} onChange={e => passwordchange(e.target.value)}  type="password" className='form-control' placeholder='Enter Your Password' />
                    <input value={phone} onChange={e => phonechange(e.target.value)} type='tel' className='form-control' placeholder='Enter your Number'/>
                    <button className='btn btn-success' type='submit'>Create</button>
                </form>
            </div>
            <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Signup
