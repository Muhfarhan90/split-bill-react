/* eslint-disable react/prop-types */
// import React from 'react'

import Friend from "./Friend";

const FriendList = ({ friends, onSelected, selectedFriend }) => {

  return (
    <div>
      {friends.length > 0 ? (
        <h2 className="text-2xl font-semibold mb-4">Daftar Teman</h2>
      ) : (
        <h2>Belum Ada Teman</h2>
      )}
      <ul className="flex flex-col justify-center w-[500px]">
        {friends.map((friend, index) => (
          <Friend
            friend={friend}
            key={index}
            onSelected={onSelected}
            selectedFriend={selectedFriend}
          />
        ))}
        { }
      </ul>
    </div>
  );
};

export default FriendList;
