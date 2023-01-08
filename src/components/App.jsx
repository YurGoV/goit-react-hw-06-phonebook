import {useState} from "react";
import {Section, Title} from "./App.styled";
import {nanoid} from "nanoid";
import {Filter} from "./Filter/Filter";
import {ContactsList} from "./ContactsList/ContactsList";
import {ContactForm} from "./ContactForm/ContactForm";
// import {useLocalStorage} from "./hooks/useLocalStorage";

import {useSelector, useDispatch} from "react-redux";
// import {addContact, delContact, setFilter} from "../redux/store";
import {addContact, delContact} from "../redux/store";


/*const contactsTemplate = [
  {id: 'id-1', name: 'Test contact One', number: '459-12-56'},//first time only
  {id: 'id-2', name: 'Test contact Two', number: '443-89-12'},
  {id: 'id-3', name: 'Test contact Three', number: '645-17-79'},
  {id: 'id-4', name: 'Test contact Four', number: '227-91-26'},
];*/

export const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', contactsTemplate)
  const [filter, setFilter] = useState('');

  const contacts = useSelector(state => state.contacts);
  console.log(typeof contacts);
  console.log(contacts);

  const dispatch = useDispatch();

const handleAddContact = ({name, number}) => {
  console.log(name, number);
  const id = nanoid();
  dispatch(addContact({
    id,
    name,
    number,
  }))
};

  /*const handleAddContact = ({name, number}) => {

    const id = nanoid();
    const isAlreadyInContacts = contacts.find(contact => contact.name === name);

    if (isAlreadyInContacts) {
      return alert(`${name} is already in contacts`)
    }

    setContacts([...contacts, {
      id,
      name,
      number,
    }])
  };*/

  const handleSearchContacts = (e) => {
    setFilter(e.currentTarget.value);
  }

  const deleteContact = (id) => {
    // setContacts(contacts.filter(contact => contact.id !== id));
    console.log('ddddd');
    dispatch(delContact(id));
  }

  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleAddContact}></ContactForm>
      <Filter onSearch={handleSearchContacts}></Filter>
      <ContactsList data={contacts} filter={filter} onDelete={deleteContact}></ContactsList>
    </Section>
  );
}

