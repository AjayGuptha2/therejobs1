import React , {useEffect} from 'react'

import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Employer = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [heart, setheart] = useState(true)
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  const handleHeart = () =>{
    setheart(!heart)
  }
  const tasksList = [
    {
        title: "Sadhana Design works",
        workplace: "Sadhana Infinity International School",
        address: "Hyderabad, Telangana",
        salary: "22,000 - 25000 a month",
        jobtype: "Regular/Permanent",
        requirements: "if any",
        application: "Apply now",
    },

  ];
  const {id} = useParams()
  const [inputdata,setinputData] = useState({
    sub1:'',
    name: '',
    sub2:'',
    sub3:'',
    sub4:'',
    sub5:'',
    sub6:'',
    sub7:'',
    id:id
  })
  
    useEffect(() => {
        axios.get('http://localhost:4000/categories/'+id)
        .then(res => setinputData(res.data))
        .catch(err => console.log(err))
    }, [])
  
  return (
    <div>
      <div className="box">
        <div className='container3'>
            <div className="heads">  
                
                <div><h1 className='head'>{inputdata.name}</h1></div>
                <div className='text-start back'><i class="fa-solid fa-arrow-left-long"></i></div>
           </div>
            
            <div className="container3-1">
            <div className="filter-icon" onClick={handleShowSidebar}>
                    <button class="btn filter-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-filter"></i></button>
                </div>
            <div className="row3">
                
                <div className={`row3-1`}>
                    <i class="fa-solid fa-xmark" id='into' onClick={handleShowSidebar}></i>
                    <h3><i class="fa-solid fa-filter"></i> Filters</h3>
                    <ul class="list-group list-group-flush">
                    <li ><label htmlFor="">
                        <input type="checkbox" name="" id="" className='check' /> 
                        {inputdata.sub1}
                    </label></li>
                    <li><label htmlFor="">                      
                        <input type="checkbox" name="" id="" className='check' /> 
                        {inputdata.sub2}
                    </label></li>
                    <li><label htmlFor="">
                        <input type="checkbox" name="" id="" className='check' /> 
                        {inputdata.sub3}
                    </label></li>
                    <li><label htmlFor="">
                        <input type="checkbox" name="" id="" className='check' /> 
                        {inputdata.sub4}
                    </label></li>
                    <li><label htmlFor="">
                        <input type="checkbox" name="" id="" className='check' /> 
                        {inputdata.sub5}
                    </label></li>
                    </ul>
                    
                </div>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Filters</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body ">
                        <ul class="list-group list-group-flush">
                            <li ><label htmlFor="">
                                <input type="checkbox" name="" id="" className='check' /> 
                                {inputdata.sub1}
                            </label></li>
                            <li><label htmlFor="">                      
                                <input type="checkbox" name="" id="" className='check' /> 
                                {inputdata.sub2}
                            </label></li>
                            <li><label htmlFor="">
                                <input type="checkbox" name="" id="" className='check' /> 
                                {inputdata.sub3}
                            </label></li>
                            <li><label htmlFor="">
                                <input type="checkbox" name="" id="" className='check' /> 
                                {inputdata.sub4}
                            </label></li>
                            <li><label htmlFor="">
                                <input type="checkbox" name="" id="" className='check' /> 
                                {inputdata.sub5}
                            </label></li>
                        </ul>
                    </div>
                </div>  
               
                
            </div>
                
            <div className="row4">
                {
                    tasksList.map((card,index) => {
                        return <ul class="list-group">
                <li >
                   {/* <div className="main1">  */}
                    <div className="row32-1" key={index}>
                        <div className="more-icons">
                        {heart
                        ?
                        <div className="more">
                            <i class="fa-regular fa-heart heart" onClick={handleHeart}></i> 
                        </div> 
                        :
                        <div className="more">
                            <i class="fa-solid fa-heart" onClick={handleHeart} style={{color: "#fb3358", fontSize: "1.5rem", cursor: "pointer"}}></i> 
                        </div> }
                        <i class="fa-solid fa-ban ban"></i>
                        </div>
                        
                        <a href=""><h2>{card.title}</h2></a>
                        <a href=""> <h3>{card.workplace}</h3></a>
                        <h3>{card.address}</h3>
                        <div className="hisreq">
                            <div className="alert alert-secondary sal"><i class="fa-solid fa-indian-rupee-sign"></i>{card.salary}</div>
                            <div className="alert alert-secondary sal"><i class="fa-solid fa-suitcase"></i>{card.jobtype}</div>
                        </div>

                        <p>Requirements:</p>
                        <div className="alert alert-secondary sal">{card.requirements}</div>
                        <a href=""><p className='appk'><i class="fa-solid fa-arrow-up-right-from-square"></i> {card.application}</p></a>
                    </div>
                  {/* </div> */}
                </li> 
                </ul>
                    })
                }
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Employer
