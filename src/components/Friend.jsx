/* eslint-disable react/prop-types */
// import React from 'react'

const Friend = ({ friend, onSelected, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "flex items-center gap-4 border p-4 bg-gray-200" : "flex items-center gap-4 border p-4 hover:bg-gray-50"}>
      <img src={friend.image} alt={friend.name} className="rounded-full w-20" />
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl">{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="text-red-500">
            Kamu berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="text-green-500">
            {friend.name} berhutang Rp{Math.abs(friend.balance)} ke Kamu
          </p>
        )}
        {friend.balance === 0 && (
          <p>Kamu dan {friend.name} tidak punya hutang</p>
        )}
      </div>
      <button className="py-2 px-4 text-white rounded-lg bg-gray-400 hover:bg-gray-500" onClick={() => onSelected(friend)}>
        {isSelected ? "Tutup" : "Pilih"}
      </button>
    </li>
  );
};

export default Friend;
