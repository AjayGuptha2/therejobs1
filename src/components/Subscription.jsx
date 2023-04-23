import React from 'react'
import profile from './logo.jpg'
const Subscription = () => {
  return (
    <div>
      <div className="premium-pack">
        <div className="premium">
          <img src={profile} alt="" />
          <h2>Premium</h2>
          <h6>Get started with ThereJobs subscription that works for you.</h6>
        </div>
        <div className="pricing">
          <h3>Pricing</h3>
        </div>
        <div className="pricing-cards">
          <div className="month">
            <h4>For 1 month</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet et aliquam saepe expedita inventore eligendi pariatur recusandae nemo omnis dolore est quibusdam, nostrum voluptatum alias, voluptates temporibus voluptate, dolorum itaque.</p>
            <div className="price-tag">
              <h4><i class="fa-solid fa-indian-rupee-sign"></i> 3000 <span>/mo</span></h4>
              <p>Prices are marked in INR</p>
            </div>
            <button className='btn' id='subs'>Subscribe</button>
          </div>
          <div className="month">
            <h4>For 3 months</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet et aliquam saepe expedita inventore eligendi pariatur recusandae nemo omnis dolore est quibusdam, nostrum voluptatum alias, voluptates temporibus voluptate, dolorum itaque.</p>
            <div className="price-tag">
              <h4><i class="fa-solid fa-indian-rupee-sign"></i> 8000 <span>/3mo</span></h4>
              <p>Prices are marked in INR</p>
            </div>
            <button className='btn' id='subs'>Subscribe</button>
          </div>
          <div className="for6">
          <div className="month6">
            <h4>For 6 months</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet et aliquam saepe expedita inventore eligendi pariatur recusandae nemo omnis dolore est quibusdam, nostrum voluptatum alias, voluptates temporibus voluptate, dolorum itaque.</p>
              <div className="price-tag">
                <h4><i class="fa-solid fa-indian-rupee-sign"></i> 15000 <span>/6mo</span></h4>
                <p>Prices are marked in INR</p>
              </div>
              <button className='btn' id='subs'>Subscribe</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription
