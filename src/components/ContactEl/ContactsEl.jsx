import React from "react";
import {
  contactsListStyles,
  deleteButtonStyles,
  Item
} from "./ContactsEl.styled";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import {Button, Stack, Typography} from "@mui/material";


export const ContactsEl = ({data, onDelete}) => {

  return (
    <Box sx={contactsListStyles}>
      <Stack spacing={2} sx={{width: '100%'}}>
        {data.map(contact => (
            <Item key={contact.id}>
              <Typography >{contact.name}: {contact.number}</Typography>
              <Button onClick={() => onDelete(contact.id)} sx={deleteButtonStyles}>delete</Button>
            </Item>
          )
        )}
      </Stack>
    </Box>
  );
};

ContactsEl.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
}

/*

<ContactsList>
  {data.map(contact => (
      <ContactRow key={contact.id}>
        {contact.name}: {contact.number}
        <ButtonOnDelete onClick={() => onDelete(contact.id)}>delete</ButtonOnDelete>
      </ContactRow>
    )
  )}
</ContactsList>

*/

