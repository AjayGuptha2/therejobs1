import React from 'react'

const ThirdPage = () => {
  return (
    <div>
      <div className="box41">
        <div className="box4">
            <form action="" className='boxed'>
                <div className="fields1">
                    <div className="input-fields form-floating mb-3"> 
                        <input type="text" class="form-control" id="floatingInput Cname" placeholder="Name Of My Company" required/>
                        <label for="floatingInput">Name Of My Company</label> 
                    </div>
                    <div className="input-fields form-floating mb-3"> 
                        <input type="text" class="form-control" id="floatingInput RName" placeholder="Recruiter Name" required/>
                        <label for="floatingInput">Recruiter Name</label> 
                    </div>
                    <div className="input-fields form-floating mb-3"> 
                        <input type="email" class="form-control" id="floatingInput email" placeholder="Email Id" required/>
                        <label for="floatingInput">Email Id</label> 
                    </div>
                    <div className="input-fields form-floating mb-3"> 
                        <input type="tel" class="form-control" id="floatingInput phone" placeholder="Phone Number" required/>
                        <label for="floatingInput">Phone Number</label> 
                    </div>
                    <div class="input-fields mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">About Company</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" cols="30"></textarea>
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default ThirdPage
