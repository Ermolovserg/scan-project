import { useField } from 'formik'
import styles from './select-field.module.scss'
import FieldWrap from '../FieldWrap/FieldWrap'

const SelectInput = ({ label, className, children, ...props }) => {
  const [ field, meta ] = useField(props)

  const wrapOptions = {
    label,
    field,
    meta,
  }

  return (
    <FieldWrap className={className} options={wrapOptions}>
      <select className={styles.input} {...field} {...props}>
        {children}
      </select>
    </FieldWrap>
  )
}

export default SelectInput
