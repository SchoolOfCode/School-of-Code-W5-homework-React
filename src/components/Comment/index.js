import React from "react"
import "./comment.css"

export default function Comment(props) {
  props.function()
  return <div> {props.content}</div>
}


