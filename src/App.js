import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
// TODO: Add the ability for the <PostCreate /> component to create new posts.
// TODO: Add the ability for the <PostList /> component to delete an existing post.
  const initialFormState = {
    id: "",
    type: "Text",
    content: ""
  }

  const [formData, setFormData] = useState( { ...initialFormState } )

  const [type, setType] = useState("Text")

  const [posts, setPosts] = useState([]);

  return (

    <div className="App">

      <PostCreate 
      initialFormState={initialFormState} 
      formData={formData} 
      setFormData={setFormData}
      type={type} 
      setType={setType}
      posts={posts}
      setPosts={setPosts}
      />

      <PostList 
      type={type}
      posts={posts} 
      setPosts={setPosts}/>

    </div>

  );
}

export default App;