import { combineReducers } from "redux";

const selectedOptionReducer = (selectedOption = null, action) => {
  if (action.type === "SELECT_OPTION") {
    return action.count;
  }

  return selectedOption;
};

export default combineReducers({
  selectedOption: selectedOptionReducer,
});
