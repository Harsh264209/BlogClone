
import './Gb.css'
import pic4 from './github.png'
import {Link} from 'react-router-dom';

function Guessbook(){



    return( 
    <div className="guestbook">

<div className="gb-container">



<nav  className='navbar'>
  <h2 id='bloglogo'>L</h2>
  <Link to={"/"}>home</Link>
  <Link to={"/About"}>about</Link>
  <Link to={'/Blog'}>blog</Link>
  <Link to={'/Guessbook'}>guestbook</Link>
</nav>


<div className="gb-text">
<div className="div">
<h1 id='gb'> Guestbook</h1>
        <button className="btn1"><img src={pic4} alt="" className="img"/>Sign in with Github</button>

      <div className="container-text">

      <p id='text-light'>henrique:</p><span>that's pretty dope</span>
      </div>

      <div className="container-text">

<p id='text-light'>Yousef Diab:</p><span>Nice Guestbook</span>
</div>

<div className="container-text">

<p id='text-light'>024x:</p><span>i am satya
</span>
</div>


<div className="container-text">

<p id='text-light'>Alkado heneliko:</p><span>woow this is super</span>
</div>


<div className="container-text">

<p id='text-light'>petersahanaya::</p><span>Hi ! from indonesia 🫡</span>
</div>


<div className="container-text">

<p id='text-light'>Ryan Leichty:</p><span>Hello</span>
</div>


<div className="container-text">

<p id='text-light'>M:</p><span>Hi</span>
</div>


<div className="container-text">

<p id='text-light'>Lưu Phúc Huy:</p><span>Hi</span>
</div>


<div className="container-text">

<p id='text-light'>NOUR-EDDINE NAFZAOUI:</p><span>salam</span>
</div>


<div className="container-text">

<p id='text-light'>Manuel Bichle:</p><span>More websites should have guestbooks</span>
</div>


<div className="container-text">

<p id='text-light'>Andrew Barba:</p><span>amazing idea may i have it 😅✌🏼</span>
</div>



</div>


</div>


</div>


     

</div>

   
      )
}

export default Guessbook;