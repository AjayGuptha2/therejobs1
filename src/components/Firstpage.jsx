import React from 'react'

const Firstpage = () => {
  return (
    <div>
      <div className="box41">
        <div className="box4">
            <form action="">
                <div className="fields1">
                    <div className="input-fields form-floating mb-3"> 
                        <input type="text" class="form-control" id="floatingInput" placeholder="I want to Hire A" required/>
                        <label for="floatingInput">I want to Hire A</label> 
                    </div>
                    <div className="input-fields form-floating mb-3"> 
                        <input type="text" class="form-control" id="floatingInput" placeholder="In the City" required/>
                        <label for="floatingInput">In the City</label> 
                    </div>
                    <div className="input-fields form-floating mb-3"> 
                        <input type="text" class="form-control" id="floatingInput" placeholder="For the Locality" required/>
                        <label for="floatingInput">For the Locality</label> 
                    </div>
                    <div className="label1">
                            <label htmlFor="">Salary I Want To Pay</label> 
                    </div>
                    <div className="inp">
                        
                        <div className="input-fields1 form-floating mb-3"> 
                            <input type="num" class="form-control" id="floatingInput" placeholder="10000" required/>
                            <label for="floatingInput">10000</label> 
                        </div>
                        <div className="to">
                            <span>to</span>
                        </div>
                        <div className="input-fields1 form-floating mb-3"> 
                            <input type="num" class="form-control" id="floatingInput" placeholder="10000" required/>
                            <label for="floatingInput">10000</label> 
                        </div>
                    </div>
                    <div className="label1">
                            <label htmlFor="">Number of Staff I need</label> 
                    </div>
                    <div className="input-fields1 form-floating mb-3"> 
                            <input type="num" class="form-control" id="floatingInput" placeholder="Number of Staff I need" required/>
                            <label for="floatingInput">10</label> 
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Firstpage
