import { useEffect, useRef } from "react";
import { useFormData } from "./Context";
import * as yup from "yup";
import styles from "../HackathonRegisterForm.module.scss";
import { Form } from "@unform/web";
import InputField from "../inputs/InputField";
import SelectField from "../inputs/SelectField";
import CheckBoxes from "../inputs/CheckBoxes";
import FormProgress from "../../FormProgress/FormProgress";
import cx from "classnames";

const schema = yup.object().shape({
  marketFocus: yup.string().required("Select a Focus Area"),
  employeesNumber: yup.string().required("Select a range"),
  isCloudFocused: yup.string().required("Select a response"),
  isExistingClient: yup.string().required("Select a response"),
  isLive: yup.string().required("Select a response"),
  specializes: yup.array().min(1, "Select at least 1 specialization").required("Select specializations"),
  specializesOther: yup
             .string()
             .when('specializes',(specializes, schema) => {
              return specializes.includes('Other') ? 
                  yup.string().required('Must specify other specialization') : // add required validation
                  schema; // don't change anything
            }),
});
export default function CompanyInfo({ formStep, nextFormStep,prevFormStep }) {
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
          // console.log(err.inner);
          // Validation failed - do show error
          err.inner.forEach((error) => {
            errors[error.path] = error.message;
          });
          formRef.current.setErrors(errors);
        }
      }
    }
  
    return (
      <div className={formStep === 1 ? styles.showForm : styles.hideForm}>
        <FormProgress formStep={formStep} className={styles.FormProgressMoblile} compact={true}/>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <SelectField name="marketFocus" label="What is your industry vertical market focus area?"  placeholder="Select your Focus Area"
              options={[
                {
                label:"Health",
                value: "HEALTH"
              },
              {
                label:"Education",
                value: "EDUCATION"
              },
              {
                label:"Financial",
                value: "FINANCIAL"
              },
              {
                label:"Startup",
                value: "STARTUP"
              },
              {
                label:"Small-Medium Enterprise",
                value: "SMALL_MEDIUM_ENTERPRISE"
              },
              {
                label:"Enterprise",
                value: "ENTERPRISE"
              },
              {
                label:"Government",
                value: "GOV"
              },
              {
                label:"Telecommunication",
                value: "TELECOMMUNICATION"
              },
              ]}/>
            <SelectField name="employeesNumber" label="How many employees in your company?"  placeholder="Select range"
            options={['50-100','100-200','200+']}/>
            <SelectField name="isCloudFocused" label="Are cloud services the focus area of your business?"  placeholder="Select your answer"
            options={['Yes','No']}/>
            <SelectField name="isExistingClient" label="Do you have an existing product on Alibaba Cloud?"  placeholder="Select your answer"
            options={['Yes','No']}/>
            <div className={styles.checkboxesHeading}>Select company specializations (all that apply)</div>
            <CheckBoxes name="specializes" options={[
              {
                label: "Digital Marketing & Media",
                value: "Digital Marketing & Media"
              },
              {
                label: "Healthcare",
                value: "Healthcare"
              },
              {
                label: "Gaming",
                value: "Gaming"
              },
              {
                label: "Education",
                value: "Education"
              },
              {
                label: "Public Sector Services",
                value: "Public Sector Services"
              },
              {
                label: "Financial Services",
                value: "Financial Services"
              },
              {
                label: "E-Commerce",
                value: "E-Commerce"
              },
              {
                label: "Entertainment & Media",
                value: "Entertainment & Media"
              },
              {
                label: "Energies & Utilities",
                value: "Energies & Utilities"
              },
              {
                label: "Other",
                value: "Other",
                specifyField: "specializesOther"
              }
            ]}/>

            <SelectField name="isLive" label="Do you have a service or product  that is available for purchase or download?"  placeholder="Select your answer"
            options={['Yes','No']}/>
            <InputField name="distributors" label="Optional: List the distributors you currently work with:" type="text" />
          </div>
          <div className={cx(styles.formCTAWrapper)}>
            <button type="button" className="cta-white" onClick={()=>prevFormStep()}>Back</button>
            <FormProgress formStep={formStep} className={styles.FormProgress}/>
            <button type="submit" className="cta-primary">Next</button>
          </div>
        </Form>
      </div>
    );
  }
  