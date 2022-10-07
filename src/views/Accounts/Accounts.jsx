import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import "./scss/accounts-styles.css";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/ErrorFallback";

import useSWR from "swr";

// * NEXTUI IMPORTS
import { Text, Button, Input } from "@nextui-org/react";

// * STYLED COMPONENTS
import { Tr, Eye, Trash, Task, Username } from "./styled.js";

// * COMPONENT IMPORTS
import NewAccountModal from "./NewAccountModal";
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

function Accounts() {
  const [userToDelete, setUserToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);

  const { data, err } = useSWR("/api/accounts", accountsFetcher);

  const handleDeleteConfirmVisible = () => setDeleteConfirmVisible(true);

  const closeDeleteConfirmHandler = () => {
    setDeleteConfirmVisible(false);
  };

  const filterAccounts = () => {
    if (data) {
      return data
        .filter((account) => {
          return (
            account.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            account.tags.toLowerCase().includes(searchTerm.toLowerCase())
          );
        })
        .sort((a, b) => {
          return a.username.localeCompare(b.username);
        });
    } else {
      return "There doesn't seem to be an account associated with this profile. Please add an account to continue.";
    }
  };

  const [newAccountVisible, setNewAccountVisible] = useState(false);
  const newAccountHandler = () => setNewAccountVisible(true);
  const closeNewAccountHandler = () => {
    setNewAccountVisible(false);
  };

  return (
    <>
      <div className="accounts-container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "0",
            padding: "1rem",
            maxHeight: "10%",
          }}
        >
          {" "}
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
              height: "fit-content",
            }}
            weight="bold"
          >
            Account Management
          </Text>
          {/* <Dropdown>
            <Dropdown.Button flat color="secondary" css={{ tt: 'capitalize' }}>
              {selectedValue}
            </Dropdown.Button>
            <Dropdown.Menu
              aria-label="Single selection actions"
              color="secondary"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selected}
              onSelectionChange={setSelected}
            >
              <Dropdown.Item key="All">All</Dropdown.Item>
              <Dropdown.Item key="Instagram">Instagram</Dropdown.Item>
              <Dropdown.Item key="Twitter">Twitter</Dropdown.Item>
              <Dropdown.Item key="TikTok">TikTok</Dropdown.Item>
              <Dropdown.Item key="Facebook">Facebook</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
          <Input
            clearable
            underlined
            placeholder="Search"
            aria-label="search"
            color="secondary"
            size="xl"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <Button
            type="button"
            size="sm"
            color="warning"
            rounded
            onPress={newAccountHandler}
          >
            Add Account
          </Button>
        </div>

        {/* {data ? ( */}
        <table role="table" aria-label="accounts-table">
          <thead>
            <tr>
              <th className="username-column" scope="username">
                Username
              </th>
              <th scope="platform">Platform</th>
              <th scope="tags">Tags</th>
              <th scope="active">Active</th>
              <th scope="config">Config</th>
              <th scope="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={"poop"}>
                {/**
                 * If message property exists, no accts found
                 * if message property does not exist, should be an array of accounts
                 * TODO: Improve error handling
                 */}
                {data.message
                  ? <p>{data.message}</p>
                  : data.map((user, i) => (
                      <Tr key={user.id} role="row" aria-rowindex={i}>
                        <td
                          className="username-column"
                          aria-label="username-cell"
                          role="cell"
                        >
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
                        <td
                          className="config-column"
                          aria-label="config-cell"
                          role="cell"
                        >
                          {user.allow_like && (
                            <FiHeart title="Liking enabled" />
                          )}
                          {user.allow_comment && (
                            <AiOutlineMessage title="Commenting enabled" />
                          )}
                          {user.allow_dm && (
                            <FaRegEnvelopeOpen title="Messaging enabled" />
                          )}
                          {user.allow_follow && (
                            <FiUserPlus title="Following enabled" />
                          )}
                          {user.allow_unfollow && (
                            <FiUserMinus title="Unfollowing enabled" />
                          )}
                        </td>
                        <td
                          className="actions-column"
                          aria-label="actions-cell"
                          role="cell"
                        >
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
                    ))}
              </Suspense>
            </ErrorBoundary>
          </tbody>
        </table>
      </div>
      <NewAccountModal
        newAccountHandler={newAccountHandler}
        closeNewAccountHandler={closeNewAccountHandler}
        newAccountVisible={newAccountVisible}
      />
      <DeleteConfirm
        deleteConfirmVisible={deleteConfirmVisible}
        closeDeleteConfirmHandler={closeDeleteConfirmHandler}
        userInfo={userToDelete}
      />
      {/* <Base64Test/> */}
    </>
  );
}

export default Accounts;
