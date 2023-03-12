
import './Home.css';
import {Route,Routes,Link} from 'react-router-dom';


import pic1 from './photo.jpg'
import pic2 from './twitter-logo.png';
import pic3 from './arrow.png';
import pic4 from './github.png'
import pic5 from './logo.png';



function File(){



    return( 
   <div className="home">

<div className="flex-container">

<nav  className='navbar'>
<h2>L</h2>
  <Link to={"/"}>home</Link>
  <Link to={"/About"}>about</Link>
  <Link to={'/Blog'}>blog</Link>
  <Link to={'/Guessbook'}>guestbook</Link>
</nav>

<div className="main-flex">
<div className="intro">

<h1>Lee Robinson</h1>
<p>Hey, I'm Lee. I'm the <b>VP of Developer Experience at Vercel</b><br></br>  where my team helps developers build a faster web.</p>
</div>


<div className="flex-2">

<div className="profile">
  <img src={pic1} alt="" className="img-profile" />




        <div class="profile-icons">
           <div class="icon-container">
             <img src={pic2} alt="" class="icon" />
              <span>6,873 tweets all time</span>
          </div>

             <div class="icon-container">
             <img src={pic4} alt="" class="icon" />
                  <span>5,280 stars on his repo</span>
              </div>

                    <div class="icon-container">
                     <img src={pic3} alt="" class="icon" />
                        <span>1,609,534 blog views all time</span>
                      </div>

              </div> 
       </div>


<div className="para">

<p>I'm a Next.js contributor and help lead our open-source communities. I'm passionate<br></br> about frontend development and have created courses on React, Next.js, and web<br></br> development. I'm an advisor and investor in early stage startups.</p>
 <div className="flex">
  <a href=""> <p>→→follow me on twitter</p></a>
  <a href=""><p>→→get email updates</p></a> 
 </div>

  </div>

</div>



  </div>

</div>













   </div>
           
      )
}

export default File;