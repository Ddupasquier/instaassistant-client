import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// * ------- API LAYER ------- *
import { getSnapshots, GetTasks, ShowAccount } from 'api';

import { Grid, Loading } from '@nextui-org/react';
import './scss/account-styles.css';

// * ------- COMPONENTS ------- *
import Utilization from './AccountComponents/Utilization';
import Interactions from './AccountComponents/Interactions';
import FollowerGain from './AccountComponents/FollowerGain';
import MetricChart from './AccountComponents/MetricChart';
import InteractionLimits from './AccountComponents/InteractionLimits';
import ConfigPopup from './AccountComponents/ConfigPopup';
import DeleteConfirm from 'components/DeleteConfirm';

import TaskModal from './AccountComponents/TaskModal';
import { TasksRunning } from '.';

import AccountInfo from 'components/AccountInfo';

function Account() {
  // * ------- DESCTRUCTURING URL PARAMS ------- *
  const { account_id } = useParams();

  // * ------- TASK FORM AND MODAL HANDLERS ------- *
  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);
  const [taskVisible, setTaskVisible] = useState(false);

  const handleDeleteConfirmVisible = () => setDeleteConfirmVisible(true);
  const taskHandler = () => setTaskVisible(true);

  const closeDeleteConfirmHandler = () => {
    setDeleteConfirmVisible(false);
  };
  const closeTaskHandler = () => {
    setTaskVisible(false);
  };

  // * ------- STATE ------- *
  const [currentAccount, setCurrentAccount] = useState(null);
  const [snapshots, setSnapshots] = useState([
    { followers: 9999, following: 99999, profile_pic: '' },
  ]);
  const [tasks, setTasks] = useState([]);
  const [runningTask, setRunningTask] = useState(0);
  const [utilization, setUtilization] = useState(0);
  const [interactions, setInteractions] = useState(0);
  const [followersGained, setFollowersGained] = useState(0);
  const [follows, setFollows] = useState(0);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [messages, setMessages] = useState(0);

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
        setRunningTask(data[0].id);
      } else {
        setTasks([]);
      }
    });
  }, [account_id]);

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
        const msg = currentAccount.comments.split(',');
        setUtilization(msg.length > 5 ? (util += 10) : util);
      }

      if (currentAccount.comments !== null) {
        const comms = currentAccount.comments.split(',');
        setUtilization(comms.length > 5 ? (util += 10) : util);
      }

      setUtilization(tasks.length > 7 ? (util += 10) : util);
    }

    setFollowersGained(
      snapshots[snapshots.length - 1].followers - snapshots[0].followers
    );
  }, [currentAccount, snapshots, tasks]);

  if (currentAccount === null || snapshots === null) {
    return (
      <Loading
        size="xl"
        style={{ position: 'absolute', top: '50%', left: '50%' }}
      />
    );
  } else {
    return (
      <div className="account-container">
        <Grid.Container
          justify="center"
          gap="2"
          css={{ alignItems: 'stretch' }}
        >
          <>
            <AccountInfo
              handleDeleteConfirmVisible={handleDeleteConfirmVisible}
              currentAccount={currentAccount}
              taskHandler={taskHandler}
              snapshots={snapshots}
            />
            <TasksRunning
              tasksActive={currentAccount.active}
              task={runningTask}
            />
          </>
        </Grid.Container>

        <div>
          <Grid.Container gap={2}>
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
          </Grid.Container>
        </div>
        <TaskModal
          closeTaskHandler={closeTaskHandler}
          taskVisible={taskVisible}
          account_id={account_id}
        />
        <ConfigPopup currentAccount={currentAccount} account_id={account_id} />
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
