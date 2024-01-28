import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { v4 as uuid } from "uuid";

const CreatePost = ({ setSelectedTab }) => {
  const postTitle = useRef();
  const postBody = useRef();
  const postTags = useRef();

  const { addPost } = useContext(PostList);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: uuid(),
      title: postTitle.current.value,
      body: postBody.current.value,
      reaction: 0,
      userId: "user-1",
      tags: postTags.current.value.split(" "),
    };
    addPost(newPost);
    // After adding to move new page
    setSelectedTab("Home");
  };
  return (
    <form className="create-post">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={postTitle}
          placeholder="How are you felling today ..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          ref={postBody}
          id="body"
          placeholder="Tell me more about it !"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter hashtags
        </label>
        <input
          type="text"
          className="form-control"
          ref={postTags}
          id="tags"
          placeholder="Please enter tags using space."
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleOnSubmit}>
        Post
      </button>
    </form>
  );
};

export default CreatePost;
