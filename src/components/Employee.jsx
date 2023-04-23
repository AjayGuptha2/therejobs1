import React from 'react'

import { useState } from 'react'
const Employee = () => {
    const [showSidebar, setShowSidebar] = useState(false)

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  return (
    <div>
      <div className="box">
        <div className='container3'>
            <h1 className='head'>For Employee</h1>
            <div className="row3">
            <div className="filter-icon" onClick={handleShowSidebar}>
                <i class="fa-solid fa-filter"></i>
            </div>  
                <div className={`row3-1  ${showSidebar && 'active'}`}>
                <i class="fa-solid fa-xmark" id='into' onClick={handleShowSidebar}></i>
                <h3>Filters</h3>
                    <ul>
                        <li>
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" className='check' />
                                Work From Home
                            </label>
                        </li>
                        <li>
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" className='check' />
                                Part-time
                            </label>
                        </li>
                        <li>
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" className='check' />
                                Dailybasis
                            </label>
                        </li>
                        <li>
                            <label htmlFor="">
                                Salary
                                <input type="range" name="" id="" /> 
                            </label>
                        </li>
                    </ul>
                </div>      
            </div>
                <div class="bar">
                        <i class="fas fa-bars" ></i>
                </div>
            <div className="row4">
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Employee
