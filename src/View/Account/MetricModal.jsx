import { Button, Modal } from '@nextui-org/react';
import React from 'react';
import { ChartPlaceHold } from '../../Components/ChartPlaceHold';

const MetricModal = ({ metricHandler, closeMetricHandler, metricVisible }) => {
  return (
    <>
      <Button auto shadow onClick={metricHandler}>
        Open modal
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={metricVisible}
        onClose={closeMetricHandler}
      >
        <Modal.Body>
          <ChartPlaceHold />
          Why isn't the chart appearing?
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MetricModal;
