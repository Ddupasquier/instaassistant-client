import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// * ------- API LAYER ------- *
import { getSnapshots, GetTasks, ShowAccount } from 'api';

// * ------- STYLES ------- *
import { FiInstagram, FiSettings } from 'react-icons/fi';
import { IoLogoYoutube } from 'react-icons/io';
import { IoLogoTiktok } from 'react-icons/io5';
import { Button, Card, Dropdown, Grid, Loading, Text } from '@nextui-org/react';
import './scss/account-styles.css';

// * ------- COMPONENTS ------- *
import TaskModalNew from './AccountComponents/TaskModalNew';
import Utilization from './AccountComponents/Utilization';
import Interactions from './AccountComponents/Interactions';
import FollowerGain from './AccountComponents/FollowerGain';
import MetricChart from './AccountComponents/MetricChart';
import InteractionLimits from './AccountComponents/InteractionLimits';
import ConfigPopup from './AccountComponents/ConfigPopup';
import DeleteConfirm from 'Components/DeleteConfirm';
import Avatar from 'react-avatar';
// import { TasksRunning } from '.';

function Account({ darkTheme, theme }) {
  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);

  const handleDeleteConfirmVisible = () => setDeleteConfirmVisible(true);

  const closeDeleteConfirmHandler = () => {
    setDeleteConfirmVisible(false);
  };

  //Route Handle
  const { account_id } = useParams();
  const [currentAccount, setCurrentAccount] = useState(null);
  const [snapshots, setSnapshots] = useState([
    { followers: 9999, following: 99999, profile_pic: '' },
  ]);

  // console.log('from account', snapshots);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    ShowAccount(account_id).then((data) => {
      setCurrentAccount(data);
    });

    getSnapshots(account_id).then((data) => {
      if (data[0]) {
        setSnapshots(data);
      }
    });

    GetTasks(account_id).then((data) => {
      if (data[0]) {
        setTasks(data);
      } else {
        setTasks([]);
      }
    });
  }, [account_id]);

  // * ------- TASK FORM AND MODULE HANDLERS ------- *
  const [tasksSelected, setTasksSelected] = useState(false);
  const [selected, setSelected] = useState('');
  const [taskVisible, setTaskVisible] = useState(false);

  // PAGE CONTROL
  const [utilization, setUtilization] = useState(0);
  const [interactions, setInteractions] = useState(0);
  const [followersGained, setFollowersGained] = useState(0);
  const [follows, setFollows] = useState(0);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [messages, setMessages] = useState(0);

  useEffect(() => {
    let follows_sent = 0;
    let likes_sent = 0;
    let comments_sent = 0;
    let messages_sent = 0;

    tasks.forEach((task) => {
      follows_sent += task.follows_sent;
      likes_sent += task.likes_sent;
      comments_sent += task.comments_sent;
      messages_sent += task.messages_sent;
    });

    setFollows(follows_sent);
    setLikes(likes_sent);
    setComments(comments_sent);
    setMessages(messages_sent);
    setInteractions(follows_sent + likes_sent + comments_sent + messages_sent);

    if (tasks && snapshots && currentAccount) {
      let util = 0;
      setUtilization(currentAccount.allow_follow ? (util += 5) : util);
      setUtilization(currentAccount.allow_like ? (util += 5) : util);
      setUtilization(currentAccount.allow_comment ? (util += 5) : util);
      setUtilization(currentAccount.allow_dm ? (util += 5) : util);
      if (currentAccount.messages !== null) {
        let msg = currentAccount.comments.split(',');
        setUtilization(msg.length > 5 ? (util += 10) : util);
      }

      if (currentAccount.comments !== null) {
        let comms = currentAccount.comments.split(',');
        setUtilization(comms.length > 5 ? (util += 10) : util);
      }

      setUtilization(tasks.length > 7 ? (util += 10) : util);
    }

    setFollowersGained(
       snapshots[snapshots.length - 1].followers - snapshots[0].followers
    );
  }, [currentAccount, snapshots, tasks]);

  const taskHandler = () => setTaskVisible(true);

  const closeTaskHandler = () => {
    setTaskVisible(false);
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
    setTasksSelected(true);
  };

  const platformIcon = () => {
    if (currentAccount.platform === 'INSTAGRAM') {
      return <FiInstagram size="20" />;
    } else if (currentAccount.platform === 'YOUTUBE') {
      return <IoLogoYoutube size="20" />;
    } else if (currentAccount.platform === 'TIKTOK') {
      return <IoLogoTiktok size="20" />;
    } else {
      return <FiInstagram size="20" />;
    }
  };

  if (currentAccount === null || snapshots === null) {
    return <Loading size="xl" />;
  } else {
    return (
      <div className="account-container">
        <div className="account-head-buttons">
          <Link to="/accounts">
            <Button color="secondary" size="md" rounded>
              Accounts
            </Button>
          </Link>
          <Button
            type="button"
            onPress={taskHandler}
            color="secondary"
            size="md"
            rounded
          >
            New task
          </Button>
        </div>
        <>
          <Grid.Container justify="center">
            {/* <Grid sm={3} xs={12}></Grid> */}
            <Grid sm={6} xs={9}>
              <Card
                css={{
                  backdropFilter: 'blur(15px)',
                  background: '$myColor',
                }}
              >
                <Card.Header css={{ position: 'relative' }}>
                  <div
                    style={{ position: 'absolute', top: '1rem', right: '1rem' }}
                  >
                    {platformIcon()}
                  </div>

                  <div className="user">
                    <section>
                      <Avatar
                        name={currentAccount.username}
                        round
                        value="25%"
                        size="65"
                        textSizeRatio={2}
                      />
                      <Text>@{currentAccount.username}</Text>
                    </section>
                    <section>
                      <legend>Posts</legend>
                      <div className="followers">
                        {snapshots
                          ? snapshots[snapshots.length - 1].posts
                          : 99999}
                      </div>
                    </section>
                    <section>
                      <legend>Followers</legend>
                      <div className="followers">
                        {snapshots
                          ? snapshots[snapshots.length - 1].followers
                          : 99999}
                      </div>
                    </section>
                    <section>
                      <legend>Following</legend>
                      <div className="following">
                        {snapshots
                          ? snapshots[snapshots.length - 1].following
                          : 99999}
                      </div>
                    </section>
                    <Dropdown>
                      <Dropdown.Button>
                        <FiSettings />
                      </Dropdown.Button>
                      <Dropdown.Menu color="primary" aria-label="User Actions">
                        <Dropdown.Item key="profile">
                          <Text
                            b
                            color="inherit"
                            onClick={taskHandler}
                            css={{ d: 'flex' }}
                          >
                            Create Task
                          </Text>
                        </Dropdown.Item>
                        <Dropdown.Item key="Edit">
                          <Link to={`/accounts/instagram/${account_id}/update`}>
                            <Text b color="inherit" css={{ d: 'flex' }}>
                              Edit Profile
                            </Text>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item key="Delete">
                          <Text
                            b
                            color="inherit"
                            css={{ d: 'flex' }}
                            onClick={handleDeleteConfirmVisible}
                          >
                            Delete
                          </Text>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Header>
              </Card>
            </Grid>
            {/* <Grid sm={3} xs={12}></Grid> */}
          </Grid.Container>
        </>

        <div className="account-metrics">
          <Grid.Container gap={2}>
            {/* {currentAccount.active && <TasksRunning active={'task'} />} */}

            <Utilization num={utilization} />
            <Interactions num={interactions} />
            <FollowerGain num={followersGained} />
            <InteractionLimits
              follows={follows}
              likes={likes}
              comments={comments}
              messages={messages}
            />
            <MetricChart snapshots={snapshots} />
            {/* <ActivityLog tasks={tasks} /> */}
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
          // tasksLoaded={tasksLoaded}
          account_id={account_id}
        />
        <ConfigPopup
          currentAccount={currentAccount}
          account_id={account_id}
          darkTheme={darkTheme}
          theme={theme}
        />
        <DeleteConfirm
          deleteConfirmVisible={deleteConfirmVisible}
          closeDeleteConfirmHandler={closeDeleteConfirmHandler}
          userInfo={currentAccount}
        />
      </div>
    );
  }
}

export default Account;
