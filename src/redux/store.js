import {configureStore} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

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
});

const filterSlice = createSlice({name: 'filter',
  initialState: '',
  reducers: {
  setFilter(state, action) {return state = action.payload},
  },
})

export const {setFilter} = filterSlice.actions;
export const {addContact, delContact} = contactsSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
})
