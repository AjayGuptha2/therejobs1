import React from 'react'

const EmployerForm = () => {
  return (
    <div>
      <div className="box41">
      <div className="box4">
      <h3>Registration</h3>

      <form action="">
        <div className="details personal">
          <span className='title'><i class="fa-solid fa-user"></i> Personal Details</span>

          <div className="fields">
            <div className="input-fields form-floating mb-3"> 
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter First Name" required/>
              <label for="floatingInput">First Name</label> 
            </div>
            <div className="input-fields form-floating mb-3"> 
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Last Name" required />
              <label for="floatingInput">Last Name</label> 
            </div>
            <div className="input-fields form-floating mb-3"> 
              <input type="email" class="form-control" id="floatingInput" placeholder="Email" />
              <label for="floatingInput">Email address</label> 
            </div>
            <div className="input-fields form-floating mb-3"> 
              <input type="tel" class="form-control" id="floatingInput" placeholder="Phone number" />
              <label for="floatingInput">Phone Number</label> 
            </div>
            
            <div className="input-fields form-floating mb-3"> 
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Address" />
              <label for="floatingInput">City</label> 
            </div>
            <div className="input-fields form-floating mb-3"> 
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Address" />
              <label for="floatingInput">State or Province</label> 
            </div>
            
            <div className="input-fields form-floating mb-3"> 
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Address" />
              <label for="floatingInput">Country</label> 
            </div>
          </div>
        </div>


        <div className="details ID">
          <span className='title'><i class="fa-solid fa-suitcase"></i> Job Information: </span>

          <div className="fields">
            <div className="input-fields form-floating mb-3"> 
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter First Name" required/>
              <label for="floatingInput">Job Title</label> 
            </div>
            <div className="input-fields form-floating mb-3"> 
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Last Name" multiple required />
              <label for="floatingInput">Job Requirements</label> 
            </div>
            <div className="input-fields form-floating mb-3"> 
              <input type="email" class="form-control" id="floatingInput" multiple placeholder="Email" />
              <label for="floatingInput">Job Responsibilities</label> 
            </div>
          </div>
        </div>
        <div className="details company">
          <span className='title'><i class="fa-solid fa-building"></i> Company Information: </span>

          <div className="fields">
            <div className="input-fields form-floating mb-3"> 
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter First Name" required/>
              <label for="floatingInput">Company Name</label> 
            </div>
            <div class="input-fields mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">About Company</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" cols="50"></textarea>
            </div>
          </div>
        <button className='btn save-btn'>Submit <i class="fa-solid fa-paper-plane"></i></button>
        </div>
      </form>
      </div>
      </div>
    </div>
  )
}

export default EmployerForm
