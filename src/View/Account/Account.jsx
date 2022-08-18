import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
//API LAYER
import { FetchInstagramTaskTypes, ShowAccount } from '../../api';
//STYLES
import { Button, Card, Text, Grid, Progress, Table, Loading } from '@nextui-org/react';
import './scss/account-styles.css';

import { ChartPlaceHold } from '../../Components/ChartPlaceHold';
import TaskModal from './TaskModal';
import { UserIcon } from '../../Components/UserIcon';
import InteractionTable from './InteractionTable';
import TaskModalNew from './TaskModalNew';

function Account() {
  //Route Handle
  const { account_id } = useParams()
  const [account, setAccount] = useState({})
  const [active, setActive] = useState(true)
  
  // accounts handling / mapping
  const [currentAccount, setCurrentAccount] = useState({});
  const [lookalike, setLookalike] = useState();
  const [whiteList, setWhiteList] = useState();
  const [blackList, setBlackList] = useState();
  const [comments, setComments] = useState();
  const [messages, setMessages] = useState();

  const [allowLike, setAllowLike] = useState();
  const [allowFollow, setAllowFollow] = useState();
  const [allowComment, setAllowComment] = useState();
  const [allowMessage, setAllowMessage] = useState();

  useEffect(() => {
    ShowAccount(account_id).then((data) => {
      setCurrentAccount(data);
    });
  }, []);

  useEffect(() => {
    setAllowLike(
      currentAccount.allow_like === null ? false : currentAccount.allow_like
    );
    setAllowComment(
      currentAccount.allow_comment === null
        ? false
        : currentAccount.allow_comment
    );
    setAllowFollow(
      currentAccount.allow_follow === null ? false : currentAccount.allow_follow
    );
    setAllowMessage(
      currentAccount.allow_dm === null ? false : currentAccount.allow_dm
    );
    setLookalike(
      currentAccount.look_alike === null ? "" : currentAccount.look_alike
    );
    setWhiteList(
      currentAccount.white_list === null ? "" : currentAccount.white_list
    );
    setBlackList(
      currentAccount.black_list === null ? "" : currentAccount.black_list
    );
    setComments(
      currentAccount.comments === null ? "" : currentAccount.comments
    );
    setMessages(
      currentAccount.messages === null ? "" : currentAccount.messages
    );
  }, [currentAccount]);
  
  // ------ task form and module handlers ------
  const [tasks, setTasks] = useState();
  const [tasksLoaded, setTasksLoaded] = useState();
  const [tasksSelected, setTasksSelected] = useState(false);
  const [selected, setSelected] = useState('');
  const [taskVisible, setTaskVisible] = useState(false);
  const taskHandler = () => setTaskVisible(true);
  const closeTaskHandler = () => {
    setTaskVisible(false);
  };
  
  useEffect(() => {
    FetchInstagramTaskTypes()
      .then((data) => setTasks(data))
      .then(() => setTasksLoaded(true));
  }, []);

  const handleChange = (e) => {
    setSelected(e.target.value);
    setTasksSelected(true);
  };


  return (
    <div className="account-container">
      <div className="account-head-buttons">
        <Button type="button" color="secondary" size="md" rounded>
          <Link to="/accounts" className="button">
            Accounts
          </Link>
        </Button>
        <Button
          type="button"
          onPress={taskHandler}
          color="secondary"
          size="md"
          rounded
        >
          New task
        </Button>
        <Button type="button" color="secondary" size="md" rounded>
          <Link to={'/config/' + account_id} className="button">
            Edit Rules
          </Link>
        </Button>
      </div>

      <div className="user">
        <section>
          <UserIcon
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            name={`@${currentAccount.username}`}
            size="xl"
          />
        </section>
        <section>
          <legend>Followers</legend>
          <div className="followers">23.5 K</div>
        </section>
        <section>
          <legend>Following</legend>
          <div className="following">23.5 K</div>
        </section>
      </div>

      <div className="account-metrics">
        <Grid.Container gap={2}>
          {active && (
            <>
              <Grid sm={3} xs={12}></Grid>
              <Grid sm={6} xs={12}>
                <Card
                  variant="flat"
                  css={{
                    backdropFilter: 'saturate(200%) blur(15px)',
                    background: 'rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Card.Header>Task Currently Running</Card.Header>
                  <Card.Divider />
                  <Card.Body>
                    <Text h3>Activate: @Username</Text>
                  </Card.Body>
                  <Card.Footer>
                    <div className="task-buttons">
                      <Link to="/task">
                        <Button rounded>Progress</Button>
                      </Link>
                      <Button rounded flat color="error">
                        Abort
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Grid>
              <Grid sm={3} xs={12}></Grid>
            </>
          )}

          <Grid sm={4} xs={12}>
            <Card
              css={{
                backdropFilter: 'saturate(200%) blur(15px)',
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <Card.Header>Utilization - 30 Days</Card.Header>
              <Card.Divider />
              <Card.Body>
                <Grid.Container>
                  <Grid sm={2}>
                    <Text h2>92%</Text>
                  </Grid>
                  <Grid sm={12} xs={12}>
                    <Progress color="primary" value={92} />
                  </Grid>
                </Grid.Container>
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={4} xs={12}>
            <Card
              css={{
                backdropFilter: 'saturate(200%) blur(15px)',
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <Card.Header>Interactions Sent - 30 Days</Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text h2>367409</Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={4} xs={12}>
            <Card
              css={{
                backdropFilter: 'saturate(200%) blur(10px)',
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <Card.Header>Follower Gain - 30 Days</Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text h2>247</Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={4} xs={12}>
            <Card
              css={{
                backdropFilter: 'saturate(200%) blur(15px)',
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <Card.Header>Interaction Limits</Card.Header>
              <Card.Divider />
              <Card.Body>
              <InteractionTable />
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={8} xs={12}>
            <Card
              css={{
                minHeight: '200px',
                backdropFilter: 'saturate(200%) blur(15px)',
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <Card.Header>Follower / Following - Week | Month</Card.Header>
              <Card.Divider />
              <Card.Body>
                <ChartPlaceHold />
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </div>

      <div className="account-main">
        <Grid.Container gap={2}>
          <Card css={{ minHeight: '400px' }}>
            <Card.Body>
              <div className="log-container">
                <div className="log">
                  <Button
                    onPress={taskHandler}
                    type="button"
                    color="warning"
                    size="sm"
                    rounded
                    className="log-button"
                  >
                    Start New Task
                  </Button>
                  <h3>Activity Log:</h3>
                  <br />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Grid.Container>
      </div>
      <TaskModalNew
        taskHandler={taskHandler}
        closeTaskHandler={closeTaskHandler}
        taskVisible={taskVisible}
        handleChange={handleChange}
        selected={selected}
        tasksSelected={tasksSelected}
        tasks={tasks}
        tasksLoaded={tasksLoaded}
        account_id={account_id}
      />
    </div>
  );
}

export default Account;
