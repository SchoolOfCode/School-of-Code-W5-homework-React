import React from "react"
import "./form.css"

export default function CommentForm() {
  return <div class="contain"><h3>Leave a Comment:</h3>
  <h3>Name:</h3>
  <input type="text" id="name" class="input"></input>
  <h3>Comment</h3>
  <input type="text" id="comment" class="input"></input>
  <button class="button">Submit Comment</button></div>;
}

