export default function PostItem({post, handleDeleteClick }) {

    return (
        <div className="post">
            { post.type === "Text" ? 
            (<p>{post.content}</p>) : 
            (<img src={post.content} alt="post pic" />)
            }
            <div>
                <button onClick={handleDeleteClick} name="delete">Delete</button>
            </div>
        </div>
    );
};