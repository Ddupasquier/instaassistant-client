import React, { useState, useEffect } from 'react';
// NextUI Import
import {
  User,
  Button,
  Card,
  Input,
  Modal,
  Text,
  Grid,
  Textarea,
  Switch,
  Progress,
} from '@nextui-org/react';
// CSS Import
import './scss/account-styles.css';
// Component Import
import { Link } from 'react-router-dom';
// APi Imports
import { FetchInstagramTaskTypes } from '../../api';
// import TaskNext from '../../Components/TaskNext';
import { ChartPlaceHold } from '../../Components/ChartPlaceHold';
// import PieChartPlaceHold from '../../Components/PieChartPlaceHold';

function Account() {
  const [tasks, setTasks] = useState();
  const [tasksLoaded, setTasksLoaded] = useState();
  const [tasksSelected, setTasksSelected] = useState(false);
  const [selected, setSelected] = useState('');
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
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

  const HandleSubmit = (e) => {
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
          onPress={handler}
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
          <User
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
                    <Button auto>Progress</Button>
                  </Link>
                  <Button auto flat color="error">
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
                  <Grid sm={11}>
                    <Progress color="primary" value={92} />
                  </Grid>
                  <Grid sm={1}>
                    <div>
                      <Text>92%</Text>
                    </div>
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
                Follower / Following - Day | Week | Month
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <ChartPlaceHold />
              </Card.Body>
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
                    onPress={handler}
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
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Start a
            <Text b size={18}>
              {' '}
              New Task
            </Text>
          </Text>
        </Modal.Header>
        <form onSubmit={HandleSubmit}>
          <Modal.Body>
            <select
              name="TaskType"
              className="options"
              value={selected}
              onChange={handleChange}
              style={{
                backgroundColor: 'gray',
                borderRadius: '1rem',
                padding: '.3rem',
              }}
            >
              {!tasksSelected && (
                <option value="" style={{ color: 'black' }}>
                  Select an option
                </option>
              )}
              {tasksLoaded &&
                tasks.map((task) => (
                  <option
                    key={task.id}
                    value={task.id}
                    style={{ color: 'black' }}
                  >
                    {task.name}
                  </option>
                ))}
            </select>
            <br />
            {tasksSelected &&
              tasks[Number(selected - 1)].arguments.map((arg) => {
                if (arg.input_type === 'textarea') {
                  return (
                    <Textarea
                      bordered
                      key={arg.label}
                      name={arg.label}
                      labelPlaceholder={arg.label}
                      className="form-control"
                      status="secondary"
                      aria-label={arg.label}
                      aria-required="true"
                    ></Textarea>
                  );
                } else if (arg.input_type === 'bool') {
                  return <Switch />;
                } else if (arg.input_type === 'date') {
                  return <Input width="186px" label="Date" type="date" />;
                } else if (arg.input_type === 'time') {
                  return <Input width="186px" label="Time" type="time" />;
                } else {
                  return (
                    <>
                      <Input
                        status="secondary"
                        bordered
                        labelPlaceholder={arg.label}
                        helperText={arg.desc}
                        name={arg.label}
                        key={arg.id}
                        type={arg.input_type}
                        className="form-control"
                        placeholder={arg.label}
                      />
                      <br />
                    </>
                  );
                }
              })}
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onPress={closeHandler}>
              Close
            </Button>
            <Button auto type="submit">
              RUN
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default Account;
