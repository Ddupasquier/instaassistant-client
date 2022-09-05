import React, { useEffect, useState } from 'react';
import {
  Modal,
  Textarea,
  Input,
  Button,
  Text,
  Checkbox,
} from '@nextui-org/react';
import { PostTask } from 'api';

const TaskModalNew = ({
  closeTaskHandler,
  taskVisible,
  handleChange,
  selected,
  tasksSelected,
  tasks,
  tasksLoaded,
  account_id,
}) => {
  const [todaysDate, setTodaysDate] = useState();
  const [date, setDate] = useState();

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
    setTodaysDate(
      dd +
        '-' +
        mm +
        '-' +
        yyyy +
        ';' +
        today.getHours() +
        ':' +
        today.getMinutes()
    );
    setDate(todaysDate);
  }, [todaysDate]);

  const HandleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      account_id: account_id,
      schedule: schedule,
      date: date == null ? todaysDate : date,
      task_type: action,
      list_type: `${listTarget}:${listType}`,
      target_url: '',
      // arguments: args.join(';'),
    };
    console.log(payload);
    PostTask(payload);
  };

  const actions = [
    { value: 'Post', label: 'Post' },
    { value: 'Interact', label: 'Interact' },
    { value: 'Like', label: 'Like' },
    { value: 'Comment', label: 'Comment' },
    { value: 'Follow', label: 'Follow' },
    { value: 'Message', label: 'Message' },
    { value: 'Black List', label: 'Black List' },
    { value: 'White List', label: 'White List' },
  ];

  const [firstArgSelected, setFirstArgSelected] = useState(false);
  const [secondArgSelected, setSecondArgSelected] = useState(false);
  const [thirdArgSelected, setThirdArgSelected] = useState(false);

  return (
    <>
      <Modal
        closeButton
        blur
        preventClose
        width="600px"
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
        <form onSubmit={(e) => HandleSubmit(e)}>
          <Modal.Body>
            <h3>What would you like to schedule?</h3>
            <h5>Action</h5>
            <select
              name="TaskType"
              className="options"
              value={action}
              onChange={(e) => {
                setAction(e.target.value);
                setFirstArgSelected(true);
              }}
              style={{
                backgroundColor: 'gray',
                borderRadius: '1rem',
                padding: '.3rem',
              }}
            >
              <option value="" style={{ color: 'black' }}>
                Select Action
              </option>
              {actions.map((action) => (
                <option
                  key={action.value}
                  value={action.value}
                  style={{ color: 'black' }}
                >
                  {action.label}
                </option>
              ))}
            </select>
            {action === "Interact" || action === "Message" ? (<><br/><Textarea
              bordered
              color="secondary"
              labelPlaceholder="Custom Message(s)"
            /></>) : null}
            {action === "Interact" || action === "Comment" ? (<><br/><Textarea
              bordered
              color="secondary"
              labelPlaceholder="Custom Comment(s)"
            /></>) : null}
            {action === 'Post' ? (
              <input
                required
                status="secondary"
                alt="upload image"
                type="file"
                accept=".jpg, .JPG, .JPEG, .png"
                className="form-control"
              />
            ) : (
              <>
                {firstArgSelected ? (
                  <>
                    <h5>List</h5>

                    <select
                      required
                      name="Target"
                      className="options"
                      value={listTarget}
                      onChange={(e) => {
                        setListTarget(e.target.value);
                        setSecondArgSelected(true);
                      }}
                      style={{
                        backgroundColor: 'gray',
                        borderRadius: '1rem',
                        padding: '.3rem',
                      }}
                    >
                      <option value="" style={{ color: 'black' }}>
                        Select List Target
                      </option>
                      <option value="Account" style={{ color: 'black' }}>
                        Account
                      </option>
                      <option value="Post" style={{ color: 'black' }}>
                        Post
                      </option>
                    </select>
                  </>
                ) : null}
                {secondArgSelected ? (
                  <>
                    {listTarget === 'Account' && (
                      <Input
                        status="secondary"
                        bordered
                        label="Username or account URL"
                        type="text"
                        className="form-control"
                      />
                    )}
                    {listTarget === 'Post' && (
                      <Input
                        status="secondary"
                        bordered
                        labelPlaceholder="Post URL"
                        type="text"
                        className="form-control"
                      />
                    )}
                  <svg style={{fill: "white"}} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
                    <select
                      required
                      name="TaskType"
                      className="options"
                      value={listType}
                      onChange={(e) => {
                        setListType(e.target.value);
                        setThirdArgSelected(true);
                      }}
                      style={{
                        backgroundColor: 'gray',
                        borderRadius: '1rem',
                        padding: '.3rem',
                      }}
                    >
                      <option value="" style={{ color: 'black' }}>
                        Select Target Type
                      </option>
                      {listTarget === 'Account' ? (
                        <>
                          <option value="Followers" style={{ color: 'black' }}>
                            Followers
                          </option>
                          <option value="Following" style={{ color: 'black' }}>
                            Following
                          </option>
                          <option
                            value="Recent Post"
                            style={{ color: 'black' }}
                          >
                            Recent Post
                          </option>
                        </>
                      ) : (
                        <>
                          {' '}
                          <option value="Intewractors" style={{ color: 'black' }}>
                            Interactors
                          </option>
                          <option value="Likers" style={{ color: 'black' }}>
                            Likers
                          </option>
                          <option value="Commenters" style={{ color: 'black' }}>
                            Commenters
                          </option>
                        </>
                      )}
                    </select>
                    <br />
                  </>
                ) : null}
              </>
            )}
            {thirdArgSelected ? (
              <>
                <Checkbox isSelected={schedule} onChange={setSchedule}>
                  Schedule
                </Checkbox>

                <em>Leave unselected to have this task run immediately</em>

                {schedule && (
                  <input
                    type="datetime-local"
                    id="meeting-time"
                    name="meeting-time"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    min={date}
                    max="2023-01-01;00:00" 
                  />
                )}
              </>
            ) : null}
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
