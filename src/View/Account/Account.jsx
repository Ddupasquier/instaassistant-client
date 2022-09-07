import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// * ------- API LAYER ------- *
import { getSnapshots, GetTasks, ShowAccount } from 'api';

// * ------- STYLES ------- *
import { Button, Card, Grid, Loading } from '@nextui-org/react';
import './scss/account-styles.css';

// * ------- COMPONENTS ------- *
import { UserIcon } from 'Components/UserIcon';
import TaskModalNew from './AccountComponents/TaskModalNew';
import Utilization from './AccountComponents/Utilization';
import Interactions from './AccountComponents/Interactions';
import FollowerGain from './AccountComponents/FollowerGain';
// import TasksRunning from './AccountComponents/TasksRunning';
import MetricChart from './AccountComponents/MetricChart';
import InteractionLimits from './AccountComponents/InteractionLimits';
import ConfigPopup from './AccountComponents/ConfigPopup';
// import ActivityLog from './AccountComponents/ActivityLog';

function Account({ darkTheme, theme }) {
  //Route Handle
  const { account_id } = useParams();
  const [currentAccount, setCurrentAccount] = useState(null);
  // const [active, setActive] = useState(true);
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
  // const [tasksLoaded, setTasksLoaded] = useState();
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

    setFollows(follows_sent);
    setLikes(likes_sent);
    setComments(comments_sent);
    setMessages(messages_sent);
    setInteractions(follows_sent + likes_sent + comments_sent + messages_sent);
    
    if (tasks && snapshots && currentAccount){
      let util = 0
      console.log(currentAccount)
      setUtilization(currentAccount.allow_follow ? util += 5 : util)
      setUtilization(currentAccount.allow_like ? util += 5 : util)
      setUtilization(currentAccount.allow_comment ? util += 5 : util)
      setUtilization(currentAccount.allow_dm ? util += 5 : util)
      if (currentAccount.messages != null){
       let msg = currentAccount.comments.split(",")
        setUtilization(msg.length > 5 ? util += 10 : util)
      }
      
      if (currentAccount.comments != null){
        let comms = currentAccount.comments.split(",")
        setUtilization(comms.length > 5 ? util += 10 : util)
      }

      setUtilization(tasks.length > 7 ? util += 10 : util)
    }

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
                <Card.Header>
                  <div className="user">
                    <section>
                      <UserIcon
                        src={
                          snapshots
                            ? snapshots[snapshots.length - 1].profile_pic
                            : null
                        }
                        name={`@${currentAccount.username}`}
                        size="xl"
                      />
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
                  </div>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                  <div className="user-links">
                    <a href="/">Update Password</a>
                    <a href="/">Update Username</a>
                    <a href="/">Update Name</a>
                    <a href="/">Update Bio</a>
                  </div>
                </Card.Body>
              </Card>
            </Grid>
            {/* <Grid sm={3} xs={12}></Grid> */}
          </Grid.Container>
        </>

        <div className="account-metrics">
          <Grid.Container gap={2}>
            {/* <TasksRunning active={active} /> */}
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
          // tasksLoaded={tasksLoaded}
          account_id={account_id}
        />
        <ConfigPopup
          currentAccount={currentAccount}
          account_id={account_id}
          darkTheme={darkTheme}
          theme={theme}
        />
      </div>
    );
  }
}

export default Account;
