import React, { useEffect, useRef } from "react";
import { useFormData } from "./Context";
import * as yup from "yup";
import styles from "../HackathonRegisterForm.module.scss";
import { Form } from "@unform/web";
import InputField from "../inputs/InputField";
import SelectField from "../inputs/SelectField";
import CheckBoxes from "../inputs/CheckBoxes";
import FormProgress from "../../FormProgress/FormProgress";
import cx from "classnames";
import ReCAPTCHA from "react-google-recaptcha";

export default function ReviewInfo({ formStep, nextFormStep, prevFormStep }) {
  const { data } = useFormData();
  const formRef = useRef();
  const recaptchaRef = React.createRef();


  async function handleSubmit(event) {
    // Execute the reCAPTCHA when the form is submitted
    console.log(process.env.BACKEND_API_ENDPOINT+"/public/partner")
    recaptchaRef.current.execute();

  }

  const onReCAPTCHAChange = async (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    try {
      formRef.current.setErrors({});

      // Validation passed - do something with data

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const specializations = data.specializes?.filter(s => s !== "Other");
      if (data.specializesOther) specializations.push(data.specializesOther)
      const dataSend = {
        // uuid: "string",
        pocEmail: data.email || data.pocEmail,
        name: data.name,
        crNumber: parseInt(data.crNumber),
        address: data.address,
        postalCode: data.postalCode,
        city: data.city,
        country: data.country,
        phone: data.phone,
        description: data.description,
        supportType: data.supportType,
        specializes: specializations,
        marketFocus: data.marketFocus,
        employeesNumber: data.employeesNumber,
        isCloudFocused: data.isCloudFocused === "Yes",
        isLive: data.isLive === "Yes",
        isExistingClient: data.isExistingClient === "Yes",
        distributors: [
          data.distributors
        ],
        token: captchaCode
      }

      const JSONdata = JSON.stringify(dataSend);

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSONdata,
        redirect: 'follow'
      };

      fetch(process.env.BACKEND_API_ENDPOINT+"/public/partner", requestOptions)
        .then(response => response.text())
        .then(result => { nextFormStep(); })
        .catch(error => console.log('error', error.error));

    } catch (err) {
      const errors = {};
      // Validation failed - do show error
      if (err instanceof yup.ValidationError) {
        console.log(err.inner);
        // Validation failed - do show error
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
      }
    }
  };


  return (
    <div className={formStep === 2 ? styles.showForm : styles.hideForm}>
      <FormProgress formStep={formStep} className={styles.FormProgressMoblile} compact={true} />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formRow}>

          <div className={styles.reviewItem}>
            <label>Full name</label>
            <span>{data.name}</span>
          </div>

          <div className={styles.reviewItem}>
            <label>Email</label>
            <span>{data.email}</span>
          </div>

          <div className={styles.reviewItem}>
            <label>E-mail of the main point of contact:</label>
            <span>{data.pocEmail}</span>
          </div>

          <div className={styles.reviewItem + ' ' + styles.full}>
            <label>Need support with</label>
            <span>{data.supportType}</span>
          </div>

          <div className={styles.reviewItem}>
            <label>Company name</label>
            <span>{data.company}</span>
          </div>

          <div className={styles.reviewItem}>
            <label>Registration number</label>
            <span>{data.crNumber}</span>
          </div>

          <div className={styles.reviewItem}>
            <label>Phone number</label>
            <span>{data.phone}</span>
          </div>

          <div className={styles.reviewItem}>
            <label>Full Address</label>
            <span>{data.address}</span>
            <span>{data.city}</span>
            <span>{data.postalCode}</span>
            <span>{data.country}</span>
          </div>

          <div className={styles.reviewItem}>
            <label>Company description</label>
            <span>{data.description}</span>
          </div>

          <div className={styles.reviewItem}>
            <label>Number of employees</label>
            <span>{data.employeesNumber}</span>
          </div>

          <div className={styles.reviewItem}>
            <label>Vertical market focus area</label>
            <span>{data.marketFocus}</span>
          </div>

          <div className={styles.reviewItem}>
            <label>Cloud service is focus area?</label>
            <span>{data.isCloudFocused}</span>
          </div>

          <div className={styles.reviewItem}>
            <label>Do you have an existing
              product on Alibaba Cloud?</label>
            <span>{data.isExistingClient}</span>
          </div>


          <div className={styles.reviewItem}>
            <label>Company specializations</label>
            
            {
              data.specializes.filter(s => s !== "Other").map(s => { return <span key={s}>{s}</span> })
            }
            <span>{data.specializesOther}</span>
          </div>


          <div className={styles.reviewItem}>
            <label>Service or Product available
              for purchase / download?</label>
            <span>{data.isLive}</span>
          </div>

          <div className={styles.reviewItem}>
            <label>Optional: list of distributors</label>
            <span>{data.distributors}</span>
          </div>

          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={onReCAPTCHAChange}
          />



        </div>
        <div className={cx(styles.formCTAWrapper, styles.FormProgress)}>
          <button type="button" className="cta-white" onClick={() => prevFormStep()}>Back</button>
          <FormProgress formStep={formStep} />
          <button type="submit" className="cta-primary">Submit</button>
        </div>
      </Form>
    </div>
  );
}
