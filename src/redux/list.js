import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  list: [],
  counter: 0,
};

export const list = createSlice({
  name: 'list',
  initialState,
  reducers: {
    add: (state, actions) => {
      todo = actions.payload;
      (todo);
      state.list.push(todo);
      state.counter++;
    },
    remove: (state, actions) => {
      id = actions.payload;
      const removeItem=state.list.pop(item=>{item.id==id});
      if(!removeItem.completed)
        state.counter--;
    },
    completed: (state, actions) => {
      id = actions.payload;
      state.list.find(e => e.id == id).completed = true;
      state.counter--;
    },
    notCompleted: (state, actions) => {
      id = actions.payload;
      state.list.find(e => e.id == id).completed = false;
      state.counter++;
    },
  },
});

export const {add, remove, completed, notCompleted} = list.actions;

export default list.reducer;
