import React from "react";
import ReactDom from "react-dom";
import Card from "./Cards";
import "./index.css";


ReactDom.render(
  <>
  <h1 className="heading__style">SALAAH PODCAST</h1>
<Card 
      imgsrc="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" 
title="SOME IMAGES"
  sname="FIRST PODCAST"

 />
<Card
  imgsrc="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" 

title="SOME IMAGES"
  sname="FIRST PODCAST"
/>
<Card
  imgsrc="https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320"
title="SOME IMAGES"
  sname="FIRST PODCAST"
/>
<Card
  imgsrc="https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk="
title="SOME IMAGES"
sname="FIRST PODAST"
/>
<Card
imgsrc="https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg"
title="SOME IMAGES"
sname="FIRST PODCAST"
/>


</>,
  document.getElementById("root")

);
