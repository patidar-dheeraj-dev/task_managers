export let addtask = (task) => {
    return { type: "ADDTASK", payload: task }
}
export let updatetask = (i, data) => {
    console.log(i, data)
    return { type: "UPDATETASK", payload: { index: i, data } }
}
