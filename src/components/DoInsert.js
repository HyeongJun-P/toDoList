import React from "react";
import { MdAdd } from "react-icons/md";
import './DoInsert.scss';

function DoInsert() {
  return (
    <form className="DoInsert">
      <input placeholder="오늘은 뭐하지?" />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <MdAdd />
      </button>
    </form>
  );
}

export default DoInsert;
