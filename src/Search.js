import React, { useRef, useState } from "react";
import './App.css';
import Plus from "./Plus";


const Search = (props) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0em");
  const [rotate, setRotate] = useState("")

  const content = useRef(null);

  function toggleAccordion() {
    setActive(active === "" ? "active" : "");
    setHeight(active === "active" ? "0em" : `${content.current.scrollHeight}em`);
    setRotate(active === "active" ? "" : "rotate")
  }

 return (
   <div className="accordion_section">
     <button className={`accordion ${active}`} onClick={toggleAccordion}>
       <Plus className={`${rotate}`} width={25} fill={"#777"} />
     </button>
     <div ref={content} style={{ maxHeight: `${height}` }} className="accordion_content">
       Previous test scores:
       <div className="accordion_text" dangerouslySetInnerHTML={{__html: props.content }} />
    </div>
  </div>
 )

}

export default Search;