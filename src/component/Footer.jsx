
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
        <div className='main_footer'>
            <div className='sub_footer1'>
                <h1>Trans Aviation</h1>
                <div className='logo'>
               <a href="">
               <i class="fa-brands fa-linkedin-in"></i>
               </a> 
               <a href="">
               <i class="fa-brands fa-github"></i>
               </a> 
               <a href="">
               <i class="fa-brands fa-instagram"></i>
               </a> 
                </div>
            </div>
            <div className='sub_footer2'>
                <h2>CONTACT US</h2>
                <p>Address: AQ-6 Block, near KIA Motors, AQ Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091</p>
            </div>
            <div className='sub_footer3'>
                <input type="text" placeholder='your email' />
                <button>Subscribe</button>
            </div>

        </div>
            <p>&copy; 2024 Trans Aviation. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
