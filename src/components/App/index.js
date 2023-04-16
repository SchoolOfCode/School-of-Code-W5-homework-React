import React from "react"
import {useState} from "react"
import BlogPost from "../BlogPost";
import CommentForm from "../CommentForm";
import CommentList from "../CommentList";
import "./index.css"


function App() {

  const blog = {
    title: "What I'm reading at the moment",
    author: "Sarah Salmean",
    datePosted: "14/04/2023",
    content: "I'm reading two books at the moment, which I am really enjoying. I'm using my iPad for both, which is annoying me as I wish I could highlight passages and add markers etc, it's just not the same on a screen. and to top it all off, my screenshot button isn't working either! So all of my favorite passages are currently 'preserved in memory' ie, a hazy, loose interpretation of each is floating around my brain somewhere near the door. Anyway, the books that I'm reading are Slaughterhouse Five and Infinite Jest. I've been desperately trying to read more classic/esteemed literiture as I'm woefully inexperienced in that genre, and if I want to write anything at all I better start consuming some actually 'good' books that I can hopefully learn from. I feel like infinite Jest might be rubbing off on me negatively however, as the author has a tendency to go off on tangents, which I also enjoy, and am sort of doing right now. I suppose if he can do it, so can I? We'll see.",
    authorimageSrc: "",
    imgSrc: "",
    imageAlt: "",
  }

  const [comments, setComments] = useState([
    {author: "Harry Smith",
comment: "Great books!",
initials: "HS"},
{author: "Hope Sutherland", comment:"Love the blog saz", initials: "HS"}, {author: "Robbie Blackburn", comment:"Hello!", initials: "RB"}
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
  if (person !== "" && comment !== "")
  {setComments((comments) => [...comments, {"author": person, "comment": comment, "initials": initials,}])
  setPerson("");
  setComment("");}
  else if (person === "" && comment !== "") {setComments((comments) => [...comments, {"author": "Anonymous", "comment": comment, "initials": "??",}])
  setPerson("");
  setComment("");}
  else alert("You can't submit an empty comment!")
}

  return <> 
  <h1 class="title">Sarah Salmean</h1>
  <BlogPost
    title={blog.title}
    date={blog.datePosted}
    authorimageSrc={require("./Screenshot 2023-04-16 at 11.36.26.png")}
    author={blog.author}
    imgSrc={require("./infinite-jest-post-its.jpg")}
    content={blog.content}>
  </BlogPost>
  <h3 class ="commentheader">Comments:</h3>
  <CommentList text={comments}>
  </CommentList>
  <CommentForm personChange={handlePersonChange} commentChange={handleCommentChange} personValue={person} commentValue= {comment} onClick={() => addItem(person, comment)}> </CommentForm>
</>
  }

export default App;


//  <Comment id= {comments[0].id} authorinitials ={getInitials(comments, 0)} author = {comments[0].author} comment={comments[0].comment}></Comment>//