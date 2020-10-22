import React, { useReducer } from "react";
import { Wizard } from "../../../core/components/Wizard";
import { WizardContextType } from "../../../core/components/Wizard/Wizard";

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
    payload: any;
    type: string;
  };

  const reducer = (state: WizardContextType, action: ActionType) => {
    if (action.type === "from") {
      const newState = Object.assign({}, wizardContext, {
        from: action.payload,
      });
      return newState;
    }

    if (action.type === "to") {
      const newState = Object.assign({}, wizardContext, { to: action.payload });
      return newState;
    }

    if (action.type === "weight") {
      const newState = Object.assign({}, wizardContext, {
        weight: action.payload,
      });
      return newState;
    }

    if (action.type === "shippingOption") {
      const newState = Object.assign({}, wizardContext, {
        shippingOption: action.payload,
      });
      return newState;
    }
  };

  type UseReducerType = {
    (prevState: any, action: any): any;
  };

  const [state, dispatch] = useReducer<UseReducerType>(reducer, wizardContext);

  type OnActionType = {
    prev: number;
    next: number;
    end: boolean;
  };

  const steps = {
    onAction: (action: OnActionType) => {},
    wizardContext,
  };

  const onComplete = () => {
    console.log("==>>> On Complete");
  };

  console.log("==>> STATE:");
  console.log(state);

  return (
    <Container>
      <Wizard
        header={header}
        steps={steps}
        wizardContext={state}
        onComplete={onComplete}
        setWizardContext={dispatch}
      />
    </Container>
  );
};

export default ShippingLabelMaker;
