import React, { useState, useEffect } from 'react';
import './scss/account-styles.css';
import { FetchInstagramTaskTypes } from '../../api';

import { Button, Card, Text, Grid, Progress } from '@nextui-org/react';

import { Link } from 'react-router-dom';
import { ChartPlaceHold } from '../../Components/ChartPlaceHold';
import MetricModal from './MetricModal';
import TaskModal from './TaskModal';
import {UserIcon} from '../../Components/UserIcon';

function Account() {
  const [tasks, setTasks] = useState();
  const [tasksLoaded, setTasksLoaded] = useState();
  const [tasksSelected, setTasksSelected] = useState(false);
  const [selected, setSelected] = useState('');
  const [taskVisible, setTaskVisible] = useState(false);
  const [metricVisible, setMetricVisible] = useState(false);

  const metricHandler = () => setMetricVisible(true);
  const closeMetricHandler = () => {
    setMetricVisible(false);
  };

  const taskHandler = () => setTaskVisible(true);
  const closeTaskHandler = () => {
    setTaskVisible(false);
  };

  useEffect(() => {
    FetchInstagramTaskTypes()
      .then((data) => setTasks(data))
      .then(() => setTasksLoaded(true));
  }, []);

  const logText = [
    'Woah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler text',
  ];

  const handleChange = (e) => {
    setSelected(e.target.value);
    setTasksSelected(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.currentTarget;
    let formFields = new FormData(form);
    let formDataObject = Object.fromEntries(formFields.entries());
    // Format the plain form data as JSON
    let formDataJsonString = JSON.stringify(formDataObject);
    console.log(formDataJsonString);

    // * let fetchOptions = {
    //   //HTTP method set to POST.
    //   method: 'POST',
    //   //Set the headers that specify you're sending a JSON body request and accepting JSON response
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    //   // POST request body as JSON string.
    //   body: formDataJsonString,
    // };

    //! send enumerator change backend to accept index
    //Call the `postFormFieldsJson()` function
    //let responseData = await postFormFieldsAsJson({ url, formFields });
    /*{
	    "name": "activate",
	    "bot_id": 2,
	    "target": "postmalone",
	    "arguments": "N/A"
    }*/
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
          <Link to="/config" className="button">
            Edit Rules
          </Link>
        </Button>
      </div>

      <div className="user">
        <section>
          <UserIcon
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            name="@Username"
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
          <Grid sm={3} xs={12}></Grid>
          <Grid sm={6} xs={12}>
            <Card variant="flat">
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
          <Grid sm={4} xs={12}>
            <Card variant="flat">
              <Card.Header>Utilization - Lifetime | 30 Days</Card.Header>
              <Card.Divider />
              <Card.Body>
                <Grid.Container>
                  <Grid sm={12} xs={12}>
                    <Progress color="primary" value={92} />
                  </Grid>
                  <Grid sm={2}>
                    <Text>92%</Text>
                  </Grid>
                </Grid.Container>
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={4} xs={12}>
            <Card variant="flat">
              <Card.Header>Interactions Sent - Lifetime | 30 Days</Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text h2>367409</Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={4} xs={12}>
            <Card variant="flat">
              <Card.Header>Follower Gain - Lifetime | 30 Days</Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text h2>Bordered card.</Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={4} xs={12}>
            <Card variant="flat">
              <Card.Header>Interaction Limits</Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text h2>FOLLOWS: 657/1000 </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={4} xs={12}>
            <Card variant="flat" css={{ minHeight: '400px' }}>
              <Card.Header>
                Follower / Following - Day | Week | Month{' '}
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <ChartPlaceHold />
              </Card.Body>
              <Card.Divider />
              <Card.Footer css={{ justifyContent: 'center' }}>
                <Button
                  onClick={() => setMetricVisible(true)}
                  color="secondary"
                  rounded
                >
                  Expand
                </Button>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid sm={4} xs={12}>
            <Card variant="flat" css={{ minHeight: '400px' }}>
              <Card.Header>Post Scheduling</Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text h3>Coming Soon!</Text>
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
                  {logText[0]}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Grid.Container>
      </div>
      <TaskModal
        taskHandler={taskHandler}
        closeTaskHandler={closeTaskHandler}
        taskVisible={taskVisible}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        selected={selected}
        tasksSelected={tasksSelected}
        tasks={tasks}
        tasksLoaded={tasksLoaded}
      />
      <MetricModal
        metricHandler={metricHandler}
        closeMetricHandler={closeMetricHandler}
        metricVisible={metricVisible}
      />
    </div>
  );
}

export default Account;
