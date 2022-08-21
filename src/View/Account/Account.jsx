import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// * ------- API LAYER ------- *
import { FetchInstagramTaskTypes, ShowAccount } from 'api';

// * ------- STYLES ------- *
import { Button, Card, Grid, Loading } from '@nextui-org/react';
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
import TaskModal from './AccountComponents/TaskModal';
import ConfigPopup from './AccountComponents/ConfigPopup';
import ActivityLog from './AccountComponents/ActivityLog';

function Account() {
  const chart = [
    {
      name: 'Page A',
      followers: 4000,
      following: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      followers: 3000,
      following: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      followers: 2000,
      following: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      followers: 2780,
      following: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      followers: 1890,
      following: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      followers: 2390,
      following: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      followers: 3490,
      following: 4300,
      amt: 2100,
    },
  ];

  //Route Handle
  const { account_id } = useParams();
  const [active, setActive] = useState(true);
  const [currentAccount, setCurrentAccount] = useState(null);
  // move config state back into this component

  useEffect(() => {
    ShowAccount(account_id).then((data) => {
      setCurrentAccount(data);
    });

    // get All tasks
    // get all snapshots
  }, [account_id]);

  // * ------- TASK FORM AND MODULE HANDLERS ------- *
  const [tasks, setTasks] = useState();
  const [tasksLoaded, setTasksLoaded] = useState();
  const [tasksSelected, setTasksSelected] = useState(false);
  const [selected, setSelected] = useState('');
  const [taskVisible, setTaskVisible] = useState(false);

  const [utilization, setUtilization] = useState(0);
  const [interations, setInteractions] = useState(0);
  const [followersGained, setFollowersGained] = useState(0);
  const [follows, setFollows] = useState(0);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [messages, setMessages] = useState(0);
  const [chartObj, setChartObj] = useState(chart);

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

  if (currentAccount === null) {
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
          <Link to={'/config/' + account_id} className="button">
            <Button type="button" color="secondary" size="md" rounded>
              Edit Rules
            </Button>
          </Link>
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
            <MetricChart obj={chartObj} />
          </Grid.Container>
        </div>

        <div className="account-main">
          {/* ! CONSIDER MERGING CURRENT TASKS AND ACTIVITY LOG SOMEHOW */}
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
        <ConfigPopup currentAccount={currentAccount} account_id={account_id} />
      </div>
    );
  }
}

export default Account;
