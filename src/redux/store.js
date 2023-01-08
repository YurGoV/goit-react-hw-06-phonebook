import {configureStore} from '@reduxjs/toolkit';
import {createAction, createReducer, createSlice} from '@reduxjs/toolkit';

const initialContacts = [{
  id: '1',
  name: 'Test Contact 1',
  number: '000-000-0000',
},
  {
    id: '2',
    name: 'Test Contact 2',
    number: '000-000-0001',
  },];

const contactsSlice = createSlice({name: 'contacts',
  initialState: initialContacts,
  reducers: {
  addContact(state, action) {return [...state, action.payload]},
    delContact(state, action) {
      return state.filter(item => item.id !== action.payload)
    },
}
})

export const {addContact, delContact} = contactsSlice.actions

// export const addContact = createAction('contact/add');
// export const delContact = createAction('contact/del');
export const setFilter = createAction('filter/set');

// const contactsReducer = createReducer(initialContacts, {
//   [addContact]: (state, action) => [...state, action.payload],
//   [delContact]: (state, action) => state.filter(item => item.id !== action.payload),
//
// })

const filterReducer = createReducer('', {
  setFilter: (state, action) => state = action.payload,
})


export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    contacts: contactsSlice.reducer,
    filter: filterReducer,
  },
})
