import { useEffect, useRef } from "react";
import { useFormData } from "./Context";
import * as yup from "yup";
import styles from "../HackathonRegisterForm.module.scss";
import { Form } from "@unform/web";
import InputField from "../inputs/InputField";
import SelectField from "../inputs/SelectField";
import FormProgress from "../../FormProgress/FormProgress";
import {countries} from "../data/countries.js"
import CheckBoxes from "../inputs/CheckBoxes";
import RadioInput from "../inputs/RadioInput"; 
import cx from "classnames";

const schema = yup.object().shape({
  email: yup.string().email().required("Enter a valid Email"),
  phone: yup.string().required("Enter a valid Phone Number"),
  name: yup.string().required("Full Name is required"),
  company: yup.string().required("Company Name is required"),
  address: yup.string().required("Address is required"),
  supportType: yup.string().required("Support Type is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
  postalCode: yup.string().required("Postal code is required"),
  crNumber: yup.string().required("CR Number is required"),
  description: yup.string().required("Company Description is required"),
  isPOC: yup.string().default('Yes').required("Select a response"),
  pocEmail: yup
             .string()
             .when('isPOC',(isPOC, schema) => {
              return isPOC.includes('Other') ? 
                  yup.string().required('Must specify Point of contact') : // add required validation
                  schema; // don't change anything
            }),
});
export default function ContactInfo({ formStep, nextFormStep}) {
    const { setFormValues } = useFormData();
    const formRef = useRef();
     
    async function handleSubmit(data) {
      try {
        formRef.current.setErrors({});
        
        await schema.validate(data, {
          abortEarly: false,
        });
        // Validation passed - do something with data
        setFormValues(data);
        nextFormStep();
      } catch (err) {
        const errors = {};
        // Validation failed - do show error
        if (err instanceof yup.ValidationError) {
          // Validation failed - do show error
          err.inner.forEach((error) => {
            errors[error.path] = error.message;
          });
          formRef.current.setErrors(errors);
        }
      }
    }
  
    return (
      <div className={`${styles.formStep} ${formStep === 0 ? styles.showForm : styles.hideForm}`}>
        <FormProgress formStep={formStep} className={styles.FormProgressMoblile} compact={true}/>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <InputField name="name" label="Full Name" type="text" placeholder="Full Name" />
            <InputField name="email" label="Email Address" type="email" placeholder="Email Address" />
            <SelectField name="supportType" full={true} label="What kind of support are you looking for?"  placeholder="Select Support need"
            options={[
              {
                label:"Reseller",
                value: "RESELLER"
              },
              {
                label:"Developer",
                value: "DEVELOPER"
              }
            ]}/>
            <InputField name="company" label="Company Name" type="text" placeholder="Company Name" />
            <InputField name="crNumber" label="CR Number" type="text" placeholder="XXXXXXXXX" minLength={5} maxLength={15} />
            <InputField name="address" label="Address" type="text" placeholder="Address" />
            <InputField name="phone" label="Phone Number" type="tel" placeholder="+966" />
            <InputField name="city" label="City" placeholder="Enter City"/>
            <InputField name="postalCode" label="Postal Code" type="text" placeholder="XXXXX" minLength={5} maxLength={5} />
            <SelectField name="country" label="Country" placeholder="Select Country"
            options={countries.map(c=>c.name)}/>
            <InputField name="description" label="Company Description" type="text" placeholder="Company Description" />
              <RadioInput name="isPOC" options={[
              {
                id: "Yes",
                label: "Yes, I am the main point of contact",
                value: "Yes"
              },
              {
                id: "Other",
                label: "No, I am not the main point of contact",
                value: "Other",
                specifyField: "pocEmail"
              }]} />
            
            {/* <InputField name="email" label="Email Address" type="email" />
            <InputField name="email" label="Email Address" type="email" /> */}
          </div>

          <div className={cx(styles.formCTAWrapper,styles.FormProgress)}>
            <button type="button" disabled={true} className="cta-white">Back</button>
            <FormProgress formStep={formStep} className={styles.FormProgress}/>
            <button type="submit" className="cta-primary">Next</button>
          </div>
        </Form>
      </div>
    );
  }
  