import "./App.css";
import styled from "styled-components";
import logo from "../src/assets/logo.png";
import pic1 from "../src/assets/picOne.png";
import pic2 from "../src/assets/picSec.png";
import pic3 from "../src/assets/picThrd.png";
import { useState } from "react";
import { useTransition, animated } from "react-spring";

function App() {
  const [id, setId] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Initially set to true to display the first image
  const [images] = useState([pic1, pic2, pic3]);

  const transition = useTransition(isVisible ? id : null, {
    from: {
      opacity: 0,
      transform: "translate(-50%, -50%) scale(0.5)",
      position: "absolute",
      top: "-450%",
      left: "650%",
      
    },
    enter: {
      top: "50%",
      left: "50%",
      opacity: 1,
      transform: "translate(-50%, -50%) scale(1)",
      config: { duration: 1500 },
    },
    leave: {
      opacity: 0,
      top: "450%",
      left: "-650%",
      transform: "translate(-50%, -50%) scale(0.5)",
    },
  });

  const handleClick = () => {
    setIsVisible(true); // Set to true to trigger the transition
    setId((prevId) => (prevId === images.length - 1 ? 0 : prevId + 1));
  };

  return (
    <div className="App">
      <div className="container">
        {transition((style, item) =>
          item !== null ? (
            <animated.img src={images[item]} style={{style}} alt="Image" />
          ) : null
        )}
      </div>
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

export default App;

const Div = styled.div``;
