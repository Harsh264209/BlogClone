
import {Link} from 'react-router-dom';


function Blog(){



    return( 

       

<div className="div-container">

<div className="blog-container">


<nav  className='navbar'>
  <h2 id='bloglogo'>L</h2>
  <Link to={"/"}>home</Link>
  <Link to={"/About"}>about</Link>
  <Link to={'/Blog'}>blog</Link>
  <Link to={'/Guessbook'}>guestbook</Link>
</nav>


<div className="blog-text">
<div className="div">
<h1 id="blog">Blog</h1>


        <div className="text-container">
       <p id="text">Community-Messaging fit </p>
        <p id="views">1,197 views</p>
        </div>

        
        <div className="text-container">
        <p id="text">Funding Open Source </p>
        <p id="views">2,897 views</p>
        </div>
        
        <div className="text-container">
        <p id="text">2023 State of Databases for Serverless & Edge </p>
        <p id="views">2,497 views</p>
        </div>
        
        <div className="text-container">
        <p id="text">Why Should we Use React</p>
        <p id="views">4,697 views</p>
        </div>
        
        <div className="text-container">
        <p id="text">2022 year in Review </p>
        <p id="views">11,197 views</p>
        </div>
        <div className="text-container">
        <p id="text">Behind the scenes: Next.js Conf 2022 </p>
        <p id="views">3,457 views</p>
        </div>
        

        <div className="text-container">
        <p id="text">Developer's Guide to Video Production: Fundamentals of Video </p>
        <p id="views">1,187 views</p>
        </div>
        

        <div className="text-container">
        <p id="text">Hpergrowth </p>
        <p id="views">3,497 views</p>
        </div>
        

        <div className="text-container">
        <p id="text">What Makes a Great Developer Experience? </p>
        <p id="views">3,197 views</p>
        </div>
        
        <div className="text-container">
        <p id="text">Building an Image Gallery with Next.js, Supabase, and Tailwind CSS </p>
        <p id="views">7,197 views</p>
        </div>
        
        <div className="text-container">
        <p id="text">How I Became a Software Engineer (From Designer to Developer) </p>
        <p id="views">6,227 views</p>
        </div>

</div>


</div>



</div>








</div>



















        
        

        
       
    
      )
}

export default Blog;