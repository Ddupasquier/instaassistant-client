import React, { useState } from 'react';
import { Modal, Textarea, Input, Button, Text } from '@nextui-org/react';
import { PostTask } from 'api';
import { IconsQuestionMark } from 'Components/icons/icons';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

// * ------- CONSTANTS ------- * //
import {
  actions,
  listTargets,
  accountListTypes,
  postListTypes,
} from './constants';

// * ------- UTILS ------- * //
import { today, thisTime } from './utils';

function TaskModal({ closeTaskHandler, taskVisible, account_id }) {
  const [actionSelected, setActionSelected] = useState('');
  const [listTargetSelected, setListTargetSelected] = useState('');
  const [listTypeSelected, setListTypeSelected] = useState('');
  const [schedule, setSchedule] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const payload = {
      account_id: account_id,
      task_type: data.action,
      list_type: `${data.listTarget}:${data.listType}`,
      target_url: data.targetUrl,
      custom_messages: data.customMessages,
      custom_comments: data.customComments,
      schedule: schedule,
      date: schedule
        ? new Date(`${data.date} ${data.time}`).toUTCString()
        : new Date().toUTCString(),
    };
    PostTask(payload);
  };

  return (
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

          <select
            name="action"
            required
            style={{
              backgroundColor: 'gray',
              borderRadius: '1rem',
              padding: '.3rem',
            }}
            onChange={(e) => setActionSelected(e.target.value)}
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

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              gap: '.5rem',
              alignItems: 'center',
            }}
          >
            {actionSelected && (
              <select
                name="listTarget"
                required
                style={{
                  backgroundColor: 'gray',
                  borderRadius: '1rem',
                  padding: '.3rem',
                  width: '100%',
                }}
                onChange={(e) => setListTargetSelected(e.target.value)}
              >
                <option value="" style={{ color: 'black' }}>
                  Select List Target
                </option>
                {listTargets.map((listTarget, i) => (
                  <option
                    key={i}
                    value={listTarget.value}
                    style={{ color: 'black' }}
                  >
                    {listTarget.label}
                  </option>
                ))}
              </select>
            )}
            {listTargetSelected && (
              <>
                <div>
                  <BsFillArrowRightCircleFill />
                </div>

                <select
                  name="listType"
                  required
                  style={{
                    backgroundColor: 'gray',
                    borderRadius: '1rem',
                    padding: '.3rem',
                    width: '100%',
                  }}
                  onChange={(e) => setListTypeSelected(e.target.value)}
                >
                  <option value="" style={{ color: 'black' }}>
                    Select List Type
                  </option>
                  {listTargetSelected === 'Post'
                    ? postListTypes.map((listType, i) => (
                        <option
                          key={i}
                          value={listType.value}
                          style={{ color: 'black' }}
                        >
                          {listType.label}
                        </option>
                      ))
                    : accountListTypes.map((listType, i) => (
                        <option
                          key={i}
                          value={listType.value}
                          style={{ color: 'black' }}
                        >
                          {listType.label}
                        </option>
                      ))}
                </select>
              </>
            )}
          </div>

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
                    <input
                      defaultValue={today}
                      type="date"
                      name="date"
                      min={today}
                      style={{ width: '100%' }}
                    />
                    <input
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
          <Button rounded color="secondary" type="submit" disabled={actionSelected === '' ? true : false}>
            Run
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default TaskModal;
