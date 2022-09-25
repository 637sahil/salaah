import React from "react";
function Cards(props){
    console.log(props);
    return(
  <>
  <div className="cards">
  <div className="card">
   <img src={props.imgsrc} alt="mypic" className="card_img" width={200}></img>
  <div className="card_info">
  <span className="card_category">
    {props.title}
  </span>
  <h3 className="card_title">{props.sname}</h3>
  <a href="" target="_blank">
    <button>watch now</button>
  
  </a>
  </div>
  </div>
  </div>
  
  
  </>
    );   
  }
  export default Cards;
  