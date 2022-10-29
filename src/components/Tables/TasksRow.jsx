import React from 'react';
import { Link, useParams } from 'react-router-dom';
import 'views/Accounts/scss/accounts-styles.css';

// * STYLED COMPONENTS
import { Tr, Task, TaskCell } from 'components/styled.js';

// * UTILS IMPORTS
import { convertToUserTime } from 'utils';

/**
 * @function TasksRow
 * @description Renders a row for each task
 * @param tasks object
 * @returns row for user account
 */
function TasksRow({ i, task, rowRef }) {
  const { account_id } = useParams();

  return (
    <Tr
      key={task.id}
      role="row"
      aria-rowindex={i}
      ref={rowRef}
      onClick={() => {
        window.location.href = `/accounts/${account_id}/tasks/${task.id}`;
      }}
      css={{ cursor: 'pointer' }}
    >
      <td className="username-column" aria-label="username-cell" role="cell">
        <TaskCell
          to={`/accounts/${account_id}/tasks/${task.id}`}
          style={{ fontWeight: '700' }}
        >
          {task.task_type}
        </TaskCell>
      </td>
      <td>{task.list_type}</td>
      <td aria-label="platform-cell" role="cell">
        {task.target_url}
      </td>
      <td aria-label="tags-cell" role="cell">
        {convertToUserTime(task.date)}
      </td>
      <td aria-label="active-cell" role="cell">
        {convertToUserTime(task.date_created)}
      </td>
      <td className="actions-column" aria-label="actions-cell" role="cell">
        <Link to={`/accounts/${account_id}/tasks/${task.id}`}>
          <Task size="20" />
        </Link>
      </td>
    </Tr>
  );
}

export default TasksRow;
