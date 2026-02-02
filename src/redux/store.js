import { legacy_createStore as createstore } from "redux";
import { root } from "./reducer/addreducer"
export let store = createstore(root);
console.log(store.getState());