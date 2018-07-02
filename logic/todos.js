import { constants } from "zlib";

export const ADD_ITEM = 'qgo/assessment/ADD_ITEM';
export const REMOVE_ITEM = 'qgo/assessment/REMOVE_ITEM';
export const TOGGLE_COMPLETE = 'qgo/assessment/TOGGLE_COMPLETE';
export const SHOW_COMPLETE_ITEMS = 'qgo/assessment/SHOW_COMPLETE_ITEMS';
export const SHOW_INCOMPLETE_ITEMS = 'qgo/assessment/SHOW_INCOMPLETE_ITEMS';

export const addItem = (content) => {
  return { type: ADD_ITEM, content };
};

export const removeItem = ({itemId}) => {
  return {
     type: REMOVE_ITEM, itemId
    };
};

export const toggleComplete = ({itemId}) => {
  return {
    type: TOGGLE_COMPLETE,
    itemId
  };
};

export const showCompleteItems = () => {
  return {
    type: SHOW_COMPLETE_ITEMS,
  };
};

export const showIncompleteItems = () => {
  return {
    type: SHOW_INCOMPLETE_ITEMS,
  }
}

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', completed: false },
    { id: 2, content: 'Buy cat food', completed: false },
    { id: 3, content: 'Water the plants', completed: false },
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
        completed: false
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    case REMOVE_ITEM:
      return {
        ...state,
       items: [...state.items.filter(({id}) => id !== action.itemId)]
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        items: state.items.map((todo) => {
           if (todo.id !== action.itemId) {
             return todo;
           }
           return {
             ...todo,
             completed: !todo.completed
           };
         })  
      };
    case SHOW_COMPLETE_ITEMS:
      return {
        ...state,
        items: [...state.items.filter(({completed}) => completed === true )]
      };
    case SHOW_INCOMPLETE_ITEMS: 
      return {
        ...state,
        items: [...state.items.filter(({completed}) => completed === false )]
      };
    default:
      return state;
  }
};

export default reducer;
