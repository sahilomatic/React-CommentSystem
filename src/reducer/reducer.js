import { v4 as uuidv4 } from "uuid";

export default function reducer(state, action) {
  console.log("here", action);
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          id: uuidv4(),
          user: action.payLoad.user,
          comment: action.payLoad.comment,
          child: []
        }
      ];

    case "DELETE_COMMENT":
      return state.filter((obj) => {
        if (obj.id != action.payLoad.id) {
          return true;
        }
        return false;
      });

    case "ADD_CHILD_COMMENT":

    default:
      return state;
  }
}
