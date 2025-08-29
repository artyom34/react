import { state } from "../redux/state";
import { rerenderMainTree } from "../rerender";

export let addNewPost = (postMessage) => {
  let newPost = {
    id: state.postsData.posts.length + 1,
    message: postMessage,
    likes: 0,
  };

  state.postsData.posts.push(newPost);
  rerenderMainTree(state);
};
