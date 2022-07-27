import React, { useState, useEffect } from "react";
// NextUI Import
import {
  User,
  Button,
  Card,
  Input,
  Modal,
  Text,
  Row,
  Checkbox,
  Dropdown,
  Grid,
  Textarea,
} from "@nextui-org/react";
// CSS Import
import "./scss/account-styles.css";
// Component Import
import { Link } from "react-router-dom";
// APi Imports
import { FetchInstagramTaskTypes } from "../../api";
import TaskNext from "../../Components/TaskNext";

function Account() {
  const [controlsShown, setControlsShown] = useState(false);
  const [tasks, setTasks] = useState();
  const [tasksLoaded, setTasksLoaded] = useState();
  const [tasksSelected, setTasksSelected] = useState(false);
  const [selected, setSelected] = useState("");

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  useEffect(() => {
    FetchInstagramTaskTypes()
      .then((data) => setTasks(data))
      .then(() => setTasksLoaded(true));
  }, []);

  const logText = [
    "Woah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler text",
  ];

  const controlsStyle = {
    width: controlsShown ? "46%" : "0",
    position: "relative",
    left: controlsShown ? "0" : "-1000px",
    transition: "1s",
  };

  const screenStyle = {
    width: controlsShown ? "42%" : "97%",
    transition: "1s",
  };

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

    let fetchOptions = {
      //HTTP method set to POST.
      method: "POST",
      //Set the headers that specify you're sending a JSON body request and accepting JSON response
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // POST request body as JSON string.
      body: formDataJsonString,
    };

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
        <Button type="button" color="secondary" size="md" rounded>
          <Link to="/metrics" className="button">
            Metrics
          </Link>
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

      <div className="account-head-buttons">
        <Grid.Container gap={2}>
          <Grid sm={4} xs={12}>
            <Card variant="flat">
              <Card.Header>Utilization</Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text h2>97%</Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={4} xs={12}>
            <Card variant="flat">
              <Card.Header>Interactions Sent</Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text h2>367409</Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={4} xs={12}>
            <Card variant="flat">
              <Card.Header>Utilization</Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text h2>Bordered card.</Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </div>

      <div className="account-main">
        <Grid.Container gap={2}>
          <Card>
            <Card.Body>
              <div className="log-container" style={screenStyle}>
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
              {" "}
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
            >
              {!tasksSelected && <option value="">Select an option</option>}
              {tasksLoaded &&
                tasks.map((task) => (
                  <option key={task.id} value={task.id}>
                    {task.name}
                  </option>
                ))}
            </select>

            {tasksSelected &&
              tasks[Number(selected - 1)].arguments.map((arg) => {
                return arg.input_type === "textArea" ? (
                  <Textarea
                    key={arg.id}
                    name={arg.label}
                    className="form-control"
                    placeholder="Enter text here"
                  >
                    {arg.label}
                  </Textarea>
                ) : (
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
                );
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
