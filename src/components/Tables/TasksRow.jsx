import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'views/Accounts/accounts-styles.scss';

import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { MdOutlineSchedule } from 'react-icons/md';

// * STYLED COMPONENTS
import { Tr, TaskCell } from 'components/styled.js';

// * UTILS IMPORTS
import { convertToUserTime } from 'utils';
import ElipsesAnimation from 'components/Elipses/ElipsesAnimation';

const checkStatus = (status) => {
  if (status === 'IN_PROGRESS') {
    return <ElipsesAnimation font={20} />;
  } else if (status === 'COMPLETED') {
    return <FaCheckCircle style={{ color: 'green', fontSize: '1.5rem' }} />;
  } else if (status === 'FAILED' || status === 'ABORTED') {
    return <FaTimesCircle style={{ color: 'red', fontSize: '1.5rem' }} />;
  } else if (status === 'SCHEDULED') {
    return <MdOutlineSchedule style={{ fontSize: '1.5rem' }} />;
  }
};
/**
 * @function checkStatus
 * @param {string} status
 * @returns {JSX} icon
 * @description
 * This function checks the status of the task and returns the appropriate icon
 * based on the status.
 */

/**
 * @function TasksRow
 * @description Renders a row for each task
 * @param tasks object
 * @returns row for user account
 */
function TasksRow({ i, task, rowRef }) {
  const navigate = useNavigate();
  const { account_id } = useParams();

  return (
    <Tr
      key={task.id}
      role="row"
      aria-rowindex={i}
      ref={rowRef}
      onClick={() => {
        navigate(`/accounts/${account_id}/tasks/${task.id}`);
      }}
      css={{ cursor: 'pointer' }}
    >
      <td className="taskname-column" aria-label="username-cell" role="cell">
        <TaskCell to={`/accounts/${account_id}/tasks/${task.id}`}>
          {task.task_type}
        </TaskCell>
      </td>
      <td>{task.list_type}</td>
      <td aria-label="targeturl-cell" role="cell">
        {task.target_url}
      </td>
      <td aria-label="scheduled-date-cell" role="cell">
        {convertToUserTime(task.date)}
      </td>
      <td aria-label="date-created-cell" role="cell">
        {convertToUserTime(task.date_created)}
      </td>
      {/* <td className="actions-column" aria-label="actions-cell" role="cell">
        <Link to={`/accounts/${account_id}/tasks/${task.id}`}>
          <Task size="20" />
        </Link>
      </td> */}
      <td aria-label="status-cell" role="cell">
        {checkStatus(task.status)}
      </td>
    </Tr>
  );
}

export default TasksRow;
