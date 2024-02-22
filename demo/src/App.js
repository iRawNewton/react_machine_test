import "./App.css";
import styled from "styled-components";
import logo from "../src/assets/logo.png";
import pic1 from "../src/assets/picOne.png";
import pic2 from "../src/assets/picSec.png";
import pic3 from "../src/assets/picThrd.png";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useTransition, animated } from "react-spring";

function App() {

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 600,
    });
  });



  const [id, setId] = useState(0);
  const [isVisible, setIsVisible] = useState(true); 
  const [images] = useState([pic1, pic2, pic3]);

  const transition = useTransition(isVisible ? id : null, {
    from: {
      opacity: 0,
      transform: "translate(-50%, -50%) scale(0.5)",
      position: "absolute",
      top: "-0%",
      left: "150%",
    },
    enter: {
      top: "45%",
      left: "50%",
      opacity: 1,
      transform: "translate(-50%, -50%) scale(1)",
      config: { duration: 1000 },
    },
    leave: {
      opacity: 0,
      top: "450%",
      left: "-650%",
      transform: "translate(-50%, -50%) scale(0.5)",
      config: { duration: 1000 },
    },
  });

  const handleClick = () => {
    setIsVisible(true);
    setId((prevId) => (prevId === images.length - 1 ? 0 : prevId + 1));
  };

  console.log(id);
  return (
    <div className="App">
      <div className="bg-gr"></div>
      <div className="bg-gr2"></div>
      <div className="navcontainer">
        <div className="navbar">
          <img src={logo} alt="logo" className="logo" />
          <div className="menus">
            <p>Home</p>
            <p>Shop</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Blog</p>
          </div>

          <div className="searchbox">
            <input placeholder="search" />
          </div>
          <div className="cartsection">
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
            <div>
              <button className="account">Account</button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          id === 0
            ? "pinkk ball"
            : id === 1
            ? "greenn ball"
            : id === 2
            ? "grayy ball"
            : "pink ball"
        }
        style={{ top: "250px", left: "1370px" }}
      ></div>
     
      <div
        className={
          id === 0
            ? "pinkk ball"
            : id === 1
            ? "greenn ball"
            : id === 2
            ? "grayy ball"
            : "pink ball"
        }
        style={{ top: "580px", left: "900px" }}
      ></div>

      <div
        className={
          id === 0
            ? "pinkk ball"
            : id === 1
            ? "greenn ball"
            : id === 2
            ? "grayy ball"
            : "pink ball"
        }
        style={{ top: "500px", left: "50px" }}
      ></div>

      <div
        className={
          id === 2
            ? "pinkk ball"
            : id === 0
            ? "greenn ball"
            : id === 1
            ? "grayy ball"
            : "pink ball"
        }
        style={{ top: "150px", left: "800px" }}
      ></div>

      <div className="homesection">
        <div className="textArea">
          <h2>DB-PULSE</h2>
          <h1>
            The{" "}
            <span
              className={
                id === 0
                  ? "pink"
                  : id === 1
                  ? "green"
                  : id === 2
                  ? "gray"
                  : "pink"
              }
            >
              ultimate listening
            </span>
            experience
          </h1>
          <p>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus
            maximus arcu lobortis magna tempus placerat. In consectetur turpis
            at interdum facilisis. Nam sagittis neque id suscipit dapibus.
            Quisque imperdiet est sit amet libero auctor, ut convallis tortor
            egestas.
          </p>
          <div
            style={{
              width: "70%",
              marginTop: "50px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
            <div style={{ display: "flex", alignItems: "baseline" }}>
  <h3>Active Noise Cancelation</h3>

</div>

            </div>

            <h3>40H battery Life</h3>
          </div>
        </div>

        <div
          onClick={(e) => console.log(e)}
          className={
            id === 0
              ? "pinkK photosection"
              : id === 1
              ? "greenN photosection"
              : id === 2
              ? "grayY photosection"
              : "pinkK"
          }
        >
          {/* comenting */}
          <div
            className={
              id === 0
                ? "pinkk roundedsection color-fader"
                : id === 1
                ? "greenn roundedsection color-fader"
                : id === 2
                ? "grayy roundedsection"
                : "pink color-fader"
            }
          >

          </div>

          <div className="container">
            {transition((style, item) =>
              item !== null ? (
                <animated.img
                  className="headphone"
                  src={images[item]}
                  style={style}
                  alt="Image"
                />
              ) : null
            )}
          </div>

        </div>

    
      </div>
      <div></div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "auto",
          display: "flex",
        }}
      >
        <button className="explore">Explore Now!!</button>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <button className="button" onClick={handleClick}>
              <div className="svg">
                <svg
                  className="svgbtn"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  color="green"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </button>
          </div>

          <div>
            <button className="button" onClick={handleClick}>
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  color="green"
                  border="4px solid green"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
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

const Div = styled.div``;
