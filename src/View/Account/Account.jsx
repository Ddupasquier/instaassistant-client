import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// * ------- API LAYER ------- *
import {
  getSnapshots,
  GetTasks,
  ShowAccount,
} from 'api';

// * ------- STYLES ------- *
import { Button, Grid, Loading } from '@nextui-org/react';
import './scss/account-styles.css';

// * ------- COMPONENTS ------- *
import { UserIcon } from 'Components/UserIcon';
import TaskModalNew from './AccountComponents/TaskModalNew';
import Utilization from './AccountComponents/Utilization';
import Interactions from './AccountComponents/Interactions';
import FollowerGain from './AccountComponents/FollowerGain';
import TasksRunning from './AccountComponents/TasksRunning';
import MetricChart from './AccountComponents/MetricChart';
import InteractionLimits from './AccountComponents/InteractionLimits';
import ConfigPopup from './AccountComponents/ConfigPopup';
import ActivityLog from './AccountComponents/ActivityLog';

function Account() {
  const rows = [
    {
      key: '1',
      name: 'Tony Reichert',
      role: 'CEO',
      status: 'Active',
    },
    {
      key: '2',
      name: 'Zoey Lang',
      role: 'Technical Lead',
      status: 'Paused',
    },
    {
      key: '3',
      name: 'Jane Fisher',
      role: 'Senior Developer',
      status: 'Active',
    },
    {
      key: '4',
      name: 'William Howard',
      role: 'Community Manager',
      status: 'Vacation',
    },
  ];

  //Route Handle
  const { account_id } = useParams();
  const [currentAccount, setCurrentAccount] = useState(null);
  const [active, setActive] = useState(true);
  const [snapshots, setSnapshots] = useState([
    { followers: 9999, following: 99999, profile_pic: '' },
  ]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    ShowAccount(account_id).then((data) => {
      setCurrentAccount(data);
    });

    getSnapshots(account_id).then((data) => {
      if (data[0] != null) {
        setSnapshots(data);
      } else {
        setSnapshots([{ followers: 9999, following: 9999, profile_pic: '' }]);
      }
    });

    GetTasks(account_id).then((data) => {
      if (data[0] != null) {
        setTasks(data);
      } else {
        setTasks([]);
      }
    });
  }, [account_id]);

  // * ------- TASK FORM AND MODULE HANDLERS ------- *
  const [tasksLoaded, setTasksLoaded] = useState();
  const [tasksSelected, setTasksSelected] = useState(false);
  const [selected, setSelected] = useState('');
  const [taskVisible, setTaskVisible] = useState(false);

  // PAGE CONTROL
  const [utilization, setUtilization] = useState(0);
  const [interations, setInteractions] = useState(0);
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
      messages_sent += task.message_sent;
    });

    console.log(tasks)

    setFollows(follows_sent);
    setLikes(likes_sent);
    setComments(comments_sent);
    setMessages(messages_sent);
    setInteractions(follows_sent + likes_sent + comments_sent + messages_sent);

    setFollowersGained(
      snapshots[0].followers - snapshots[snapshots.length - 1].followers
    );
  }, [snapshots, tasks]);

  const taskHandler = () => setTaskVisible(true);

  const closeTaskHandler = () => {
    setTaskVisible(false);
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
    setTasksSelected(true);
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

        <div className="user">
          <section>
            <UserIcon
              src={
                snapshots ? snapshots[snapshots.length - 1].profile_pic : null
              }
              name={`@${currentAccount.username}`}
              size="xl"
            />
          </section>
          <section>
            <legend>Followers</legend>
            <div className="followers">
              {snapshots ? snapshots[snapshots.length - 1].followers : 99999}
            </div>
          </section>
          <section>
            <legend>Following</legend>
            <div className="following">
              {snapshots ? snapshots[snapshots.length - 1].following : 99999}
            </div>
          </section>
        </div>

        <div className="account-metrics">
          <Grid.Container gap={2}>
            <TasksRunning active={active} />
            <Utilization num={utilization} />
            <Interactions num={interations} />
            <FollowerGain num={followersGained} />
            <InteractionLimits
              follows={follows}
              likes={likes}
              comments={comments}
              messages={messages}
            />
            <MetricChart />
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
          tasksLoaded={tasksLoaded}
          account_id={account_id}
        />
        <ConfigPopup currentAccount={currentAccount} account_id={account_id} />
      </div>
    );
  }
}

export default Account;
