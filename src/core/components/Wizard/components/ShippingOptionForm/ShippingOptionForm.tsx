import React from "react";
import { Formik, Form } from "formik";

import { WizardContextType } from "../../Wizard";
import { TextInput, FormNavButtons } from "../";

import schema from "./validation";

import { Container, Title, FullLine } from "./ShippingOptionForm.styles";

type PropsType = {
  shippingData: WizardContextType;
  step: number;
  setFormStep: (arg0: number) => void;
  totalSteps: number;
  setWizardContext: any;
};

const ShippingOptionForm = ({
  step,
  setFormStep,
  totalSteps,
  shippingData,
  setWizardContext,
}: PropsType) => {
  return (
    <Container>
      <Title>Enter shipping option - Ground or Priority:</Title>
      <Formik
        initialValues={{
          shippingOption: shippingData.shippingOption,
        }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting }) => {
          console.log("=> submitted:", values);
          setSubmitting(false);
        }}
      >
        {({ validateForm, values }) => (
          <Form>
            <FullLine>
              <TextInput
                fullLine={true}
                label="Shipping Option"
                name="shippingOption"
                type="number"
                placeholder={shippingData.shippingOption}
              />
            </FullLine>

            <FormNavButtons
              step={step}
              setFormStep={setFormStep}
              totalSteps={totalSteps}
              validateForm={validateForm}
              setWizardContext={setWizardContext}
              values={values.shippingOption}
              wizardContextTarget="shippingOption"
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ShippingOptionForm;
