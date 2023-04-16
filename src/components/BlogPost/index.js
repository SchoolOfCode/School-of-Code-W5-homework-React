import React from "react"
import "./blog.css"

export default function BlogPost(props) {
  return <div class="blog">
  <h2 id="posttitle">{props.title}</h2>
  <img src={props.imgSrc} alt="Picasso" width= "600px" height= "300px" id="image"/>
  <p><img src={props.authorimageSrc} alt="Image of the author" height= "50px"/><b> Author: </b>{props.author} <b>Date:</b>{props.date}</p>
  <p class="post">{props.content}</p>
  </div>;
}


