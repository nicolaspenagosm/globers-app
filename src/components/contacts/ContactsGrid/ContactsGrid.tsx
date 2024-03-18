import React from 'react';
import { StyledContactGrid } from './ContactsGrid.styled';
import { IContact } from '../../../types/shared';
import Contact from '../Contact';

const ContactsGrid: React.FC<{ contacts: IContact[] }> = ({ contacts }) => {
  return (
    <StyledContactGrid>
      {contacts.length === 0 && (
        <>
          <Contact isPlaceholder={true} /> <Contact isPlaceholder={true} />
          <Contact isPlaceholder={true} /> <Contact isPlaceholder={true} />
        </>
      )}
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </StyledContactGrid>
  );
};
export default ContactsGrid;
