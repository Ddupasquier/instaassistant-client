import React, { useEffect, useState, useMemo } from 'react';
import {
  Modal,
  Textarea,
  Input,
  Button,
  Text,
  Checkbox,
  Dropdown,
} from '@nextui-org/react';
import { PostTask } from 'api';
import { IconsQuestionMark } from 'Components/icons/icons';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const TaskModalNew = ({ closeTaskHandler, taskVisible, account_id }) => {
  const [todaysDate, setTodaysDate] = useState();

  const [date, setDate] = useState();
  const [year, setYear] = useState();

  const [listTarget, setListTarget] = useState();
  const [listType, setListType] = useState();
  const [action, setAction] = useState();
  const [schedule, setSchedule] = useState(false);
  const [targetUrl, setTargetUrl] = useState();
  const [customMessages, setCustomMessages] = useState();
  const [customComments, setCustomComments] = useState();

  useEffect(() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    setYear(yyyy);
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
      date: !schedule
        ? todaysDate
        : `${selectedDay}-${selectedValue}-${year};${selectedHour}:00`,
      task_type: action,
      list_type: `${listTarget}:${listType}`,
      target_url: targetUrl,
      custom_messages: customMessages,
      custom_comments: customComments,
    };
    PostTask(payload);
  };

  const actions = [
    { value: '', label: 'Post - Coming Soon' },
    { value: 'Interact', label: 'Interact' },
    { value: 'Follow', label: 'Follow' },
    { value: 'Like', label: 'Like' },
    { value: 'Comment', label: 'Comment' },
    { value: 'Message', label: 'Message' },
    { value: '', label: 'Clean - Coming Soon' },
    { value: '', label: 'Black List - Coming Soon' },
    { value: '', label: 'White List - Coming Soon' },
  ];

  const [firstArgSelected, setFirstArgSelected] = useState(false);
  const [thirdArgSelected, setThirdArgSelected] = useState(false);

  //* DATE SELECTION
  const [month, setMonth] = useState(new Set(['Month']));
  const selectedValue = useMemo(
    () => Array.from(month).join(', ').replaceAll('_', ' '),
    [month]
  );

  const [day, setDay] = useState(new Set(['Day']));
  const selectedDay = useMemo(
    () => Array.from(day).join(', ').replaceAll('_', ' '),
    [day]
  );

  const [hour, setHour] = useState(new Set(['Hour']));
  const selectedHour = useMemo(
    () => Array.from(hour).join(', ').replaceAll('_', ' '),
    [hour]
  );

  // return THIS month
  const thisMonth = new Date().getMonth() + 1;

  // return THIS year
  const thisYear = new Date().getFullYear();

  const daysThisMonth = () => {
    const days = [];
    for (let i = 1; i <= new Date(thisYear, thisMonth, 0).getDate(); i++) {
      days.push(String(i));
    }
    return days;
  };

  const days = daysThisMonth().map((day) => {
    return <Dropdown.Item key={day}>{day}</Dropdown.Item>;
  });

  const hoursThisDay = () => {
    let i = 1;
    let count = 12;
    const hours = [];

    while (hours.length < 24) {
      if (count > 12) count = 1;
      if (i < 12) {
        hours.push(`${count}:00AM`);
      } else {
        hours.push(`${count}:00PM`);
      }
      i++;
      count++;
    }
    return hours;
  };

  const hours = hoursThisDay().map((hour, i) => {
    return <Dropdown.Item key={i}>{hour}</Dropdown.Item>;
  });

  const pastMonths = () => {
    const pastMonths = [];
    const today = new Date();
    const currentMonth = today.getMonth();
    for (let i = 0; i < currentMonth; i++) {
      pastMonths.push(String(i + 1));
    }
    return pastMonths;
  };

  const pastDays = () => {
    const pastDays = [];
    const today = new Date();
    const currentDay = today.getDate();
    for (let i = 0; i < currentDay; i++) {
      pastDays.push(String(i));
    }
    return pastDays;
  };

  const pastHours = () => {
    const pastHours = [];
    const today = new Date();
    const currentHour = today.getHours();
    for (let i = 0; i < currentHour; i++) {
      pastHours.push(String(i + 1));
    }
    return pastHours;
  };

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
            <div style={{ display: 'flex', gap: '.5rem' }}>
              Action
              <IconsQuestionMark
                content="Choose the action you would like your account to take."
                local="right"
              />
            </div>

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
              {actions.map((action, i) => (
                <option key={i} value={action.value} style={{ color: 'black' }}>
                  {action.label}
                </option>
              ))}
            </select>
            {/* <h5>Description:</h5>
            <p>action.description</p> */}
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
                {firstArgSelected && (
                  <>
                    <div style={{ display: 'flex', gap: '.5rem' }}>
                      List
                      <IconsQuestionMark
                        content="Choose the action you would like your account to take."
                        local="right"
                      />
                    </div>
                    <div
                      className="list-target-inputs"
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        gap: '1rem',
                      }}
                    >
                      <select
                        required
                        name="Target"
                        className="options"
                        value={listTarget}
                        onChange={(e) => {
                          setListTarget(e.target.value);
                        }}
                        style={{
                          backgroundColor: 'gray',
                          borderRadius: '1rem',
                          padding: '.3rem',
                          width: '100%',
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
                      <div>
                        <BsFillArrowRightCircleFill />
                      </div>
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
                          width: '100%',
                        }}
                      >
                        <option value="" style={{ color: 'black' }}>
                          Select Target Type
                        </option>
                        {listTarget === 'Account' && (
                          <>
                            <option
                              value="Followers"
                              style={{ color: 'black' }}
                            >
                              Followers
                            </option>
                            <option
                              value="Following"
                              style={{ color: 'black' }}
                            >
                              Following
                            </option>
                            <option
                              value="Recent Post"
                              style={{ color: 'black' }}
                            >
                              Recent Post
                            </option>
                          </>
                        )}

                        {listTarget === 'Post' && (
                          <>
                            {' '}
                            <option
                              value="Interactors"
                              style={{ color: 'black' }}
                            >
                              Interactors
                            </option>
                            <option value="Likers" style={{ color: 'black' }}>
                              Likers
                            </option>
                            <option
                              value="Commenters"
                              style={{ color: 'black' }}
                            >
                              Commenters
                            </option>
                          </>
                        )}
                      </select>
                      <br />
                    </div>

                    {listTarget === 'Account' && listType != null ? (
                      <Input
                        status="secondary"
                        bordered
                        required
                        label="Username or account URL"
                        type="text"
                        className="form-control"
                        value={targetUrl}
                        onChange={(e) => setTargetUrl(e.target.value)}
                      />
                    ) : null}

                    {listTarget === 'Post' && listType != null ? (
                      <Input
                        status="secondary"
                        bordered
                        required
                        labelPlaceholder="Post URL"
                        type="text"
                        className="form-control"
                        value={targetUrl}
                        onChange={(e) => setTargetUrl(e.target.value)}
                      />
                    ) : null}
                    {listTarget != null && listType != null ? (
                      <>
                        {action === 'Interact' ||
                        action === 'Message' ||
                        action === 'Comment' ? (
                          <div style={{ display: 'flex', gap: '.5rem' }}>
                            Optional Arguments
                            <IconsQuestionMark
                              content="Optional arguments will overwrite your config for this task alone."
                              local="right"
                            />
                          </div>
                        ) : null}
                        {action === 'Interact' || action === 'Message' ? (
                          <>
                            <br />
                            <Textarea
                              bordered
                              color="secondary"
                              labelPlaceholder="Custom Message(s)"
                              value={customMessages}
                              onChange={(e) =>
                                setCustomMessages(e.target.value)
                              }
                            />
                          </>
                        ) : null}
                        {action === 'Interact' || action === 'Comment' ? (
                          <>
                            <br />
                            <Textarea
                              bordered
                              color="secondary"
                              labelPlaceholder="Custom Comment(s)"
                              value={customComments}
                              onChange={(e) =>
                                setCustomComments(e.target.value)
                              }
                            />
                          </>
                        ) : null}
                      </>
                    ) : null}
                  </>
                )}
              </>
            )}
            {thirdArgSelected ? (
              <>
                <Checkbox isSelected={schedule} onChange={setSchedule}>
                  Schedule&nbsp;
                  <IconsQuestionMark
                    content="Leave unchecked to have this task run immediately"
                    local="right"
                  />
                </Checkbox>

                {schedule && (
                  <>
                    <div style={{ display: 'flex' }}>
                      <Dropdown>
                        <Dropdown.Button
                          flat
                          color="secondary"
                          css={{ tt: 'capitalize' }}
                        >
                          {selectedValue}
                        </Dropdown.Button>
                        <Dropdown.Menu
                          aria-label="Single selection actions"
                          color="secondary"
                          disallowEmptySelection
                          selectionMode="single"
                          selectedKeys={month}
                          onSelectionChange={setMonth}
                          disabledKeys={pastMonths()}
                        >
                          <Dropdown.Item key="1">January</Dropdown.Item>
                          <Dropdown.Item key="2">Febuary</Dropdown.Item>
                          <Dropdown.Item key="3">March</Dropdown.Item>
                          <Dropdown.Item key="4">April</Dropdown.Item>
                          <Dropdown.Item key="5">May</Dropdown.Item>
                          <Dropdown.Item key="6">June</Dropdown.Item>
                          <Dropdown.Item key="7">July</Dropdown.Item>
                          <Dropdown.Item key="8">August</Dropdown.Item>
                          <Dropdown.Item key="9">September</Dropdown.Item>
                          <Dropdown.Item key="10">October</Dropdown.Item>
                          <Dropdown.Item key="11">November</Dropdown.Item>
                          <Dropdown.Item key="12">December</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Button
                          flat
                          color="secondary"
                          css={{ tt: 'capitalize' }}
                        >
                          {selectedDay}
                        </Dropdown.Button>
                        <Dropdown.Menu
                          aria-label="Single selection actions"
                          color="secondary"
                          disallowEmptySelection
                          selectionMode="single"
                          selectedKeys={day}
                          onSelectionChange={setDay}
                          disabledKeys={pastDays()}
                        >
                          {days}
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Button
                          flat
                          color="secondary"
                          css={{ tt: 'capitalize' }}
                        >
                          {selectedHour}
                        </Dropdown.Button>
                        <Dropdown.Menu
                          aria-label="Single selection actions"
                          color="secondary"
                          disallowEmptySelection
                          selectionMode="single"
                          selectedKeys={hour}
                          onSelectionChange={setHour}
                          disabledKeys={pastHours()}
                        >
                          {hours}
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </>
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
