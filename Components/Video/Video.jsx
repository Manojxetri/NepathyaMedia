import React from 'react'
import "./Video.css"
// import videoBg from "./public/images/videoBg.mp4"/

const Video = () => {
  return (
        <div className='video-main'>
        {/* <div className="overlay"></div> */}
        <video src={"../public/images/NCMTALKS.MOV"} autoPlay loop muted />
        <div className="content">
            {/* <h1>Take a Virtual Tour Of Our Media Room</h1> */}
            {/* <p>To my site.</p> */}
        </div>
    </div>

  )
}

export default Video
