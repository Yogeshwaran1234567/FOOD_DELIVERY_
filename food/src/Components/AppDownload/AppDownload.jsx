import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-downlaod' id='app-download'>
        <p>For The Better Experience Download <br />Yoshh App</p>
        <div className="app-download-platform">
            <a href="https://play.google.com/store/games?hl=en_IN"><img src={assets.play_store} alt="" /></a>
            <a href="https://apps.apple.com/in/app/apple-store/id375380948"><img src={assets.app_store} alt="" /></a>
        </div>
      
    </div>
  )
}

export default AppDownload
