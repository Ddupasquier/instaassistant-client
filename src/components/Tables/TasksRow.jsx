import React from 'react';
import { Link, useParams } from 'react-router-dom';
import 'views/Accounts/scss/accounts-styles.css';

// * STYLED COMPONENTS
import { Tr, Task } from 'components/styled.js';

// * UTILS IMPORTS
import { convertToUserTime } from 'utils';

// * ICON IMPORTS
// import { AiOutlineMessage } from 'react-icons/ai';
// import { FaRegEnvelopeOpen } from 'react-icons/fa';
// import { FiHeart, FiUserPlus, FiUserMinus } from 'react-icons/fi';
/**
 * @function TasksRow
 * @description Renders a row for each task
 * @param tasks object
 * @returns row for user account
 */
function TasksRow({ i, task }) {
  const { account_id } = useParams();
  return (
    <Tr key={task.id} role="row" aria-rowindex={i}>
      {/* <td>
        {task.id}
      </td> */}
      <td className="username-column" aria-label="username-cell" role="cell">
        {task.task_type}
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
      <td className="config-column" aria-label="config-cell" role="cell">
        {task.likes_sent}
        {task.comments_sent}
        {task.follows_sent}
        {task.messages_sent}
      </td>
      <td className="actions-column" aria-label="actions-cell" role="cell">
        <Link to={`/accounts/instagram/${account_id}/tasks/${task.id}`}>
          <Task size="20" />
        </Link>
      </td>
    </Tr>
  );
}

export default TasksRow;
