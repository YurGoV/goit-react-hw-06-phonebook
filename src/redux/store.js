import {configureStore} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const persistConfig = {
  key: 'contacts',
  storage,
}

// const initialContacts = [{
//     id: '1',
//     name: 'Test Contact 1',
//     number: '000-000-0000',
//   },
//     {
//       id: '2',
//       name: 'Test Contact 2',
//       number: '000-000-0001',
//     },];


const initialContacts = {
  contacts: [{
    id: '1',
    name: 'Test Contact 1',
    number: '000-000-0000',
  },
    {
      id: '2',
      name: 'Test Contact 2',
      number: '000-000-0001',
    },]
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact(state, action) {
      return {contacts: [...state.contacts, action.payload]}
    },
    delContact(state, action) {
      return {contacts: state.contacts.filter(item => item.id !== action.payload)}
    },
  }
});


const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer)
console.log(contactsSlice.reducer);


const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return state = action.payload
    },
  },
})

export const {setFilter} = filterSlice.actions;
export const {addContact, delContact} = contactsSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
