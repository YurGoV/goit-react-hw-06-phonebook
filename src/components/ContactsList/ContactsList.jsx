import React from "react";
import {Contact, Title} from "./ContactsList.styled";
import {ContactsEl} from "../ContactEl/ContactsEl";
import PropTypes from "prop-types";



export const ContactsList = ({data, filter, onDelete}) => {

  function filteredData() {
    if (filter.length > 0) {
      return data.filter(el => el.name
        .toLowerCase()
        .includes(filter.toLowerCase()
          .trim()));
    }
    return data;
  }

  if (filteredData().length > 0) {
    return (
      <Contact>
        <Title>Contacts</Title>

        <ContactsEl data={filteredData()} onDelete={onDelete}></ContactsEl>
      </Contact>
    );
  }

  if (filteredData().length === 0 && !filter) {
    return (
      <Contact>
        <Title>The Phonebook is Empty</Title>
      </Contact>
    );
  }

  return (
    <Contact>
      <Title>There are no contacts, matching you query (</Title>
    </Contact>
  );
};

ContactsList.propTypes = {
  data: PropTypes.array,
  filter: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

/*


<Grid item xs={12} md={6}>
  <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
    Contacts
  </Typography>
  <Demo>
    <List dense={dense}>
      {generate(
        <ListItem>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText
            primary="Single-line item"
            secondary={secondary ? 'Secondary text' : null}
          />
        </ListItem>,
      )}
    </List>
  </Demo>
</Grid>

*/
