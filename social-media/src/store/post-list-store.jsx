import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetching: false,
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "NEW_POST") {
    newPostList = [...currPostList, action.payload];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const addPost = (newPost) => {
    dispatchPostList({
      type: "NEW_POST",
      payload: newPost,
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const addIntialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);
  //fetching data from server...
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addIntialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      // if user switch to another component, it'll stop the 3rd party call.
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, fetching }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
