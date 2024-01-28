import { useContext, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const [reactionCount, setReactionCount] = useState(post.reaction);
  const handleReactionClick = () => {
    setReactionCount(reactionCount + 1);
    // to store the likes untill refesh
    post.reaction = reactionCount + 1;
  };
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}>
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            className="badge rounded-pill text-bg-primary hashtag"
            key={tag}>
            {tag}
          </span>
        ))}
        <div className="post-reaction">
          <span className="reaction-emoji" onClick={handleReactionClick}>
            ❤️
          </span>
          {reactionCount || ""}
        </div>
      </div>
    </div>
  );
};

export default Post;
