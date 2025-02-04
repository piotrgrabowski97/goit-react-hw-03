import PropTypes from 'prop-types';
import styles from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <li className={styles.item}>
      <span>{contact.name}</span>
      <span>{contact.number}</span>
      <button onClick={() => onDelete(contact.id)}>Usuń</button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};