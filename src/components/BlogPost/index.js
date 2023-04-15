import React from "react"
import "./blog.css"

export default function BlogPost(props) {
  return <div class="blog">
  <h2>{props.title}</h2>
  <p><img src={props.authorimageSrc} alt="Image of the author" height= "50px"/><b> Author: </b>{props.author} <b>Date:</b>{props.date}</p>
  <img src={props.imgSrc} alt="Picasso" height= "200px"/>
  <p>{props.content}</p>
  </div>;
}


