import React, { useState } from 'react';
import { Modal, Input, Button, Text, Spacer } from '@nextui-org/react';
import { CreateBot } from '../../api';

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
    if (pwd !== pwdConf) {
      alert('Passwords do not match. Double check your password is correct, then try again.');
      return;
    } else {
      let payload = {username, pwd}
      CreateBot(payload)
      // post fetch to create initial login task!
      //once responce yeilds success
      //start set intrival to fetch task status
      if (false) { //if success

      } else { //if failed
        //fetch errors? on task or account?
        alert('We were unable to login with your provided cridentials. Check your password then try again');
      }
    }
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
        <form onSubmit={HandleSubmit}>
          <Modal.Body>
            <Input
              label="Instagram username"
              labelLeft="@"
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
