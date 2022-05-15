import { useState } from 'react';
import {
  useGetAllContactsQuery,
  useAddContactMutation,
} from 'services/phoneBookApi';
import { nanoid } from '@reduxjs/toolkit';
import {
  showInfoMessage,
  showSuccessMessage,
  showErrorMessage,
} from 'utils/notifications';
import {
  FormWrapper,
  ContactSubmitForm,
  FormInputLabel,
  FormInput,
  FormSubmitBtn,
} from './ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useGetAllContactsQuery();
  const [addContact, { isLoading: isCreating }] = useAddContactMutation();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const onInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const onContactFormSubmit = async evt => {
    evt.preventDefault();

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() &&
          contact.number === number
      )
    ) {
      showInfoMessage('This contact is already in your phone book');
      return;
    }

    if (contacts.find(contact => contact.number === number)) {
      showInfoMessage('This phone number is already in your phone book');
      return;
    }

    const newContact = {
      name,
      number,
    };

    try {
      await addContact(newContact);
      showSuccessMessage('New contact has been added in your phone book');
    } catch (error) {
      console.log(error.message);
      showErrorMessage('Something goes wrong, new contact was not created');
    }

    formReset();
  };

  return (
    <FormWrapper>
      <ContactSubmitForm onSubmit={onContactFormSubmit}>
        <FormInputLabel htmlFor={nameInputId}>
          Name
          <FormInput
            type="text"
            name="name"
            placeholder="Type name here"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={onInputChange}
            id={nameInputId}
            required
          />
        </FormInputLabel>

        <FormInputLabel htmlFor={numberInputId}>
          Number
          <FormInput
            type="tel"
            name="number"
            placeholder="Type number here"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={onInputChange}
            id={numberInputId}
            required
          />
        </FormInputLabel>

        <FormSubmitBtn type="submit" disabled={isCreating}>
          {isCreating ? 'Adding...' : 'Add contact'}
        </FormSubmitBtn>
      </ContactSubmitForm>
    </FormWrapper>
  );
}
