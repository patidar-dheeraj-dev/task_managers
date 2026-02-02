import { combineReducers } from "redux";

let initialState = {
    task: [], oldtask: [], newtask: []
}
let taskReducer = (state = initialState, action) => {
    console.log(action,state);

    switch (action.type) {
        case "ADDTASK": return {
            ...state, task: [...state.task, action.payload]
        };
        case "UPDATETASK": return {
            ...state, task: state.task.map((v, i) => {
                console.log(i ,action.payload.index)
                if (i == action.payload.index) {
                    console.log(v ,action.payload.data)
                    return { ...v, ...action.payload.data }
                } else {
                    return v
                }
            })
        };
    
        default: return state;
    }
}

export let root = combineReducers({ taskReducer })