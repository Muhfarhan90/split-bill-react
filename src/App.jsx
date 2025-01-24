import { useState } from "react";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: 1,
    name: "Budi",
    image: "https://i.pravatar.cc/150?img=1",
    balance: 7,
  },
  {
    id: 2,
    name: "Joko",
    image: "https://i.pravatar.cc/150?img=2",
    balance: -5,
  },
  {
    id: 3,
    name: "Siti",
    image: "https://i.pravatar.cc/150?img=3",
    balance: 10,
  },
  {
    id: 4,
    name: "Rita",
    image: "https://i.pravatar.cc/150?img=4",
    balance: 0,
  },
];

// import React from 'react'

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState(initialFriends);
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
  console.log(friends);
  return (
    <div className="max-w-[900px] mx-auto bg-gradient-to-br from-yellow-300 to-green-300 flex flex-col justify-center items-center p-8 h-screen overflow-x-auto">
      <h1 className="font-bold text-5xl text-center p-8 ">SPLIT BIll APP</h1>
      <div className="sidebar ">
        <FriendList friends={friends} onSelected={handleSelectedFriend} />
        <button
          onClick={handleShowAddFriend}
          className="py-2 px-4 bg-gray-300 mt-4 rounded-lg"
        >
          {showAddFriend ? "Tutup" : "Tambah Teman"}
        </button>
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        {/* <FormAddFriend /> */}
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
};

export default App;
