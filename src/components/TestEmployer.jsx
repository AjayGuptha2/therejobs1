import React, { useEffect } from 'react'

import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

 
const TestEmployer = () => {
  const [data,setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/categories')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])
    

    return (
        
        <div className="container-flex">
            <div className="row my-3">
              <div className="box-item col-lg-10">
                {
                    data.map((contact) => {
                        return <ul>
                        <li>
                         <div className="box-item">
                            <div className="card-img">
                              <div class="content">
                                <div class="content-overlay"></div>
                                <img class="content-image" src={contact.img} alt="" />
                                <div class="content-details fadeIn-bottom fadeIn-right">
                                  <p>{contact.name}</p>
                                </div>

                              </div>
                              <div className="badge bg-success vacance"><p>Vacancy: {contact.vacancy}</p></div>
                              <Link to={`/employer/${contact.id}`} id='check-btn' className='btn'>See More <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                          </div>
                        </li>  
                    </ul>
                    })
                }

              </div>      
                
            </div>
        </div>
    )

}

export default TestEmployer;
