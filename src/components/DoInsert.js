import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import './DoInsert.scss';

function DoInsert() {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  },[]);
  return (
    <form className="DoInsert">
      <input placeholder="오늘은 뭐하지?"
      value={value}
      onChange={onChange}
      />
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
