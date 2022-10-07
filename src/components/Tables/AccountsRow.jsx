import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import "../../views/Accounts/scss/accounts-styles.css";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/ErrorFallback";

import useSWR from "swr";

// * NEXTUI IMPORTS
import { Text, Button, Input } from "@nextui-org/react";

// * STYLED COMPONENTS
import { Tr, Eye, Trash, Task, Username } from "../../views/Accounts/styled.js";

// * COMPONENT IMPORTS
import NewAccountModal from "../../views/Accounts/NewAccountModal";
import DeleteConfirm from "../../components/DeleteConfirm";
import Loader from "components/Loader";

// * UTILS IMPORTS
import { accountsFetcher, capitalizeFirstLetter } from "utils";

// * ENDPOINT
import { indexAccounts } from "api";

// * ICON IMPORTS
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { FiHeart, FiUserPlus, FiUserMinus } from "react-icons/fi";
/**
 * @function AccountsRow
 * @description Renders a row for each account
 * @param user object, handleDeleteConfirmVisible and setUserToDelete function
 * @returns row for user account
 */
function AccountsRow({ user, handleDeleteConfirmVisible, setUserToDelete, i }) {
  return (
    <Tr key={user.id} role="row" aria-rowindex={i}>
      <td className="username-column" aria-label="username-cell" role="cell">
        <Avatar
          name={user.username}
          round
          value="25%"
          size="35"
          textSizeRatio={2}
        />
        <Username href={`/accounts/instagram/${user.id}`}>
          @{user.username}
        </Username>
      </td>
      <td aria-label="platform-cell" role="cell">
        {capitalizeFirstLetter(user.platform)}
      </td>
      <td aria-label="tags-cell" role="cell">
        {user.tags}
      </td>
      <td aria-label="active-cell" role="cell">
        {user.active ? "Active" : "Idle"}
      </td>
      <td className="config-column" aria-label="config-cell" role="cell">
        {user.allow_like && <FiHeart title="Liking enabled" />}
        {user.allow_comment && <AiOutlineMessage title="Commenting enabled" />}
        {user.allow_dm && <FaRegEnvelopeOpen title="Messaging enabled" />}
        {user.allow_follow && <FiUserPlus title="Following enabled" />}
        {user.allow_unfollow && <FiUserMinus title="Unfollowing enabled" />}
      </td>
      <td className="actions-column" aria-label="actions-cell" role="cell">
        <Link to={`/accounts/instagram/${user.id}`}>
          <Eye title="View account" size="20" />
        </Link>
        <Task size="20" />
        <Trash
          title="Delete account"
          onClick={() => {
            handleDeleteConfirmVisible();
            setUserToDelete(user);
          }}
          size="20"
        />
      </td>
    </Tr>
  );
}

export default AccountsRow;
