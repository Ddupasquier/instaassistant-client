import { Textarea, Grid } from "@nextui-org/react";
import React from "react";

const ConfigTextArea = ({ label, value, set }) => {
  return (
    <Grid md={3} sm={4} xs={6}>
      <Textarea
        width="100%"
        bordered
        status="default"
        key={label}
        label={label}
        placeholder="Enter your name"
        legend={label}
        onChange={(e) => set(e.target.value)}
        css={{
          fontWeight: "bold",
        }}
        value={value}
      />
    </Grid>
  );
};

export default ConfigTextArea;
