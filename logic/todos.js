export const ADD_ITEM = 'qgo/assessment/ADD_ITEM';
export const REMOVE_ITEM = 'qgo/assessment/REMOVE_ITEM';

export const addItem = (content) => {
  return { type: ADD_ITEM, content };
};

export const removeItem = ({itemId}) => {
  return { 
    type: REMOVE_ITEM,
    itemId
  }
}

export const initialState = {
  items: [
    { id: 1, content: 'Call mum' },
    { id: 2, content: 'Buy cat food' },
    { id: 3, content: 'Water the plants' },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
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
    default:
      return state;
  }
};

export default reducer;
