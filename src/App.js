import { useReducer, useState } from "react";
import Display from "./display/display";
import reducer from "./reducer/reducer";
import "./styles.css";

export default function App() {
  const [state, dispatch] = useReducer(reducer, [
    {
      id: 1,
      user: "Sahil",
      comment: "first comment",
      child: [
        { id: 2, comment: "First Child", user: "Sahil", child: [] },
        {
          id: 3,
          comment: "Second Child",
          user: "Sahil",
          child: [{ id: 3, user: "rahul", comment: "child comment", child: [] }]
        }
      ]
    }
  ]);
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");

  function addComment(e) {
    e.preventDefault();
    let action = {
      type: "ADD_COMMENT",
      payLoad: {
        user: user,
        comment: comment
      }
    };
    console.log(action);
    dispatch(action);

    console.log(state);
    setUser("");
    setComment("");
  }
  return (
    <div>
      <div className="addComment">
        <form>
          <div>
            <label>Add Comment</label>
            <input
              type="text"
              placeholder="Add Comment"
              value={comment}
              onChange={(e) => {
                e.preventDefault();
                setComment(e.target.value);
              }}
            />
          </div>

          <div>
            <label>Enter Username</label>
            <input
              type="text"
              placeholder="UserName"
              value={user}
              onChange={(e) => {
                e.preventDefault();
                setUser(e.target.value);
              }}
            />
          </div>

          <div>
            <button
              onClick={(e) => {
                addComment(e);
              }}
            >
              Add Comment
            </button>
          </div>
        </form>
      </div>

      {state.map((obj) => {
        return <Display data={obj} />;
      })}
    </div>
  );
}
