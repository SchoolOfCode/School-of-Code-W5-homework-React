import React from "react"
import "./form.css"

export default function CommentForm(props) {
  return <div class="contain"><h3 id= "commentleave">Leave a Comment:</h3>
  <h3>Name:</h3>
  <input type="text" id="name" class="input" onChange={props.personChange} value={props.personValue}></input>
  <h3>Comment:</h3>
  <input type="text" id="comment" class="input" onChange={props.commentChange} value={props.commentValue}></input>
  <button class="button" onClick={props.onClick}>Submit Comment</button></div>;
}

