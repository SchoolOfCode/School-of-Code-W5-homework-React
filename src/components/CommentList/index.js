import React from "react"
import "./list.css"

export default function CommentList(props){
  return props.text.map((item, index) => (
    <li class= "list" key={index}><h3 class= "initials">{item.initials}</h3><h3>{item.author}</h3> {item.comment}</li>))}
