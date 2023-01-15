import React, { useEffect, useRef, memo } from "react";
import { useField } from "@unform/core";
import styles from "../HackathonRegisterForm.module.scss";


const Checkbox = ({ name, type="checkbox" , children}: any) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const { fieldName, registerField, error} = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter((ref) => ref?.checked).map((ref) => ref.value).filter((x, i, a) => a.indexOf(x) == i);
      },
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach((ref) => {
          ref.checked = false;
        });
      },
      setValue: (refs: HTMLInputElement[], values: string[]) => {
        refs.forEach((ref) => {
          if (values.includes(ref.id)) {
            ref.checked = true;
          }
        });
      }
    });
  }, [fieldName, registerField]);

  return (
    <>
      
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          name: fieldName,
          type: type,
          ref: (ref: HTMLInputElement) => inputRefs.current.push(ref)
        })
      )}

{error && <p className={styles.errorText}>{error}</p>}
    </>
  );
};

export default memo(Checkbox);
