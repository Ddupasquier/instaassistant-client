import React, { useEffect, useState } from 'react';
import { Modal, Textarea, Switch, Input, Button, Text, Checkbox } from '@nextui-org/react';
import { PostTask } from '../../api';

const TaskModalNew = ({
  closeTaskHandler,
  taskVisible,
  handleChange,
  selected,
  tasksSelected,
  tasks,
  tasksLoaded,
  account_id
}) => {

  const [todaysDate, setTodaysDate] = useState()
  const [date, setDate] = useState()

  const [task, setTask] = useState();
  const [listTarget, setListTarget] = useState();
  const [listType, setListType] = useState();
  const [action, setAction] = useState();
  const [schedule, setSchedule] = useState(false);

  useEffect(() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    setTodaysDate(dd + '-' + mm + '-' + yyyy)
    setDate(todaysDate)
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();
    let form = e.currentTarget;
    let formFields = new FormData(form);
    let formDataObject = Object.fromEntries(formFields.entries());
    let formDataJsonString = JSON.stringify(formDataObject);
    
    const args = []
    for (const [key, value] of Object.entries(JSON.parse(formDataJsonString))) {
      args.push(value);
    }

    let taskname = ""
    tasks.forEach((task) => {
      if (parseInt(task.id) === parseInt(args[0])) {
        taskname = task.name
      }  
    })

    const payload = {
      account_id: account_id,
      schedule: schedule,
      date: date == null ? todaysDate : date,
      task_type: action,
      list_type: `${listTarget}:${listType}`,
      list_url: "",
      arguments: args.join(";")
    }
    console.log(payload);
    //PostTask(payload)
  };

  return (
    <>
      <Modal
        closeButton
        blur
        preventClose
        aria-labelledby="modal-title"
        open={taskVisible}
        onClose={closeTaskHandler}
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
          <h3>What would you like to schedule?</h3>
                <h5>Action</h5>
                <select
                  name="TaskType"
                  className="options"
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                  style={{
                    backgroundColor: "gray",
                    borderRadius: "1rem",
                    padding: ".3rem",
                  }}
                >
                  <option value="" style={{ color: "black" }}>
                    Select Action
                  </option>
                  <option value="Post" style={{ color: "black" }}>
                    Post - Coming Soon
                  </option>
                  <option value="Interact" style={{ color: "black" }}>
                    Interact
                  </option>
                  <option value="Like" style={{ color: "black" }}>
                    Like
                  </option>
                  <option value="Comment" style={{ color: "black" }}>
                    Comment
                  </option>
                  <option value="Follow" style={{ color: "black" }}>
                    Follow
                  </option>
                  <option value="Message" style={{ color: "black" }}>
                    Message
                  </option>
                  <option value="Black List" style={{ color: "black" }}>
                    Black List
                  </option>
                  <option value="White List" style={{ color: "black" }}>
                    White List
                  </option>
                </select>
                
          { action === "Post" ? (
            <input
              status="secondary"
              alt="upload image"
              type="file"
              accept=".jpg, .JPG, .JPEG, .png"
              className="form-control"
            />
          ) : (
            <>
              <h5>List</h5>

              <select
                name="Target"
                className="options"
                value={listTarget}
                onChange={(e) => setListTarget(e.target.value)}
                style={{
                  backgroundColor: "gray",
                  borderRadius: "1rem",
                  padding: ".3rem",
                }}
              >
                <option value="" style={{ color: "black" }}>
                  Select List Target
                </option>
                <option value="Account" style={{ color: "black" }}>
                  Account
                </option>
                <option value="Post" style={{ color: "black" }}>
                  Post
                </option>
              </select>
              &nbsp;{" --> "}&nbsp;
              <select
                name="TaskType"
                className="options"
                value={listType}
                onChange={(e) => setListType(e.target.value)}
                style={{
                  backgroundColor: "gray",
                  borderRadius: "1rem",
                  padding: ".3rem",
                }}
              >
                <option value="" style={{ color: "black" }}>
                  Select Target Type
                </option>
                {listTarget == "Account" ? (
                  <>
                    <option value="Followers" style={{ color: "black" }}>
                      Followers
                    </option>
                    <option value="Following" style={{ color: "black" }}>
                      Following
                    </option>
                    <option value="Recent Post" style={{ color: "black" }}>
                      Recent Post
                    </option>
                  </>
                ) : (
                  <>
                    {" "}
                    <option value="" style={{ color: "black" }}>
                      Interactors
                    </option>
                    <option value="" style={{ color: "black" }}>
                      Likers
                    </option>
                    <option value="" style={{ color: "black" }}>
                      Commenters
                    </option>
                  </>
                )}
              </select>
              {listTarget === "Account" && (
                <Input
                  status="secondary"
                  bordered
                  labelPlaceholder="Username or account URL"
                  type="text"
                  className="form-control"
                />
              )}
              {listTarget === "Post" && (
                <Input
                  status="secondary"
                  bordered
                  labelPlaceholder="Post URL"
                  type="text"
                  className="form-control"
                />
              )}
              <br />
              {/*! if message interact comment */}
              <Textarea
                bordered
                color="secondary"
                labelPlaceholder="Bordered Textarea"
              />
            </>
          )}
          <br />
          <Checkbox isSelected={schedule} onChange={setSchedule}>
            Schedule
          </Checkbox>
          <p>
            <em>Leave unselected to have this task run immediately</em>
          </p>
          {schedule && (
            <input
              type="datetime-local"
              id="meeting-time"
              name="meeting-time"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              min={date}
              max="2023-01-01T00:00"
            />
          )}
          </Modal.Body>
          <Modal.Footer>
            <Button rounded color="error" onPress={closeTaskHandler}>
              Close
            </Button>
            <Button rounded type="submit">
              RUN
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default TaskModalNew;
