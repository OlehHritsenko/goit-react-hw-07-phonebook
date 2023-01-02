import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { AiOutlineClose } from 'react-icons/ai';
import IconBtn from 'components/buttons/IconBtn/IconBtn';
import { Item, Name, Phone } from './Item.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item key={id}>
      <Name>{name}</Name>
      <Phone>{number}</Phone>
      <IconBtn aria-label="Delete contact" onClick={handleDelete}>
        <AiOutlineClose />
      </IconBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
