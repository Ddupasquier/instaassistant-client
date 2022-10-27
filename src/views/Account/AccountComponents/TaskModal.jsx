import React, { useState, useContext } from 'react';
import {
  Modal,
  Textarea,
  Input,
  Button,
  Text,
  styled,
} from '@nextui-org/react';
import { PostTask } from 'api';
import { IconsQuestionMark } from 'components/icons/icons';
import { TaskModalContext } from 'contexts/modalContext';

// * ------- CONSTANTS ------- * //
import {
  actions,
  listTargets,
  accountListTypes,
  postListTypes,
} from './constants';

// * ------- UTILS ------- * //
import { today, thisTime } from 'utils';
import DropDown from 'components/DropDown';

function TaskModal({ account_id }) {
  const { isTaskModalOpen, closeTaskHandler } = useContext(TaskModalContext);

  const [actionSelected, setActionSelected] = useState('');
  const [listTargetSelected, setListTargetSelected] = useState('');
  const [listTypeSelected, setListTypeSelected] = useState('');
  const [schedule, setSchedule] = useState(false);

  const TimeStyle = styled('input', {
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    fontSize: '1.2rem',
    color: 'black',
    backgroundColor: 'white',
    padding: '0.5rem',
  });

  const DateStyle = styled('input', {
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    fontSize: '1.2rem',
    color: 'black',
    backgroundColor: 'white',
    padding: '0.5rem',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log('data', data);
    const scheduledDate = new Date(`${data.date} ${data.time}`).toUTCString();
    const notScheduled = new Date().toUTCString();
    const payload = {
      account_id,
      task_type: data.Action,
      list_type: `${data.ListTarget}:${data.ListType}`,
      target_url: data.targetUrl,
      custom_messages: data.customMessages,
      custom_comments: data.customComments,
      schedule,
      date: schedule ? scheduledDate : notScheduled,
      date_created: notScheduled,
    };
    console.log('payload', payload);
    const res = PostTask(payload);
    if (res.error) {
      console.log(res.error);
      // alert(
      //   'Something went wrong. Please try again in a few minutes!',
      //   res.error
      // );
    } else {
      closeTaskHandler();
    }
  };

  return (
    <Modal
      closeButton
      blur
      preventClose
      width="600px"
      aria-labelledby="modal-title"
      open={isTaskModalOpen}
      onClose={closeTaskHandler}
    >
      <Modal.Header>
        <Text id="modal-title" h3>
          Start a New Task
        </Text>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body css={{ gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '.5rem' }}>
            Action
            <IconsQuestionMark
              content="Choose the action you would like your account to take."
              local="right"
            />
          </div>

          <DropDown
            options={actions}
            setter={setActionSelected}
            name={'Action'}
          />
          {actionSelected && (
            <DropDown
              options={listTargets}
              setter={setListTargetSelected}
              name={'ListTarget'}
            />
          )}
          {listTargetSelected && (
            <DropDown
              options={
                listTargetSelected === 'Account'
                  ? accountListTypes
                  : postListTypes
              }
              setter={setListTypeSelected}
              name={'ListType'}
            />
          )}

          {listTypeSelected && (
            <>
              <Input
                labelPlaceholder="Target URL"
                name="targetUrl"
                status="secondary"
                type="text"
                bordered
                required
              />
              <div style={{ display: 'flex', gap: '.5rem' }}>
                Optional Arguments
                <IconsQuestionMark
                  content="Optional arguments will overwrite your config for this task alone."
                  local="right"
                />
              </div>
              <Textarea
                labelPlaceholder="Custom Message(s)"
                name="customMessages"
                type="text"
                bordered
                color="secondary"
              />
              <Textarea
                labelPlaceholder="Custom Comment(s)"
                name="customComments"
                type="text"
                bordered
                color="secondary"
              />
              <div
                style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}
              >
                <label
                  htmlFor="schedule"
                  style={{ display: 'flex', gap: '.5rem' }}
                >
                  <input
                    type="checkbox"
                    name="schedule"
                    onChange={() => setSchedule(true)}
                  />
                  Schedule?
                </label>
                {schedule && (
                  <>
                    <DateStyle
                      defaultValue={today}
                      type="date"
                      name="date"
                      min={today}
                      style={{ width: '100%' }}
                    />
                    <TimeStyle
                      defaultValue={thisTime}
                      type="time"
                      name="time"
                      min={thisTime}
                      style={{ width: '100%' }}
                    />
                  </>
                )}
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button rounded color="warning" onPress={closeTaskHandler}>
            Cancel
          </Button>
          <Button
            rounded
            color="secondary"
            type="submit"
            disabled={!actionSelected}
          >
            Run
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default TaskModal;
