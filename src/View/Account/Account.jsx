import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// * ------- API LAYER ------- *
import { FetchInstagramTaskTypes, ShowAccount } from 'api';

// * ------- STYLES ------- *
import { Button, Card, Grid } from '@nextui-org/react';
import './scss/account-styles.css';

// * ------- COMPONENTS ------- *
import { UserIcon } from 'Components/UserIcon';
import TaskModalNew from './TaskModalNew';
import Utilization from './AccountComponents/Utilization';
import Interactions from './AccountComponents/Interactions';
import FollowerGain from './AccountComponents/FollowerGain';
import TasksRunning from './AccountComponents/TasksRunning';
import MetricChart from './AccountComponents/MetricChart';
import InteractionLimits from './AccountComponents/InteractionLimits';
import TaskModal from './AccountComponents/TaskModal';
import ConfigPopup from './AccountComponents/ConfigPopup';

function Account() {
  // * ------- ROUTE HANDLE ------- *
  const { account_id } = useParams();
  // const [account, setAccount] = useState({})
  const [active, setActive] = useState(true);

  // accounts handling / mapping
  const [currentAccount, setCurrentAccount] = useState({});
  // move config state back into this component

  useEffect(() => {
    ShowAccount(account_id).then((data) => {
      setCurrentAccount(data);
    });
  }, [account_id]);

  // * ------- TASK FOR AND MODULE HANDLERS ------- *

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
          <Utilization />
          <Interactions />
          <FollowerGain />
          <InteractionLimits />
          <MetricChart />
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
      <ConfigPopup />
    </div>
  );
}

export default Account;
