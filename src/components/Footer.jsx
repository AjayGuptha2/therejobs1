import React from 'react'
import logo from './logo.jpg'
const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="widget-section">
            <div className="row footer-row">
                <div className="my-3 my-col1 col-lg-4 col-xl-4 col-md-12">
                    <div className="about-widget">
                        <img src={logo} alt="" />
                        <p class="phone-num"><span>Call us </span><br /><a href="tel:8555080811">8555080811</a></p>
                        <p className='address'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus ad dolorum? Ipsam consectetur provident ab commodi quasi placeat ea sunt, id odio perferendis natus, at saepe eaque voluptas nobis!</p>
                    </div>
                </div>
                <div className="ml-auto col-xl-5 col-md-12 col-lg-6">
                    <div className="row">
                        <div className="my-5 col-lg-6 col-md-6 col-sm-12">
                            <div className="links-widget for-empl">
                                <h4 className='widget-title'>For Employees</h4>
                                <div class="widget-content">
                                    <ul class="list">
                                        <li><a href="" target="_blank">Apply for Jobs</a></li>
                                        <li><a href="" target="_blank">Resource Library</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="my-5 col-lg-6 col-md-6 col-sm-12">
                            <div className="links-widget">
                                <h4 className='widget-title'>Helpful Resources</h4>
                                <div class="widget-content">
                                    <ul class="list">
                                        <li><a href="" target="_blank">About Us</a></li>
                                        <li><a href="" target="_blank">Privacy Policy</a></li>
                                        <li><a href="" target="_blank">Terms and Conditions</a></li>
                                        <li><a href="" target="_blank">Complaints</a></li>
                                        <li><a href="" target="_blank">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
            <hr style={{color:'#CAC0B3'}} />
                <div class="outer-box">
                    <div class="copyright-text">© 2023 ThereJobs. All Right Reserved.</div>
                        <div class="social-links">
                            <a href="" target="_blank"><i class="fab fa-facebook-f"></i></a>
                            <a href="" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
