
import './About.css'
import pic2 from './twitter-logo.png';
import pic4 from './github.png'
import pic5 from './yb.png';
import {Link} from 'react-router-dom';

function About(){



    return( 
          <div className="about">
  

  <div className="about-container">
    
  <nav  className='navbar' >
  <h2 id='aboutlogo'>L</h2>
  <Link to={"/"}>home</Link>
  <Link to={"/About"}>about</Link>
  <Link to={'/Blog'}>blog</Link>
  <Link to={'/Guessbook'}>guestbook</Link>
</nav>

<div className="about-text">

<div className="div">


<h1 id='about'>About Me</h1>
            <p>Hey, I'm Lee. Most folks know me as leerob online. <br /><br />

I'm currently the <b>VP of Developer Experience at Vercel</b>, where I lead our <br></br>Developer Relations and Documentation teams. I focus on <b>educating and<br></br> growing </b>the Vercel and Next.js communities.</p><br></br>

<br />
      <hr />
<br />
      <br />

<p>I'm passionate about many creative pursuits, including music, photography,<br></br> videography, and of course, coding. This combination of interests is what<br></br> ultimately led me to my current role in building developer communities. <br></br> <br />

I love building for the web. From something as simple as a single HTML file – <br></br>all the way to large Next.js applications. The web is incredible. Anyone can <br></br>become a developer, writer, or creator – and no one has to ask for permission.<br></br> You can just build.<br></br> <br />

Outside of Vercel, I <b>angel invest </b>in developer tools companies and <b>advise<br></br> early-stage startups.</b> I also do Developer Relations consulting work, helping <br></br>companies take their DevRel function from 0 to 1, or provide guidance on <br></br>growing communities, content creation, and developer marketing.</p><br></br>

    
    <div className="buttons">

  <a href=""><button className="btn"><img src={pic2} alt="" className='img'/>Twitter</button></a>  
   <a href=""><button className="btn"><img src={pic4} alt="" className='img'/>Github</button></a> 
  <a href=""><button className="btn"><img src={pic5} alt="" className='img' />YouTube</button></a>  


    </div>

</div>




</div>

  </div>



  




  





         </div>
           
      )
}

export default About;