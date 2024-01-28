import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "NEW_POST") {
    console.log("add element");
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

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Pune",
    body: "Hi Friends, I am going to Pune for my vocations. Hope to enjoy a lot.",
    reaction: 0,
    userId: "user-1",
    tags: ["vocation", "Pune", "Travelling"],
  },
  {
    id: "2",
    title: "Pass ho gye bhai",
    body: "4 saal ke masti ke baad bhi pass ho gye bhai",
    reaction: 0,
    userId: "user-2",
    tags: ["B.Tech", "Unbelieveable", "Passout"],
  },
];

export default PostListProvider;
