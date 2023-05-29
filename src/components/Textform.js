import { useState } from "react";
import React from "react";
import { Navbar } from "./Navbar";

export default function Textform(props) {

  const [text, settext] = useState("");
  const textchanger = (e) => {
    settext(e.target.value);
  };
  const upper = () => {
    let newtext = text.toUpperCase();
    if(text!=""){
    props.showalert(`Successfully ! '${text}'  converted to Uppercase`,"success")}
    settext(newtext);
  };
  const lower = () => {
    let newtext=text.toLowerCase();
    if(text!=""){
    props.showalert(` Successfully ! '${text}'  converted to Lowercase`,"success")}
    settext(text.toLowerCase());

  };
  const clear = () => {
    if(text===""){ props.showalert(`Nothing ! to Clear`,"success")}
    else{
      settext("");
    props.showalert(`Successfully ! cleared`,"success")}
    

  };
  
  return (
    <>
      <div className="conatainer" >
        <h2 className="p-2">{props.heading}</h2>
        <textarea
          className="form-control"
          value={text}
          onChange={textchanger}
          id="exampleFormControlTextarea1"
          placeholder="Enter Your text  here....."
          rows="7"
        ></textarea>

        <div className="conatainer my-3">
          <button disabled={text.length===0}
            type="button"
            onClick={upper}
            className={`btn btn-md btn-${props.theme==="light"?"dark":"outline-light"} mx-1`}
          >
            UpperCase
          </button>
          <button  disabled={text.length===0}
            type="button"
            onClick={lower}
            className={`btn btn-md btn-${props.theme==="light"?"dark":"outline-light"} mx-1`}
          >
            LowerCase
          </button>
          <button disabled={text.length===0}
            type="button"
            onClick={clear}
            className={`btn btn-md btn-${props.theme==="light"?"dark":"outline-light"} mx-1`}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="conatainer-sm  my-3">
        <div className="row">
          <div className="col">
            <h4>Your Text summary</h4>
          </div>
          <div className="col">
            <p>
              {text.length} characters and {text.split(" ").length - 1} words{" "}
            </p>
          </div>
          <div className="col">
            <p> {0.09 * text.length} seconds read </p>
          </div>
        </div>
      </div>
    </>
  );
}
