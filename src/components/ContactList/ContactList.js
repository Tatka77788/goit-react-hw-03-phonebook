/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

const ContactList = ({ contactList, handleRemove }) => {
  return (
    <ul>
      {contactList.map(el => (
        <ContactListItem
          key={el.id}
          contactListItem={el}
          handleRemove={handleRemove}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.string.shape({
    id: PropTypes.string,
  }).isRequired,
  handleRemove: PropTypes.func.isRequired,
};
export default ContactList;
