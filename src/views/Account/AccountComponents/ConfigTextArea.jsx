import { Textarea, Grid } from '@nextui-org/react';
import { TooltipPop } from 'components/Tooltip';
import React from 'react';

const ConfigTextArea = ({
  label,
  value = '',
  name,
  toolTipContent,
  toolTipLocal,
}) => {
  return (
    <Grid sm={4} xs={12} css={{ position: 'relative' }}>
      <Textarea
        name={name}
        width="100%"
        bordered
        status="default"
        key={label}
        label={label}
        legend={label}
        css={{
          fontWeight: 'bold',
        }}
        value={value || ''}
      />
      <div className="config-tooltip">
        <TooltipPop content={toolTipContent} local={toolTipLocal} />
      </div>
    </Grid>
  );
};

export default ConfigTextArea;
