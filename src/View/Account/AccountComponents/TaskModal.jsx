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

function TaskModal({ closeTaskHandler, taskVisible, account_id }) {
  const [actionSelected, setActionSelected] = useState('');
  const [listTargetSelected, setListTargetSelected] = useState('');
  const [listTypeSelected, setListTypeSelected] = useState('');
  const taskVisibleStandin = true;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // const payload = {
  //   account_id: account_id,
  //   schedule: schedule,
  //   date: !schedule
  //     ? todaysDate
  //     : `${selectedDay}-${selectedValue}-${year};${selectedHour}:00`,
  //   task_type: action,
  //   list_type: `${listTarget}:${listType}`,
  //   target_url: targetUrl,
  //   custom_messages: customMessages,
  //   custom_comments: customComments,
  // };
  // console.log(payload)
  // PostTask(payload);
  // };

  const handleSubmitt = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // const payload = {
    //   account_id: account_id,
    //   task_type: e.target.action.value,
    // };
    console.log(data);
    const payload = {
      account_id: account_id,
      task_type: data.action,
      list_type: data.listType,
      target_url: data.targetUrl,
      custom_messages: data.customMessages,
      custom_comments: data.customComments,
    };
  };

  return (
    <Modal
      closeButton
      blur
      preventClose
      width="600px"
      aria-labelledby="modal-title"
      open={taskVisibleStandin}
      onClose={closeTaskHandler}
    >
      <Modal.Header>
        <Text id="modal-title" h3>
          Start a New Task
        </Text>
      </Modal.Header>
      <form onSubmit={handleSubmitt}>
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
                name="targetURL"
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
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button rounded color="warning" onPress={closeTaskHandler}>
            Cancel
          </Button>
          <Button rounded color="secondary" type="submit">
            Run
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default TaskModal;
