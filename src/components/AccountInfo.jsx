import React, { useContext } from 'react';
import Avatar from 'react-avatar';
import Bubble from 'components/Bubble';
import { useParams, Link } from 'react-router-dom';
import { Grid, Card, Text, Dropdown } from '@nextui-org/react';
import { FiSettings } from 'react-icons/fi';
import BackButton from './BackButton';
import { TaskModalContext } from 'contexts/modalContext';
import { platformIcon } from 'utils';

function AccountInfo({
  handleDeleteConfirmVisible,
  currentAccount,
  snapshots,
}) {
  const { taskHandler } = useContext(TaskModalContext);
  const { account_id } = useParams();

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
              <Dropdown.Item key="profile" aria-label="create-task">
                <Text
                  b
                  color="inherit"
                  onClick={taskHandler}
                  css={{ d: 'flex' }}
                >
                  Create Task
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="scheduled-tasks" aria-label="scheduled-tasks">
                <Link to={`/accounts/${account_id}/tasks`}>
                  <Text b color="inherit" css={{ d: 'flex', color: '$font' }}>
                    Scheduled Tasks
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="Edit" aria-label="edit-account">
                <Link to={`/accounts/${account_id}/update`}>
                  <Text b color="inherit" css={{ d: 'flex', color: '$font' }}>
                    Edit Account
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="Delete" aria-label="delete-account">
                <Text
                  b
                  color="error"
                  css={{ d: 'flex' }}
                  onClick={handleDeleteConfirmVisible}
                >
                  Delete
                </Text>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Card>
    </Grid>
  );
}

export default AccountInfo;
