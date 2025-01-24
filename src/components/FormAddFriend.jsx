/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from "react";
const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/150");
  console.log(name);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/150");
  }
  return (
    <form
      className="flex flex-col gap-4 p-4 bg-gray-200 mt-8 w-[400px]"
      onSubmit={handleSubmit}
    >
      <label htmlFor="">🤹 Nama</label>
      <input
        type="text"
        className="p-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">😶‍🌫️ Gambar</label>
      <input
        type="text"
        className="p-2"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit" className="p-4 rounded-lg bg-gray-300">
        Tambah
      </button>
    </form>
  );
};

export default FormAddFriend;
