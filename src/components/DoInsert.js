import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import "./DoInsert.scss";

function DoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="DoInsert" onSubmit={onSubmit}>
      <input placeholder="오늘은 뭐하지?" value={value} onChange={onChange} />
      <button
        type="submit"
        
      >
        <MdAdd />
      </button>
    </form>
  );
}

export default DoInsert;
