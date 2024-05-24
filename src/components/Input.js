import React from "react";

function Input({ label, type = "text" }) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input className="bg-blue-200 p-2 outline-none rounded-md" type={type} />
    </div>
  );
}

export default Input;
