import { useField } from 'formik'
import classNames from 'classnames';
import styles from './daterange-field.module.scss';
import FieldWrap from '../FieldWrap/FieldWrap';
import DatePickerInput from '../DatePickerInput/DatePickerInput';

const DateRangeField = ({ label, className, options }) => {
  const [startField, startMeta] = useField(options.start);
  const [endField, endMeta] = useField(options.end);

  const wrapClass = classNames(styles.wrap, className);

  const fieldWithErrorMeta =
    startMeta.touched && startMeta.error ? startMeta : endMeta;

  const wrapOptions = {
    label,
    field: startField,
    meta: fieldWithErrorMeta,
  };

  return (
    <FieldWrap className={wrapClass} options={wrapOptions}>
      <DatePickerInput
        {...startField}
        placeholder="Начальная дата"
        wrapperClassName={styles.datePickerWrap}
        selectsStart
        startDate={startField.value}
        endDate={endField.value}
        onChange={(date) => startField.onChange({ target: { value: date } })}
        onBlur={() => startField.onBlur({ target: { name: startField.name } })}
      />

      <DatePickerInput
        {...endField}
        placeholder="Конечная дата"
        wrapperClassName={styles.datePickerWrap}
        selectsEnd
        startDate={startField.value}
        endDate={endField.value}
        minDate={startField.value}
        onChange={(date) => endField.onChange({ target: { value: date } })}
        onBlur={() => endField.onBlur({ target: { name: endField.name } })}
      />
    </FieldWrap>
  );
};

export default DateRangeField;

