import React from 'react';
import { List, ListItem, ItemWrapper, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <ItemWrapper>
          <p>{name}: </p>
          <p>{number}</p>
        </ItemWrapper>
        <Button type="button" onClick={() => onDeleteContact(id)}>
        </Button>
      </ListItem>
    ))}
  </List>
);