import React, { useState, useContext } from 'react';
import { ModalContext } from 'contexts/modalContext';
import { ThemeContext } from 'contexts/themeContext';
import { Modal, Input, Button, Text } from '@nextui-org/react';
import { MagnifyingGlass, CollabIcon } from 'assets';

const CollabModal = ({accountId}) => {
  const { isDark } = useContext(ThemeContext);
  const { isCollabModalOpen, closeCollabHandler } = useContext(ModalContext);

  const [inputVal, setInputVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={isCollabModalOpen}
      onClose={closeCollabHandler}
    >
      <Modal.Header style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: '50px' }}>
          <CollabIcon color={isDark ? 'white' : 'black'} />
        </div>
        <Text id="modal-title" b transform="uppercase" size={18}>
          Add a collaborator to your account
        </Text>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <Input
            placeholder="Search by email"
            contentLeft={<MagnifyingGlass color={isDark ? 'white' : 'black'} />}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            color="error"
            rounded
            size="sm"
            disabled={inputVal.length < 3}
          >
            {inputVal.length >= 3
              ? 'Select collaborator above'
              : 'Add collaborator'}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default CollabModal;
