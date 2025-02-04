import PropTypes from 'prop-types';
import styles from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Szukaj kontaktów..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
    />
  );
}

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};