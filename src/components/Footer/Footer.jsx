import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="sign-up-section">
        <div className='sign-up-text'>
          <div className='list-title'>SIGN UP TO OUR NEWSLETTER</div>
          <div className="text">Sign up to be the first to receive special news and event updates from us.</div>
        </div>
        <div className='sign-up-form'>
          <input className='emailInput' type="email" placeholder='Your Email Address' /> <br />
          <label><input type="checkbox" /> I agree to the</label> <span>Privacy Policy</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="right-arrow">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>

        </div>
        <div className="shape">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
        </div>
      </div>
      <div className="contact-section">
        <div className="logo-section">
          <div className="logo">Tide $ Tackle</div>
          <div className="text">Food is the foundation of true happiness. We serve only the freshest catches from waters. Seafood is our passion, freshness is our mission, and quality is our commitment.</div>
          <ul className='icon-list'>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-yelp"></i>
          </ul>
        </div>
        <div className="location-section">
          <div className="text section-title">Location</div>
          <div className="text">Upper Level,<br />
            Shop 15, 5 Macquarie Street <br />
            East Circular Quay,<br />
            Sydney NSW 2000 <br />
            Phone: +95 951183975</div>
        </div>
        <div className="hour-section">
          <div className="text section-title">Opening Hour</div>
          <div className="text">LUNCH<br />
            Saturday and Sunday <br />
            Reservation from 12pm to 1:30pm</div>
          <div className="text">DINNER<br />
            Thursday to Sunday <br />
            Reservation from 6pm to 9pm</div>
        </div>
        <div className="contact-mail-section">
          <div className="text section-title">Contact</div>
          <button className='footer btn'>Email us</button>
          <button className='footer btn'>PHONE: (95) 951183975</button>
          <button className='footer btn orange'>Make a reservation</button>
        </div>
      </div>
    </div>
  )
}
