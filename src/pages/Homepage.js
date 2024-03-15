import React from 'react'
import Card from '../components/Card';
import Review from '../components/Review';
import littlelemon from '../assets/littlelemon.jpg'
import Button from '../components/Button';
import image1 from '../assets/prod1.jpg'
import image2 from '../assets/prod2.jpg'
import image3 from '../assets/prod3.jpg'
import image4 from '../assets/mario.jpg'
import image5 from '../assets/adrian.jpg'
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();
  return (
    <>
    <main>
        <section className="section1">
          <div className="grid1">
            <div className='sec1grid1'>
              <h1>Little Lemon</h1>
              <h4>Chicago</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Button onclick={()=>navigate('/reserve')}>Reserve a table</Button>
            </div>
            <div className='sec2grid2'>
              <img src={littlelemon} />
            </div>
          </div>
        </section>
        <section className='specials'>
        <div className='special1'>
        <h1>Specials</h1>
        <div className='specialbutton'>
        <Button onclick={()=>navigate('/orderonline')}>Order  Online</Button>
        </div>
      </div>
      <div className='cardcontainer'>
      <Card className="card1" image={image1} name="Bruchetta" price="$14"/>
      <Card  className="card2" image={image3} name="Pasta" price="$12"/>
      <Card className="card3" image={image2} name="Noodles" price="$11"/>
      </div>
    </section>
    <section style={{backgroundColor:"#fbdabb"}}>
     <div className='reviewsection'>
     <div>
        <p style={{textAlign:"center", fontFamily:"Karla", fontWeight:"bold", fontSize:"1.5rem",}}>Testimonials</p>
      </div>
      <div className='reviewcontainer'>
      <Review className="review1" feedback="The food was superb" star="⭐⭐⭐⭐⭐⭐" name="Kate"/>
      <Review className="review2" feedback="I really enjoyed the ambience" star="⭐⭐⭐⭐" name="Kate"/>
      <Review className="review3" feedback="The dishes I ordered were excellant" star="⭐⭐⭐⭐" name="Kate"/>
      <Review className="review4" feedback="The dishes I ordered were amazing" star="⭐⭐⭐⭐" name="Kate"/>
      </div>
     </div>
    </section>
    <section >
    <div className='lastsectionbox'>
        <div  className='lastsecpara'>
          <p>Little Lemon</p>
          <h4>Chicago</h4>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. <br/>Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </div>
        <div className='imagecontainer'>
        <img src={image4}  className='overlapimage1'/>
        <img src={image5}  className='overlapimage2'/>
        </div>
      </div>
    </section>
  </main>
  </>
  )
}

export default Homepage;