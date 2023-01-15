import React, { useState } from "react";
import styles from "../HackathonRegisterForm.module.scss";
import cx from "classnames";
import InputField from "./InputField";


const CheckboxInput = (({ label, value,specifyField,checked = false, ...rest }: any, ref: any) => {
  const [ischecked, setChecked] = useState(checked);
  return (
    <div className={cx(styles.InputField, styles.checkboxInput)}>
      <label htmlFor={label}>
        <input ref={ref} value={value} {...rest} id={label}
        
        checked={ischecked} onChange={()=>{console.log('CHECK'); setChecked(!ischecked)}}/>
        <span className={styles.checkmark}></span>
        {label}
      </label>
      {
        (specifyField && ischecked === true)  && 
        <InputField name={specifyField} label="" placeholder="Enter specialization"/>
      }
    </div>

  );
});

export default React.forwardRef(CheckboxInput);