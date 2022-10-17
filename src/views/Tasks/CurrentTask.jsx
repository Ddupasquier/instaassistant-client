import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetTask } from 'api';
import { Card, Text } from '@nextui-org/react';
import { convertToUserTime } from 'utils';
import Bubble from 'components/Bubble';

function CurrentTask() {
  const { task_id } = useParams();
  const [task, setTask] = useState();
  const [taskLoaded, setTaskLoaded] = useState(false);

  useEffect(() => {
    GetTask(task_id)
      .then((data) => setTask(data))
      .then(() => setTaskLoaded(true));
  }, [task_id]);

  return (
    <div className="view-container">
      <Card
        style={{ zIndex: 1 }}
        css={{
          background: '$myColor',
          width: '90%',
          backdropFilter: 'blur(15px)',
          margin: '3rem',
          overflow: 'auto',
        }}
      >
        {taskLoaded ? (
          <>
            <Card.Header css={{ gap: '1rem' }}>
              <h1>{task.task_type}</h1>
              <div>Created: {convertToUserTime(task.date_created)}</div>
              <div>Scheduled: {convertToUserTime(task.date)}</div>
            </Card.Header>
            <Card.Body
              css={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                background: '$myColor',
              }}
            >
              {/* <Card>{task.follows_sent}</Card> */}
              {/* <Card>{task.likes_sent}</Card> */}
              {/* <Card>{task.comments_sent}</Card> */}
              {/* <Card>{task.messages_sent}</Card> */}

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
                <br />
                Log Output
                <br />
                Log Output
                <br />
                {/* Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br />
                Log Output
                <br /> */}
              </Card.Body>
            </Card>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Card>
    </div>
  );
}

export default CurrentTask;
