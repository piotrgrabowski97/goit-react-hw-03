import Contact from "./Contact";
import PropTypes from 'prop-types';
import styles from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};