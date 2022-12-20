import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetTask, ShowAccount } from 'api';
import { Card, Text } from '@nextui-org/react';
import { convertToUserTime } from 'utils';
import Bubble from 'components/Bubble';
import AccountInfoMin from 'components/AccountInfoMin';
import BackButton from '../../components/Buttons/BackButton';
import Loader from 'components/Loader';
import ElipsesAnimation from 'components/Elipses/ElipsesAnimation';

function CurrentTask() {
  const { task_id, account_id } = useParams();
  const [currentAccount, setCurrentAccount] = useState();
  const [task, setTask] = useState();
  const [taskLoaded, setTaskLoaded] = useState(false);

  useEffect(() => {
    GetTask(task_id)
      .then((data) => setTask(data))
      .then(() => setTaskLoaded(true));

    ShowAccount(account_id).then((data) => {
      setCurrentAccount(data);
    });
  }, [account_id, task_id]);

  return (
    <div className="view-container">
      <Card
        style={{ zIndex: 1 }}
        css={{
          background: '$myColor',
          width: '90%',
          maxWidth: '1000px',
          margin: '3rem',
          overflow: 'hidden',
        }}
      >
        {taskLoaded ? (
          <>
            <Card.Header css={{ gap: '1rem', justifyContent: 'space-between' }}>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <BackButton />
                <h1>{task.task_type}</h1>
                {task.status === 'ACTIVE' && (
                  <ElipsesAnimation font={40} width={'1.1rem'} />
                )}
                <div>Created: {convertToUserTime(task.date_created)}</div>
                <div>Scheduled: {convertToUserTime(task.date)}</div>
              </div>
              {currentAccount.username && (
                <AccountInfoMin
                  username={currentAccount.username}
                  platform={currentAccount.platform}
                />
              )}
            </Card.Header>
            <Card.Body
              css={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                background: '$myColor',
              }}
            >
              <Bubble
                htmlFor="follows-sent"
                num={task.follows_sent}
                name="Follows Sent"
              />

              <Bubble
                htmlFor="likes-sent"
                num={task.likes_sent}
                name="Likes Sent"
              />

              <Bubble
                htmlFor="comments-sent"
                num={task.comments_sent}
                name="Comments Sent"
              />

              <Bubble
                htmlFor="messages-sent"
                num={task.messages_sent}
                name="Messages Sent"
              />
            </Card.Body>

            <Card css={{ borderRadius: '0' }}>
              <Card.Header>
                <Text h3>Task Log</Text>
              </Card.Header>
              <Card.Body css={{ overflow: 'auto' }}>
                {task.log.map((log, i) => (
                  <div key={i}>
                    <Text>{log}</Text>
                  </div>
                ))}
                Log Output
                <br />
                Log Output
                <br />
                Log Output
              </Card.Body>
            </Card>
          </>
        ) : (
          <Loader />
        )}
      </Card>
    </div>
  );
}

export default CurrentTask;
