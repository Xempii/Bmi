import React from "react";
import { useState, useRef } from "react";
import "./Bmi.css";

const BmiText = ({ bmi }) => {
   if (bmi < 18.5) return <h1 className="Under">Underweight</h1>;
   if (bmi > 30) return <h1 className="Over">Overweight</h1>;
   return <h1 className="Normal">Normal</h1>;
};

export default function Bmi() {
   const weight = useRef(null);
   const height = useRef(null);
   const [Bmi, setBmi] = useState(0);
   const calBmi = () => {
      console.log("Click");
      let w = weight.current.value;
      let h = height.current.value / 100;
      setBmi(w / Math.pow(h, 2));
   };
   return (
      <div className="main">
         <h1>BMI Calulator</h1>
         <div className="info-input">
            Weight :
            <input type="text" ref={weight} placeholder="kg." /> kg.
         </div>
         <div className="info-input">
            Height :
            <input type="text" ref={height} placeholder="cm." /> cm.
         </div>
         <button onClick={() => calBmi()}>Calculate!</button>
         <br />
         <h1>Bmi value: {Bmi.toFixed(2)}</h1>
         <BmiText bmi={Bmi}></BmiText>
      </div>
   );
}
