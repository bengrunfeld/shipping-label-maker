import React from "react";
import { Wizard } from "../../../core/components/Wizard";

import { Container } from "./ShippingLabelMaker.styles";

const ShippingLabelMaker = () => {
  const header = "Shipping Label Maker";

  const wizardContext = {
    from: {
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    to: {
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    weight: 0,
    shippingOption: 0,
  };

  type ActionType = {
    prev: number;
    next: number;
    end: boolean;
  };

  const steps = {
    onAction: (action: ActionType) => {},
    wizardContext,
  };

  const onComplete = () => {
    console.log("==>>> On Complete");
  };

  return (
    <Container>
      <Wizard
        header={header}
        steps={steps}
        wizardContext={wizardContext}
        onComplete={onComplete}
      />
    </Container>
  );
};

export default ShippingLabelMaker;
