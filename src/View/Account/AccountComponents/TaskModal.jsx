import React from 'react';
import { Modal, Textarea, Switch, Input, Button, Text } from '@nextui-org/react';
import { PostTask } from '../../../api';

const TaskModal = ({
  closeTaskHandler,
  taskVisible,
  handleChange,
  selected,
  tasksSelected,
  tasks,
  tasksLoaded,
  account_id
}) => {

  const handleSubmit = (e) => {
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
    
    const body = {
      account_id: account_id,
      task_type: taskname,
      arguments: args.join(";")
    }
    console.log(body);
    PostTask(body)
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
        <form onSubmit={handleSubmit}>
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

export default TaskModal;
