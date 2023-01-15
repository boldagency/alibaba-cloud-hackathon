import { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import styles from "../HackathonRegisterForm.module.scss";
import Wrapper from "./CheckboxWrapper";
import CheckboxInput from "./CheckboxInput";

const CheckBoxes = ({ name, options = [],type, placeholder = '', defaultVal = undefined, ...rest }) => {


  // useEffect(() => {
  //   registerField({
  //     name: fieldName,
  //     ref: inputRef.current,
  //     getValue: (ref) => {
  //       console.log(ref.value)
  //       return ref?.value;
  //     },
  //   });
  // }, [fieldName, registerField]);

  return (
    <>
      <Wrapper name={name} type={type}>
        {options.map((option, i) => {
          return <CheckboxInput key={i} label={option.label} value={option.value} 
          checked={defaultVal === option.value}
          specifyField={option.specifyField}
          />
        }
        )}

      </Wrapper>
    </>


  );
};

export default CheckBoxes;

