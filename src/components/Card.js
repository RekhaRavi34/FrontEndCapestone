import React from 'react'
import { RiEBike2Fill } from "react-icons/ri";

function Card({image,name,price}) {
  return (
    <article>
                    <div style={{width:"100%", height:"10rem"}}>
                    <img src={image} alt="dish" style={{width:"100%",height:"100%", objectFit:"cover"}}/>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <p style={{fontSize:"1.2rem", fontWeight:"bold"}}>{name}</p>
                    <p style={{color:"red",fontWeight:"bold"}}>{price}</p>
                    </div>
                    <p style={{fontFamily:"Karla", }}>Embrace a guilt-free indulgence with our pasta. It's cholesterol-free, low in fat, and a good source of energy. Create wholesome meals for you and your loved ones without compromising on taste or nutrition.</p>  
                    <div style={{display:"inline-flex", alignItems:"center", justifyContent:"flex-end",}}>
                   <p style={{fontFamily:"Karla", fontWeight:"bold", }}>Order Delivery </p> 
                   <RiEBike2Fill style={{marginTop:".5rem",}}/>
                   </div>
    </article>
  )
}

export default Card