export const initialState = null;
export const reducer = (state, action) => {
  if (action.type === "admin") {
    //* payload ki value jo hum ne de ha wo mil gai ha
    return action.payload;
  }
  if (action.type === "hrmanager") {
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
  //* wo payload ki value ab state ma aaa gai ha
  return state;
};
