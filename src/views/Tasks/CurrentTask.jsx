import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetTask, ShowAccount } from 'api';
import { Card, Text } from '@nextui-org/react';
import { convertToUserTime } from 'utils';
import Bubble from 'components/Bubble';
import AccountInfoMin from 'components/AccountInfoMin';
import BackButton from 'components/Buttons/BackButton';
import Loader from 'components/Loader';
import ElipsesAnimation from 'components/Elipses/ElipsesAnimation';
import { RiRefreshLine } from 'react-icons/ri';
import { TiCancel } from 'react-icons/ti';

function CurrentTask() {
  const { task_id, account_id } = useParams();
  const [currentAccount, setCurrentAccount] = useState(null);
  const [task, setTask] = useState();
  const [taskLoaded, setTaskLoaded] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    GetTask(task_id)
      .then((data) => setTask(data))
      .then(() => setTaskLoaded(true))
      .then(() => {
        if (task.status === 'IN_PROGRESS') {
          setInProgress(true);
        }
      });
    ShowAccount(account_id).then((data) => {
      setCurrentAccount(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account_id, task_id]);

  useEffect(() => {
    setInterval(() => {
      GetTask(task_id)
        .then((data) => setTask(data))
        .then(() => {
          if (task.status !== 'IN_PROGRESS') {
            setInProgress(false);
          }
        });
    }, 10000);
    clearInterval();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inProgress]);

  return (
    <div className="view-container">
      {task && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'start',
            gap: '1rem',
            width: '90%',
            maxWidth: '1000px',
            margin: 'auto',
            position: 'relative',
            top: '2rem',
          }}
        >
          <div style={{ display: 'flex', gap: '1rem' }}>
            <h1>{task.task_type}</h1>
            <Bubble
              htmlFor="status"
              num={task.status ? task.status : ''}
              name="Status"
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="rerun-button" title="Rerun">
              <RiRefreshLine size="30" />
            </button>
            <button className="cancel-button" title="Cancel">
              <TiCancel size="30" />
            </button>
          </div>
        </div>
      )}
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
                {task.status === 'ACTIVE' && (
                  <ElipsesAnimation font={40} width={'1.1rem'} />
                )}
                <div>Created: {convertToUserTime(task.date_created)}</div>
                <div>Scheduled: {convertToUserTime(task.date)}</div>
              </div>
              {currentAccount && (
                <AccountInfoMin
                  username={currentAccount.username}
                  platform={currentAccount.platform}
                  currentAccount={currentAccount.id}
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
                num={task.follows_sent ? task.follows_sent : 0}
                name="Follows Sent"
              />

              <Bubble
                htmlFor="likes-sent"
                num={task.likes_sent ? task.likes_sent : 0}
                name="Likes Sent"
              />

              <Bubble
                htmlFor="comments-sent"
                num={task.comments_sent ? task.comments_sent : 0}
                name="Comments Sent"
              />

              <Bubble
                htmlFor="messages-sent"
                num={task.messages_sent ? task.messages_sent : 0}
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
