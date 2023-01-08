import {Section, Title} from "./App.styled";
import {nanoid} from "nanoid";
import {Filter} from "./Filter/Filter";
import {ContactsList} from "./ContactsList/ContactsList";
import {ContactForm} from "./ContactForm/ContactForm";
// import {useLocalStorage} from "./hooks/useLocalStorage";

import {useSelector, useDispatch} from "react-redux";
import {addContact, delContact, setFilter} from "../redux/store";

export const App = () => {

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  console.log(typeof contacts);
  console.log(contacts);
  console.log(filter);

  const dispatch = useDispatch();

  const handleAddContact = ({name, number}) => {
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
    <Section>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleAddContact}></ContactForm>
      <Filter onSearch={handleSearchContacts}></Filter>
      <ContactsList data={contacts} filter={filter} onDelete={deleteContact}></ContactsList>
    </Section>
  );
}

