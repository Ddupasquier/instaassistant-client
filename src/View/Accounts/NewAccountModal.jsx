import React, { useState } from 'react';
import { Modal, Input, Button, Text, Spacer } from '@nextui-org/react';

function NewAccountModal({
  newAccountHandler,
  newAccountVisible,
  closeNewAccountHandler,
}) {

  const [pwd, setPwd] = useState("")
  const [pwdConf, setPwdConf] = useState("")
  const [username, setUsername] = useState("")

  const HandleSubmit = (e) => {
    e.preventDefault()
    // post fetch to create initial login task!
    //once responce yeilds success
    //start set intrival to fetch task status
    //if completed
    // do nothing
    //if failed
    //fetch errors? on task or account?
  }

  return (
    <>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={newAccountVisible}
        onClose={closeNewAccountHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              Add New Account
            </Text>
          </Text>
        </Modal.Header>
        <form>
          <Modal.Body>
            <Input
              label="Instagram username"
              underlined
              css={{ width: '100%' }}
            />
            <Spacer />
            <Input label="Password" underlined css={{ width: '100%' }} />
            <Spacer />
            <Input
              label="Confirm password"
              underlined
              css={{ width: '100%' }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Add Account</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default NewAccountModal;
