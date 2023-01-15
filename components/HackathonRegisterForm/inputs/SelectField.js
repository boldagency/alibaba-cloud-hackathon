import { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import styles from "../HackathonRegisterForm.module.scss";
import cx from "classnames";

const SelectField = ({ name, label,full=false,options=[],placeholder='', ...rest }) => {
  const inputRef = useRef();

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref) => {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <div className={cx(styles.InputField, {
      [styles.full]: full
    })}>
      <label htmlFor={fieldName}>{label}</label>
      <select
      id={fieldName}
      ref={inputRef}
      defaultValue={''}
      {...rest}>
        {
          <>
          <option value={''} disabled={true}>{placeholder}</option>
          {options.map((option,i) => {
            return <option key={i} value={option.value || option}>{option.label || option}</option>
          })}
          </>
          
        }
      </select>

      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default SelectField;

