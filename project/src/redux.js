let state = {
  postsData: {
    posts: [
      { id: 1, message: "Hello, how are you?", likes: "100" },
      { id: 2, message: "I'm fine thank's, and you?", likes: "200" },
    ],
  },

  dialogsData: {
    users: [
      { id: 1, name: "Lidiya" },
      { id: 2, name: "Vladimir" },
      { id: 3, name: "Alex" },
      { id: 4, name: "Artyom" },
      { id: 5, name: "Egor" },
      { id: 6, name: "Alina" },
    ],
    messages: [
      { id: 1, message: "Hello, how are you?" },
      { id: 2, message: "I am fine, thank you!" },
      { id: 3, message: "What about you?" },
      { id: 4, message: "I am doing well, thanks!" },
      { id: 5, message: "Let's meet up soon." },
      { id: 6, message: "Sure, that sounds great!" },
    ],
  },
};

export const addNewPost = (postMessage) => {
  let newPost = {
    id: state.postsData.posts.length + 1,
    message: postMessage,
    likes: 0,
  };

  state.postsData.posts.push(newPost);
};

export const addNewMessage = (messageText) => {
  let newMessage = {
    id: state.dialogsData.messages.length + 1,
    message: messageText,
  };

  state.dialogsData.messages.push(newMessage);
};

export default state;
