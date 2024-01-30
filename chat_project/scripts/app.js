const chatList = document.querySelector(".chat-list");
const form = document.querySelector(".new-chat");
const updateName = document.querySelector(".new-name");
const updateMsg = document.querySelector(".update-mssg");
const rooms = document.querySelector(".chat-rooms");

//add message
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = form.message.value.trim();
  chatroom
    .addChat(message)
    .then(() => form.reset())
    .catch((err) => console.log(err));
});

//update username
updateName.addEventListener("submit", (e) => {
  e.preventDefault();
  //update name via chatroom
  const newName = updateName.name.value.trim();
  chatroom.updateName(newName);
  //reset the form
  updateName.reset();
  //show then hide the update message
  updateMsg.textContent = `Name successfully updated to ${newName}`;
  setTimeout(() => (updateMsg.textContent = ""), 3000);
});

//update the chat room
rooms.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    chatUI.clear(chatList);
    chatroom.updateRoom(e.target.getAttribute("id"));
    chatroom.getChats((data) => chatUI.render(data));
  }
});

//check local storage for a name
const username = localStorage.username ? localStorage.username : "anon";

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", username);

//get chats and render
chatroom.getChats((data) => {
  chatUI.render(data);
});
