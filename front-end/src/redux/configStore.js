import { createStore } from "redux";
import authStateReducer from "./authStateReducer";
import SecureLS from "secure-ls";//encrypt libs for local storage

const secureLs = new SecureLS()

const getStatesFromLocal = () => {
  const basAuth = secureLs.get("bas-auth");
  let defaultState = {
    isLogin: false,
    username: undefined,
    userId: undefined,
    userPhoneNumber: undefined,
    userEmail: undefined,
    userSurname: undefined,
  };
  if (basAuth) {
      defaultState = basAuth
    
  }
  return defaultState
};

const setStatesToLocal = (storeStates) => {
    secureLs.set("bas-auth", storeStates);
}


const configStore = () => {
  const store = createStore(
    authStateReducer,
    getStatesFromLocal(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  store.subscribe(() => {
    setStatesToLocal(store.getState())
  });
  return store;
};

export default configStore;
