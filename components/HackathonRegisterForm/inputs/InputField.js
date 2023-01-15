import { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import styles from "../HackathonRegisterForm.module.scss";
import cx from "classnames";
const InputField = ({ name, label, full=false, ...rest }) => {
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
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default InputField;

