import React, { useState } from 'react';
import { Modal, Input, Button, Text, Spacer } from '@nextui-org/react';
import { CreateBot } from '../../api';

function NewAccountModal({
  newAccountVisible,
  closeNewAccountHandler,
}) {

  const [pwd, setPwd] = useState("")
  const [pwdConf, setPwdConf] = useState("")
  const [username, setUsername] = useState("")

  // const [postSuccess, setPostSuccess] = useState(false)

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (pwd !== pwdConf) {
      alert('Passwords do not match. Double check your password is correct, then try again.');
      return;
    } else {
      let payload = {username, pwd}
      console.log(payload)
      CreateBot(payload).then((data) => {
        if (data.success){
          alert("SUCCESS!")
          if (false) { //if success
            //setintrival fetch for task status
          } else { //if failed
            alert('We were unable to login with your provided cridentials. Check your password then try again');
          }
        } else if (data.error){
          alert(data.error);
        } 
      })
    }
  }

  return (
   
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
              label="username"
              labelLeft="@"
              underlined
              css={{ width: '100%' }}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Spacer />
            <Input label="Password" underlined css={{ width: '100%' }} onChange={(e) => setPwd(e.target.value)} />
            <Spacer />
            <Input
              label="Confirm password"
              underlined
              css={{ width: '100%' }}
              onChange={(e) => setPwdConf(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" rounded>Add Account</Button>
          </Modal.Footer>
        </form>
      </Modal>
    
  );
}

export default NewAccountModal;
