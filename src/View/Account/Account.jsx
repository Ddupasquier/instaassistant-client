import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// * ------- API LAYER ------- *
import { FetchInstagramTaskTypes, ShowAccount } from 'api';

// * ------- STYLES ------- *
import { Button, Card, Grid } from '@nextui-org/react';
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
  // * ------- ROUTE HANDLE ------- *
  const { account_id } = useParams();

  const [tasksActive, setTasksActive] = useState(true);

  // accounts handling / mapping
  const [currentAccount, setCurrentAccount] = useState({});


  useEffect(() => {
    ShowAccount(account_id).then((data) => {
      setCurrentAccount(data);
    });
  }, [account_id]);

  useEffect(() => {
    FetchInstagramTaskTypes()
      .then((data) => setTasks(data))
      .then(() => setTasksLoaded(true));
  }, []);

  // * ------- TASK FORM AND MODULE HANDLERS ------- *
  const [tasks, setTasks] = useState();
  const [tasksLoaded, setTasksLoaded] = useState();
  const [tasksSelected, setTasksSelected] = useState(false);
  const [selected, setSelected] = useState('');
  const [taskVisible, setTaskVisible] = useState(false);

  const taskHandler = () => setTaskVisible(true);
  const closeTaskHandler = () => {
    setTaskVisible(false);
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
    setTasksSelected(true);
  };

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
          <TasksRunning tasksActive={tasksActive} />
          <Utilization />
          <Interactions />
          <FollowerGain />
          <InteractionLimits />
          <MetricChart />
          <ActivityLog taskHandler={taskHandler} />
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

export default Account;
