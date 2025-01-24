/* eslint-disable react/prop-types */
// import React from 'react'

import Friend from "./Friend";

const FriendList = ({ friends, onSelected }) => {
  return (
    <div>
      <ul className="flex flex-col justify-center w-[500px]">
        {friends.map((friend, index) => (
          <Friend friend={friend} key={index} onSelected={onSelected} />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
