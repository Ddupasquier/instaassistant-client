import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ModalContext } from 'contexts/modalContext';
import { Modal, Text } from '@nextui-org/react';
// eslint-disable-next-line n/no-deprecated-api
import { apps } from 'constants';
import { Li } from 'components/Sidebar/styled';

const AppsModal = ({ username }) => {
  const { isAppsModalOpen, closeAppsHandler } = useContext(ModalContext);

  useEffect(() => {
    console.log(username, 'modal');
  }, [username]);

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={isAppsModalOpen}
      onClose={closeAppsHandler}
    >
      <Modal.Header>
        <Text id="modal-title" b transform="uppercase" size={18}>
          Which App would you like to view this user in?
        </Text>
      </Modal.Header>
      {username && (
        <Modal.Body>
          <ul>
            {apps.map((app, i) => (
              <Link to={`${app.to}/${username}`} key={i}>
                <Li>{app.name}</Li>
              </Link>
            ))}
          </ul>
        </Modal.Body>
      )}
    </Modal>
  );
};

export default AppsModal;
