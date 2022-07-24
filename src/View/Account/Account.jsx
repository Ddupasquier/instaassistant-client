/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react';
import { User, Button } from '@nextui-org/react';
import './scss/account-styles.css';
import { Link } from 'react-router-dom';
import { FetchInstagramTaskTypes } from '../../api';

function Account() {
  const [controlsShown, setControlsShown] = useState(false);
  const [tasks, setTasks] = useState();
  const [tasksLoaded, setTasksLoaded] = useState();
  const [tasksSelected, setTasksSelected] = useState(false);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    FetchInstagramTaskTypes()
      .then((data) => setTasks(data))
      .then(() => setTasksLoaded(true));
  }, []);

  const logText = [
    'Woah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler textWoah Lots and lots of filler text',
  ];

  const controlsStyle = {
    width: controlsShown ? '46%' : '0',
    position: 'relative',
    left: controlsShown ? '0' : '-1000px',
    transition: '1s',
  };

  const screenStyle = {
    width: controlsShown ? '42%' : '97%',
    transition: '1s',
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
    setTasksSelected(true);
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

      <div className="account-main">
        <div className="account-controls outset" style={controlsStyle}>
          <form>
            <select
              name="options"
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
            <br />
            {/* <input type="text" placeholder="param-one" className="param-one" /> */}

            {tasksSelected &&
              tasks[Number(selected - 1)].arguments.map((arg) => (
                <input
                  key={arg.id}
                  // value={arg.id}
                  type={arg.input_type}
                  placeholder={arg.label}
                />
              ))}

            <br />
            <textarea
              type="text"
              placeholder="param-two"
              className="param-two"
            />
          </form>
        </div>
        <div className="log-container" style={screenStyle}>
          <div className="log inset">
            <Button
              type="button"
              color="warning"
              size="sm"
              rounded
              onClick={() => setControlsShown(!controlsShown)}
              className="log-button"
            >
              {controlsShown ? 'Hide Controls' : 'Add Rules'}
            </Button>
            <h3>Activity Log:</h3>
            <br />
            {logText[0]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
