import React from 'react';
import { Modal, useModal, Button, Text } from '@nextui-org/react';

export default function App() {
  const { setVisible, bindings } = useModal();
  return (
    <div>
      <Button auto flat onPress={() => setVisible(true)}>
        Open modal
      </Button>
      <Modal
        scroll
        fullScreen
        closeButton
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Modal with a lot of content
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description"></Text>
        </Modal.Body>
        <Modal.Footer>
          <Button flat auto color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
          <Button onPress={() => setVisible(false)}>Agree</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
