import { Textarea, Grid } from '@nextui-org/react';
import { IconsQuestionMark } from 'Components/icons/icons';
import React from 'react';

const ConfigTextArea = ({
  label,
  value = '',
  set,
  toolTipContent,
  toolTipLocal,
}) => {
  return (
    <Grid sm={4} xs={12} css={{ position: 'relative' }}>
      <Textarea
        width="100%"
        bordered
        status="default"
        key={label}
        label={label}
        legend={label}
        onChange={(e) => set(e.target.value)}
        css={{
          fontWeight: 'bold',
        }}
        value={value || ''}
      />
      <div className="config-tooltip">
        <IconsQuestionMark content={toolTipContent} local={toolTipLocal} />
      </div>
    </Grid>
  );
};

export default ConfigTextArea;
