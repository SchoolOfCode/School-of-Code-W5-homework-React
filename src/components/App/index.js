import React from "react"
import {useState} from "react"
import BlogPost from "../BlogPost";
import CommentForm from "../CommentForm";
import CommentList from "../CommentList";


function App() {

  const blog = {
    title: "Welcome to the blog",
    author: "Sarah Salmean",
    datePosted: "14/04/2023",
    content: "This is just a short post welcoming you to the new blog that I'm working on!",
    authorimageSrc: "",
    imgSrc: "",
    imageAlt: "",
  }

  const [comments, setComments] = useState([
    {author: "Harry Smith",
comment: "Great blog, slut!",
initials: "HS"},
{author: "Hope Sutherland", comment:"Hello!", initials: "HS"}
])

const [person, setPerson] = useState("")
const [comment, setComment] = useState("")

function handlePersonChange(event) {
  setPerson(event.target.value);
}

function handleCommentChange(event) {
  setComment(event.target.value);
}

let initials = ""

function getInitials (person) {
  const names = person.split(' ')
     initials = names[0].substring(0, 1).toUpperCase();
      initials = initials + names[names.length -1].substring(0, 1).toUpperCase();
      return initials}


function addItem(person, comment) {
  getInitials(person)
  setComments((comments) => [...comments, {"author": person, "comment": comment, "initials": initials,}])
  setPerson("");
  setComment("");
}

  return <> 
  <BlogPost
    title={blog.title}
    date={blog.datePosted}
    authorimageSrc={require("./Screenshot 2023-04-15 at 12.30.41.png")}
    author={blog.author}
    imgSrc={require("./Screenshot 2023-04-15 at 12.38.43.png")}
    content={blog.content}>
  </BlogPost>
  <h3>Comments:</h3>
  <CommentList text={comments}>
  </CommentList>
  <CommentForm personChange={handlePersonChange} commentChange={handleCommentChange} personValue={person} commentValue= {comment} onClick={() => addItem(person, comment)}> </CommentForm>
</>
  }

export default App;


//  <Comment id= {comments[0].id} authorinitials ={getInitials(comments, 0)} author = {comments[0].author} comment={comments[0].comment}></Comment>//