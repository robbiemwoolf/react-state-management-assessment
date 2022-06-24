import React from "react"
import PostContent from "./PostContent"

// Displays a list of either text or image posts.

function PostList( { posts, setPosts } ) {
  // TODO: Diplay the list of posts.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each post must have className="post" for the tests to work.
  // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  const postList = posts.map( (post, index) => {

    post.id = `${index}`

    return <PostContent 
    type={post.type} 
    post={post} 
    posts={posts} 
    setPosts={setPosts}
    key={index} 
    /> 

  })

  return <div className="post-list">{postList}</div>

}

export default PostList;