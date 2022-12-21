import React, { useContext, useEffect, useState } from 'react';
import { ModalContext } from 'contexts/modalContext';
import { UserContext } from 'contexts/userContext';
import Avatar from 'react-avatar';
import Bubble from 'components/Bubble';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Grid, Card, Text, Dropdown } from '@nextui-org/react';
import { FiSettings } from 'react-icons/fi';
import BackButton from './Buttons/BackButton';
import { platformIcon } from 'utils';

function AccountInfo({ currentAccount, snapshots }) {
  const navigate = useNavigate();

  const { taskHandler, handleDeleteConfirmVisible, setUserToDelete, setUserToApps } =
    useContext(ModalContext);

  const { collabAccounts } = useContext(UserContext);
  const { account_id } = useParams();

  const [canDelete, setCanDelete] = useState(true);

  useEffect(() => {
    if (collabAccounts) {
      const isCollab = collabAccounts.filter(
        (acc) => acc.id === currentAccount.id
      );
      if (isCollab) {
        setCanDelete(false);
      }
    }
  }, [collabAccounts, currentAccount.id]);

  return (
    <Grid css={{ flex: '8' }}>
      <Card
        css={{
          background: '$myColor',
          height: '100%',
        }}
      >
        <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          {platformIcon(currentAccount.platform)}
        </div>

        <div className="user">
          <BackButton />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar
              name={currentAccount.username}
              round
              value="25%"
              size="65"
              textSizeRatio={2}
            />
            <Text>@{currentAccount.username}</Text>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',
            }}
          >
            <Bubble
              htmlFor={'posts-count'}
              num={snapshots[snapshots.length - 1].posts}
              name={'Posts'}
            />
            <Bubble
              htmlFor={'followers-count'}
              num={snapshots[snapshots.length - 1].followers}
              name={'Followers'}
            />
            <Bubble
              htmlFor={'following-count'}
              num={snapshots[snapshots.length - 1].following}
              name={'Following'}
            />
          </div>

          <Dropdown>
            <Dropdown.Button color="secondary">
              <FiSettings />
            </Dropdown.Button>
            <Dropdown.Menu color="secondary" aria-label="User Actions">
              <Dropdown.Item aria-label="create-task">
                <Text
                  b
                  color="inherit"
                  onClick={() => {
                    setUserToApps(currentAccount);
                    navigate(`/CTRL/${currentAccount.username}`);
                  }}
                  css={{ d: 'flex' }}
                >
                  Open in CTRL
                </Text>
              </Dropdown.Item>
              <Dropdown.Item aria-label="create-task">
                <Text
                  b
                  color="inherit"
                  onClick={taskHandler}
                  css={{ d: 'flex' }}
                >
                  Open in TSK
                </Text>
              </Dropdown.Item>
              <Dropdown.Item aria-label="scheduled-tasks">
                <Link to={`/accounts/${account_id}/tasks`}>
                  <Text b color="inherit" css={{ d: 'flex', color: '$font' }}>
                    Schedule
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item aria-label="edit-account">
                <Link to={`/accounts/${account_id}/update`}>
                  <Text b color="inherit" css={{ d: 'flex', color: '$font' }}>
                    Settings
                  </Text>
                </Link>
              </Dropdown.Item>
              {canDelete && (
                <Dropdown.Item
                  aria-label="delete-account"
                  disabled={true}
                >
                  <Text
                    b
                    color="error"
                    css={{ d: 'flex' }}
                    onClick={() => {
                      handleDeleteConfirmVisible();
                      setUserToDelete(currentAccount);
                    }}
                  >
                    Delete
                  </Text>
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Card>
    </Grid>
  );
}

export default AccountInfo;
