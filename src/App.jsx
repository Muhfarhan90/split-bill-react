import { useState } from "react";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";
import initialFriends from "./data";

// import React from 'react'

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState(initialFriends);
  // 
  // const users = localStorage.getItem("friends");
  // console.log(users);
  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
    setSelectedFriend(null);
  }

  function handleAddFriend(newFriend) {
    setFriends([...friends, newFriend]);
    console.log(friends);
  }
  function handleSelectedFriend(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends(
      friends.map((friend) => {
        if (friend.id === selectedFriend?.id) {
          return {
            ...friend,
            balance: friend.balance + value,
          };
        }
        return friend;
      })
    );
    setSelectedFriend(null);
  }

  return (
    <div className="max-w-[900px] mx-auto bg-gradient-to-br from-yellow-300 to-green-300 flex flex-col justify-center items-center p-8 h-screen overflow-x-auto">
      <h1 className="font-bold text-5xl text-center p-8 ">SPLIT BIll APP</h1>
      <div className="sidebar ">
        <FriendList
          friends={friends}
          onSelected={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        <button
          onClick={handleShowAddFriend}
          className="py-2 px-4 bg-gray-300 hover:bg-gray-400 mt-4 rounded-lg"
        >
          {showAddFriend ? "Tutup" : "Tambah Teman"}
        </button>
        {showAddFriend && (
          <FormAddFriend friends={friends} onAddFriend={handleAddFriend} />
        )}
        {/* <FormAddFriend /> */}
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
};

export default App;
