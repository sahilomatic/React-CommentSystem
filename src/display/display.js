import { useState } from "react";
import "./display.css";

export default function Display({ data }) {
  const [showInput, setShowInput] = useState(false);
  const [comment, setComment] = useState();

  return (
    <div key={data.id}>
      <label>
        <b>{data.user}</b>
      </label>

      <span className="comment">{data.comment}</span>
      <span
        onClick={() => {
          setShowInput(!showInput);
        }}
      >
        ➕
      </span>

      {showInput && <input className="input" placeholder="add comment" />}
      <div className="child">
        {data.child.map((obj) => {
          return <Display data={obj} key={obj.id} />;
        })}
      </div>
    </div>
  );
}
