import React, { useContext } from "react";
import { LabelContext } from "./labelDataContext";

import {
  Button,
  ButtonGroup,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";

const ShippingOption = (props) => {
  const val = useContext(LabelContext);
  const [shipping, setshipping] = React.useState("");
  const setId = (event) => {
    event.preventDefault();
    setshipping(event.target.value);
  };
  const btnDisbaled = shipping.length > 0;

  return (
    <form>
      <h4> Select shipping option</h4>
      <RadioGroup
        aria-label="weight"
        name="weight"
        value={shipping}
        className="form"
        onChange={setId}
      >
        <FormControlLabel
          control={<Radio />}
          label="Ground"
          value="1"
          onChange={val.handleChange("shippingOption")}
        />
        <FormControlLabel
          control={<Radio />}
          label="Priority"
          value="2"
          onChange={val.handleChange("shippingOption")}
        />
      </RadioGroup>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{ marginTop: 15 }}
      >
        <Button onClick={() => val.prevPage()} style={{ margin: 25 }}>
          Previous
        </Button>
        <Button
          disabled={!btnDisbaled}
          onClick={() => val.nextPage()}
          style={{ margin: 25 }}
        >
          Next
        </Button>
      </ButtonGroup>
    </form>
  );
};
export default ShippingOption;
