export const selectOption = (num) => {
  // return an action
  return {
    type: "SELECT_OPTION",
    count: num,
  };
};
