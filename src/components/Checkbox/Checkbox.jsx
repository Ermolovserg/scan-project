import { useField } from 'formik';
import classNames from 'classnames';
import styles from './checkbox.module.scss';

const Checkbox = ({ label, className, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  const groupClass = classNames(styles.group, className);

  return (
    <div className={groupClass}>
      <input
        className={styles.input}
        type="checkbox"
        id={field.name}
        checked={field.value}
        {...field}
        {...props}
      />
      <label htmlFor={field.name}>
        {label}
      </label>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Checkbox;

