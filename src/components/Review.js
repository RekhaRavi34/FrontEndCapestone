import React from 'react'
import profile from '../assets/profile.jpg'

function Review({name,feedback,star}) {
  return (
    <article className='reviewbox'>
      <div className='reviewrate'>
        <p  style={{fontSize:"0.6rem"}}>{star}</p>
      </div>
      <div style={{display:"flex",justifyContent:"flex-start", alignItems:"center", width:"50%", height:"5rem"}}>
        <img src={profile} alt="profile" className='profile'/>
        <p style={{fontWeight:"bold"}}>{name}</p>
      </div>
      <p style={{fontFamily:"Karla", fontSize:"0.8rem"}}>{feedback}</p>
    </article>
  )
}

export default Review;