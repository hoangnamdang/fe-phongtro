import storage from "redux-persist/lib/storage";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const persistConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const authPersistReducer = {
  ...persistConfig,
  key: "auth",
  whitelist: ["isLoggedIn", "token"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistReducer, authReducer),
  user: userReducer,
});

export default rootReducer;
