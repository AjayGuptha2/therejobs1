import React from 'react'

import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div>
      <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 col-lg-6">
            <div class="serviceBox">
                <div class="service-icon">
                    <span><i class="fa-solid fa-suitcase"></i></span>
                </div>
                <h3 class="title">Employer</h3>
                <p class="description">Login if you're an Employer</p>
                <Link id='employer-btn' to="/employerform">Login <i class="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
        
        <div class="col-md-4 col-sm-12 ">
            <div class="serviceBox blue ">
                <div class="service-icon">
                    <span><i class="fa-solid fa-users"></i></span>
                </div>
                <h3 class="title">Employee</h3>
                <p class="description">Login if you're an Employee.</p>
                <Link id='employer-btn' to="/employeeform">Login <i class="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Register
