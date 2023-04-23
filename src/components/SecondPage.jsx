import React from 'react'

const SecondPage = () => {
  return (
    <div>
      <div className="box41">
        <div className="box4">
            <form action="" className='boxed'>
                <div className="fields1">
                    <div className="label1 mb-3">
                        <span>I want calls from Candidate within</span>
                    </div>
                    <div className="input-fields1">
                        <input type="radio" id="near" name="skills" value="Nearby areas(up to 10km)" required />
                        <label for="near" className='radio-label'>Nearby areas(up to 10km)</label>

                        <input type="radio" id="anywhere" name="skills" value="Anywhere in the city" required/>
                        <label for="anywhere" className='radio-label'>Anywhere in the city</label>
                    </div>
                    <div className="label2 mt-5">
                        <span>Is it a Work From Home Job?</span>
                    </div>
                    <div className="input-fields1">
                        <input type="radio" id="Yes" name="skills1" value="Yes" required />
                        <label className='yeslabel' for="Yes">Yes</label>

                        <input type="radio" id="No" name="skills1" value="No" required/>
                        <label className='yeslabel' for="No">No</label>
                    </div>
                    <br /><br />
                    <div class="input-fields">
                        <label for="exampleFormControlTextarea1" class="form-label">Describe The Job Role For The Staff</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" cols="50"></textarea>
                    </div>
                    <br /><br />
                    <div className="input-fields  mb-3"> 
                        <label for="floatingInput">Work TImings</label> 
                        <input type="text" class="form-control"  placeholder="" required/>
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default SecondPage
