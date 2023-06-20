export const initialState = null;
export const reducer = (state, action) => {
  if (action.type === "admin") {
    return action.payload;
  }
  if (action.type === "hrmanager") {
    console.log("hello this is hr manager");
    //* payload ki value jo hum ne de ha wo mil gai ha
    return action.payload;
  }
  if (action.type === "orderadmin") {
    //* payload ki value jo hum ne de ha wo mil gai ha
    return action.payload;
  }
  if (action.type === "inventorymanager") {
    //* payload ki value jo hum ne de ha wo mil gai ha
    return action.payload;
  }
  if (action.type === "") {
    return action.payload;
  }
  //* wo payload ki value ab state ma aaa gai ha
  return state;
};
