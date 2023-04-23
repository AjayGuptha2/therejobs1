import React from 'react'
import profile from './logo.jpg'
const Dashboard = () => {
  const wishList = [
    {
        title: "Sadhana Design works",
        img1:"/images/4.png",
        workplace: "Sadhana Infinity International School",
        address: "Hyderabad, Telangana",
        salary: "22,000 - 25000 a month",
        jobtype: "Regular/Permanent",
        requirements: "if any",
        application: "Apply now",
    },
    {
      title: "Sadhana Design works",
      img1:"/images/16.png",
      workplace: "Sadhana Infinity International School",
      address: "Hyderabad, Telangana",
      salary: "22,000 - 25000 a month",
      jobtype: "Regular/Permanent",
      requirements: "if any",
      application: "Apply now",
  },
  

  ];
  return (
    <div className='b1'>
      <div className="dash-box">
        <div className="dash-glass">
           <div className="basic-profile">
              <img src={profile} alt="" />
              <div className="basic-titles">
                <h5>Shanigarapu Sai Raja</h5>
                <p>sairaja2002</p>
              </div>
           </div>
           <div className="basic-info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit sed aspernatur quod beatae distinctio quas necessitatibus doloribus cum commodi tempore quia numquam, pariatur delectus cupiditate placeat aut labore esse.</p>
           
           </div>
           <div className="edit-profile">
              <button className='btn1'><i class="fa-solid fa-pen-to-square"></i> Edit Profile</button>
           </div>
           <div className="basic-details">
              <div className="location1">
                <i class="fa-solid fa-envelope"></i>  
                mail@gmail.com
              </div>
              <div className="location2">
                <i class="fa-solid fa-phone"></i>
                8555080811
              </div>
              <div className="location">
                <i class="fa-solid fa-location-dot"></i>
                India
              </div>
              <div className="abilities">
                <i class="fa-solid fa-key"></i>
                <div className="able">
                  <p>Chef</p>
                </div>
                <div className="able">
                  <p>Server</p>
                </div>
              </div>
           </div>
        </div>
        <div className="dash-glass2">
           {
            wishList.map((wishcard,index) => {
              return <ul>
                <li>
                  <div className="wish-box">
                    <div className="com-img">
                      <img src={wishcard.img1} alt="" />
                    </div>
                    <div className="com-desc">
                      <a href=""><h4>{wishcard.title}</h4></a>
                      <a href=""> <h5>{wishcard.workplace}</h5></a>
                      <h5>{wishcard.address}</h5>
                      <div className="wish-pack">
                        <div className="alert alert-primary wish-sal"><i class="fa-solid fa-indian-rupee-sign"></i>{wishcard.salary}</div>
                        <div className="alert alert-primary wish-sal"><i class="fa-solid fa-suitcase"></i>{wishcard.jobtype}</div>
                      </div>
                      <a href=""><p className='appk'><i class="fa-solid fa-arrow-up-right-from-square"></i> {wishcard.application}</p></a>
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

export default Dashboard
