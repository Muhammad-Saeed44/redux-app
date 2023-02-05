import { legacy_createStore as createStore, legacy_createStore} from 'redux'
import rootReducer from "./reducers/index";

const store = legacy_createStore(rootReducer);

export default store;