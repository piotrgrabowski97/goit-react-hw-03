import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import styles from "./ContactForm.module.css";

export default function ContactForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: { name: "", number: "" },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Minimum 3 znaki!")
        .max(50, "Maksimum 50 znaków!")
        .required("Wymagane"),
      number: Yup.string()
        .min(3, "Minimum 3 znaki!")
        .max(20, "Maksimum 20 znaków!")
        .required("Wymagane"),
    }),
    onSubmit: (values, { resetForm }) => {
      onSubmit({ ...values, id: nanoid() });
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <input
        name="name"
        placeholder="Imię i nazwisko"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name && (
        <div className={styles.error}>{formik.errors.name}</div>
      )}

      <input
        name="number"
        placeholder="Numer telefonu"
        value={formik.values.number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.number && formik.errors.number && (
        <div className={styles.error}>{formik.errors.number}</div>
      )}

      <button type="submit">Dodaj kontakt</button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};