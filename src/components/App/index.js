import React from "react"
import {useState} from "react"
import BlogPost from "../BlogPost";
import Comment from "../Comment";
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

  const comments = [
    {author: "Harry Smith",
comment: "Great blog, slut!",
initials: "HS"},
{author: "Hope Sutherland", comment:"Hello!", initials: "HS"}
]

/* Todo 
- set comment state to be array of comments 
- have input fields recognise values
- hook up button
- upon click, add inputs as object to state array
- also run initials function and add those as initials 
- also clear input 
*/

/* var getInitials = function (comments) {
  const names = comments[index].author.split(' ')
     const initials = names[index].substring(0, 1).toUpperCase();
      initials = initials + names[names.length -1].substring(0, 1).toUpperCase();
      return <h2>{initials}</h2>;
    } */ 

    /*function getInitials(comments)  
    {comments.map(x, index => {const names = comment.author.split(' ')
     let initials = names[index].substring(0, 1).toUpperCase();
      initials = initials + names[names.length -1].substring(0, 1).toUpperCase();
      return <h2>{initials}</h2>;})} */

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
  <CommentForm></CommentForm>
</>
  }

export default App;


//  <Comment id= {comments[0].id} authorinitials ={getInitials(comments, 0)} author = {comments[0].author} comment={comments[0].comment}></Comment>//