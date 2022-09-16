import React, { useState } from 'react';
import { Modal, Input, Button, Text, Spacer, Loading } from '@nextui-org/react';
import { CreateAccount, CreateBot, GetTask } from 'api';

function NewAccountModal({ newAccountVisible, closeNewAccountHandler }) {
  const [pwd, setPwd] = useState('');
  const [pwdConf, setPwdConf] = useState('');
  const [username, setUsername] = useState('');

  // const [postSuccess, setPostSuccess] = useState(false)

  const [newAccountSetup, setNewAccountSetup] = useState(null);
  const [tryingLogin, setTryingLogin] = useState(null);

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (pwd !== pwdConf) {
      alert(
        'Passwords do not match. Double check your password is correct, then try again.'
      );
      return;
    } else {
      let payload = { username, password: pwd, platform: 'instagram' };
      CreateAccount(payload).then((data) => {
        if (data.success) {
          this.checkStatus = setInterval(() => {
            GetTask(data.task_id).then((data) => {
              if (data.error) {
                console.log(data.error);
              } else if (data.status === 'COMPLETED') {
                console.log('We were able to successfully log you in');
              } else if (data.status === 'IN_PROGRESS') {
                console.log('Logging in...');
                setTryingLogin(true);
              } else if (data.status === 'SCHEDULED') {
                setNewAccountSetup(true);
              }
            });
          }, 1000);
        } else if (data.error) {
          alert(data.error);
        }
      });
    }
  };

  const [loggingIn, setLoggingIn] = useState(false);

  return (
    <Modal
      blur
      closeButton
      preventClose
      aria-labelledby="modal-title"
      open={newAccountVisible}
      onClose={closeNewAccountHandler}
    >
      {newAccountSetup === null && (
        <>
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
              <Input
                label="Password"
                underlined
                css={{ width: '100%' }}
                onChange={(e) => setPwd(e.target.value)}
              />
              <Spacer />
              <Input
                label="Confirm password"
                underlined
                css={{ width: '100%' }}
                onChange={(e) => setPwdConf(e.target.value)}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" color="secondary" rounded>
                Add Account
              </Button>
            </Modal.Footer>
          </form>
        </>
      )}

      {newAccountSetup === true && (
        <>
          <h2>Completing first time account setup</h2>
          <p>This could take up to 60s</p>
          <Loading size="xl" />
          {tryingLogin ? (
            <>
              <p>grabbing follower information for analytics</p>
            </>
          ) : (
            <>Establishing connection...</>
          )}
        </>
      )}
    </Modal>
  );
}

export default NewAccountModal;
