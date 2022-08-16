import { Textarea, Grid } from "@nextui-org/react";
import React from "react";

const ConfigTextArea = ({ label, value, set }) => {
  return (
    <Grid sm={6} xs={12}>
      <Textarea
        width="95%"
        bordered
        status="default"
        key={label}
        label={label}
        placeholder="Enter your name"
        legend={label}
        onChange={(e) => set(e.target.value)}
        css={{
          backdropFilter: "saturate(200%) blur(8px)",
          background: "rgba(255, 255, 255, 0.2)",
          fontWeight: "bold",
        }}
        value={value}
      />
    </Grid>
  );
};

export default ConfigTextArea;
