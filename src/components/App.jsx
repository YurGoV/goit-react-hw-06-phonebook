import {Title} from "./App.styled";
import {nanoid} from "nanoid";
import {Filter} from "./Filter/Filter";
import {ContactsList} from "./ContactsList/ContactsList";
import {ContactForm} from "./ContactForm/ContactForm";
import {toast, ToastContainer, Zoom} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {useSelector, useDispatch} from "react-redux";
import {addContact, delContact } from "../redux/contactsSlice";
import {setFilter} from "../redux/filterSlice";

// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export const App = () => {

  const {contacts} = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  console.log(typeof contacts);
  console.log(contacts);
  console.log(filter);

  const dispatch = useDispatch();

  const handleAddContact = ({name, number}) => {
    console.log(name, number);
    const isAlreadyInContacts = contacts.find(contact => contact.name === name);
    if (isAlreadyInContacts) {
      return toast(`${name} is already in contacts`);
    }

    const id = nanoid();
    dispatch(addContact({
      id,
      name,
      number,
    }))
  };


  const handleSearchContacts = (e) => {
    console.log(e.currentTarget.value);
    dispatch(setFilter(e.currentTarget.value));
  }

  const deleteContact = (id) => {
    dispatch(delContact(id));
  }

  return (
    <Container maxWidth="sm">
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleAddContact}></ContactForm>
      <Filter onSearch={handleSearchContacts}></Filter>
      <ContactsList data={contacts} filter={filter} onDelete={deleteContact}></ContactsList>

      <ToastContainer
        autoClose={2000}
        position="top-center"
        theme="light"
        transition={Zoom}
      />

    </Container>
  );
}

