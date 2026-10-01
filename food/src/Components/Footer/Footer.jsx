import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo2 from '../../assets/logo2.png'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer'id='footer'>
      <div className="footer-content">
        <div className="footer-conteten-left">
            <img src={logo2} alt="" />
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis voluptatum tempore voluptates, error molestias, similique iure ipsum minima animi dolores facere impedit veniam quibusdam sapiente pariatur ea doloremque porro. Doloribus quos repellendus dignissimos fugit eos, ipsum dolor sequi odio rem, aspernatur placeat. Voluptas id magni quia facilis harum fugit unde.</p>
            <div className="footer-social-icons">
               <a href="https://www.facebook.com/food/"> <img src={assets.facebook_icon} alt="" /></a>
                <a href="https://x.com/"><img src={assets.twitter_icon} alt="" /></a>
               <a href="https://www.linkedin.com/jobs/search-results/?currentJobId=4441160245&keywords=Food%20industry%20jobs%20chennai"><img src={assets.linkedin_icon} alt="" /></a> 
            </div>
        </div>    
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href="https://www.google.com/search?q=foods+chicken&sca_esv=d777865217e22ae8&biw=691&bih=730&sxsrf=APpeQnu5qu17ni8RtTl_aCLud2Hfc52ICQ%3A1788442441004&ei=SHeZatnpPIe6seMP8_KnuA4&gs_ssp=eJzj4tTP1TdIMzIttzRgdGDw4k3Lz08pVkjOyEzOTs0DAG16CGQ&oq=foods+ch&gs_lp=Egxnd3Mtd2l6LXNlcnAiCGZvb2RzIGNoKgIIADILEC4YgAQYigUYkQIyCxAAGIAEGIoFGJECMgUQABiABDIFEC4YgAQyDBAAGIAEGAoYCxixAzIFEAAYgAQyDBAAGIAEGAoYCxixAzIFEAAYgAQyCRAAGIAEGAoYCzIJEAAYgAQYChgLSIocULoGWLoMcAF4AZABAJgBnwGgAbcDqgEDMC4zuAEByAEA-AEBmAIEoALiA8ICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgIKEAAYgAQYigUYQ8ICDRAAGIAEGIoFGEMYsQOYAwCIBgGQBgySBwMxLjOgB_whsgcDMC4zuAfZA8IHBTItMi4yyAchgAgB&sclient=gws-wiz-serp">About us</a></li>
                    <li><a href="#food-display">Delivery</a></li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 9876543210</li>
                        <li>Contact@Yossh.com</li>
                    </ul>
            </div>
            
            

        
      </div>
            <hr />
            <p className="footer-copy-right">
                Copyright 2026 	&#169; Yossh.com - All Right Reserved.
            </p>
    </div>
  )
}

export default Footer
