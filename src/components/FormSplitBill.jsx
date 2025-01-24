/* eslint-disable react/prop-types */
// import React from 'react'

import { useState } from "react";

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !myBill) return;
    onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
  }
  return (
    <form action=""
      onSubmit={handleSubmit}
      className="p-4 bg-gray-200 flex flex-col mt-8 w-[500px]"
    >
      <h2>PATUNGAN BARENG {selectedFriend.name}</h2>
      <label htmlFor="">💵Total Tagihan</label>
      <input
        type="text"
        className="p-2"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label htmlFor="">💷Tagihan Kamu</label>
      <input
        type="text"
        className="p-2"
        value={myBill}
        onChange={(e) => setMyBill(e.target.value)}
      />
      <label htmlFor="">💴Tagihan {selectedFriend.name}</label>
      <input type="text" disabled className="p-2" value={friendBill} />
      <label htmlFor="">🙏Ditalangin sama</label>
      <select
        name=""
        id=""
        className="p-2"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">Kamu</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <button>Tambah</button>
    </form>
  );
};

export default FormSplitBill;
