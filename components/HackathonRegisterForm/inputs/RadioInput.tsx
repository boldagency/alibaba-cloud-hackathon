import React, { useEffect, useRef, InputHTMLAttributes, useState } from 'react';
import { useField } from '@unform/core';
import styles from "../HackathonRegisterForm.module.scss";
import cx from "classnames";
import InputField from './InputField';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: {
    id: string;
    value: string;
    label: string;
    specifyField?:string
  }[];
}

const Radio: React.FC<Props> = ({ name, options, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue = 'Yes' } = useField(name);
  const [groupVal, setGroupVal] = useState('Yes');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.find(ref => ref.checked)?.value || '';
      },
      setValue: (refs: HTMLInputElement[], id: string) => {
        const inputRef = refs.find(ref => ref.id === id);
        if (inputRef) inputRef.checked = true;
      },
      clearValue: (refs: HTMLInputElement[]) => {
        const inputRef = refs.find(ref => ref.checked === true);
        if (inputRef) inputRef.checked = false;
      },
    });
  }, [defaultValue, fieldName, registerField]);
  function onChangeValue(event: any) {
    setGroupVal(event.target.value);
  }
  return (
    <>
      {options.map((option, index) => (
        <div key={index} className={cx(styles.InputField, styles.checkboxInput)}>
            <label htmlFor={option.id} key={option.id}>
          <input
          onChange={onChangeValue}
            ref={ref => ref && (inputRefs.current[index] = ref)}
            id={option.id}
            type="radio"
            name={name}
            defaultChecked={defaultValue.includes(option.id)}
            value={option.value}
            {...rest}
          />
          {option.label}
        </label>
        {
        (option.specifyField && groupVal === option.value)  && 
        <>
        
        <InputField name={option.specifyField} full={true} label="" placeholder="Enter their Email"/>
      </>}
        </div>
        
      ))}
    </>
  );
};

export default Radio;
