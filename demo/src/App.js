
import './App.css';
import styled from 'styled-components';
import logo from "../src/assets/logo.png"
import pic1 from "../src/assets/picOne.png"
import pic2 from "../src/assets/picSec.png"
import pic3 from "../src/assets/picThrd.png"
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
function App() {
  const [id, setId] = useState(0);


useEffect(()=>{

AOS.init(
  {
    offset: 120, // offset (in px) from the original trigger point
    delay: 600,

  }
);
})





 




const plus = () => {
  // Cycle through the colors 0 -> 1 -> 2 -> 0
  if (id === 0) {
    setId(1);
  } else if (id === 1) {
    setId(2);
  } else if (id === 2) {
    setId(0);
  }
};

const minus = () => {
  // Cycle through the colors 0 -> 2 -> 1 -> 0
  if (id === 0) {
    setId(2);
  } else if (id === 1) {
    setId(0);
  } else if (id === 2) {
    setId(1);
  }
};
  return (
    <div className="App">
 
<div className='navcontainer'>


<div className='navbar'>

<img src={logo} alt="logo" className='logo'/>
<div className='menus'>
  <p>Home</p>
  <p>Shop</p>
  <p>About Us</p>
  <p>Contact Us</p>
  <p>Blog</p>



</div>

<div className='searchbox'>
  <input placeholder='search'/>
</div>
<div className='cartsection'>
    <div className='svg'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

    </div>
    <div className='svg'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

    </div>
    <div >
      <button className='account'>Account</button>
    </div>
</div>



</div>



</div>


<div className='ball' style={{ top: '250px', left: '1370px' }} > </div>{/* Adjust the position as needed */}
      <div className='ball' style={{ top: '580px', left: '900px' }} ></div>
      <div className='ball' style={{ top: '500px', left: '50px' }} ></div>
      <div className='ball' style={{backgroundColor:"#0EEA90", top: '150px', left: '800px' }} ></div>
<div className='homesection'>


<div className='textArea'>
<h2>
DB-PULSE
</h2>
<h1>
The    <span className={id === 0 ? "pink" : id === 1 ? "green" : id === 2 ? "gray" : "pink"}>

ultimate listening 
</span>
experience
</h1>
<p>
Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus maximus arcu lobortis magna tempus placerat. In consectetur turpis at interdum facilisis. Nam sagittis neque id suscipit dapibus. Quisque imperdiet est sit amet libero auctor, ut convallis tortor egestas.
</p>
<div style={{width:"70%",marginTop:"50px", display:"flex",justifyContent:"space-between"}}>
  <h3>
    Active Noise Cancellation
  </h3>
  <h3>
40H battery Life
  </h3>
</div>
</div>
<div onClick={(e)=>console.log(e)}  className={id === 0 ? "pinkK photosection" : id === 1 ? "greenN photosection" : id === 2 ? "grayY photosection" : "pinkK"}> 

<div className={id === 0 ? "pinkk roundedsection" : id === 1 ? "greenn roundedsection" : id === 2 ? "grayy roundedsection" : "pink"}>
            {id === 0 ? (
              <img data-aos="fade-down-left" className='centered-image' src={pic1} alt="Centered Image" />
            ) : id === 1 ? (
              <img data-aos="fade-down-left" className='centered-image' src={pic2} alt="Centered Image" />
            ) : id === 2 ? (
              <img data-aos="fade-down-left" className='centered-image' src={pic3} alt="Centered Image" />
            ) : (
              <img data-aos="fade-down-left" className='centered-image' src={pic1} alt="Centered Image" />
            )}
          </div>
</div>

{/* {id === 0 ? pic1 : id === 1 ? pic2 : id === 2 ? pic3 : pic1} */}
</div>
<div>


</div>



<div style={{display:"flex",justifyContent:"space-between",width:"80%",margin:"auto",display:"flex"}}>
  <button className='explore'>Explore Now!!</button>

<div  style={{display:"flex",justifyContent:"space-between"}}>
<div>
  <button className='button'onClick={plus}>
    <div className='svg'>
    <svg className="svgbtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

    </div>
  </button>
</div>

<div>
  <button className='button' onClick={minus}>
    <div className='svg'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

    </div>
  </button>
</div>
</div>
</div>


    </div>
  );
}

export default App;

const Div=styled.div`



`
