/* eslint-disable react/prop-types */
// import React from 'react'

const FormSplitBill = ({selectedFriend}) => {
  return (
    <form className="p-4 bg-gray-200 flex flex-col mt-8 w-[500px]">
      <h2>PATUNGAN BARENG {selectedFriend.name}</h2>
      <label htmlFor="">💵Total Tagihan</label>
      <input type="text" className="p-2" />
      <label htmlFor="">💷Tagihan Kamu</label>
      <input type="text" className="p-2" />
      <label htmlFor="">💴Tagihan { selectedFriend.name}</label>
      <input type="text" disabled className="p-2" />
      <label htmlFor="">🙏Ditalangin sama</label>
      <select name="" id="" className="p-2">
        <option value="">Kamu</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <button>Tambah</button>
    </form>
  );
};

export default FormSplitBill;
