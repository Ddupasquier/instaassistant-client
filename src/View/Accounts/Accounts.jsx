import React, { useEffect, useState } from 'react';

import {
  // Table,
  // Row,
  // Col,
  // Tooltip,
  Text,
  Card,
  Button,
  Input,
  Loading,
} from '@nextui-org/react';

import './scss/accounts-styles.css';
import NewAccountModal from './NewAccountModal';
import { indexAccounts } from 'api';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

// ICON IMPORTS
// import { BsEmojiSunglasses } from 'react-icons/bs'; // follow
import { AiOutlineMessage } from 'react-icons/ai'; // comment
import { FaRegEnvelopeOpen } from 'react-icons/fa'; // dm
import {
  FiHeart,
  FiUserPlus,
  FiUserMinus,
  FiTrash2,
  FiEye,
} from 'react-icons/fi'; // like
// import { StyledBadge } from './StyledBadge';
// import { IconButton } from './IconButton';
// import { EyeIcon } from './EyeIcon';
// import { DeleteIcon } from './DeleteIcon';
import DeleteConfirm from '../../Components/DeleteConfirm';
// import { Base64Test } from 'View/Base64Test';

function Accounts() {
  const [pageNum, setPageNum] = useState(1);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    indexAccounts().then((data) => setAllAccounts(data));
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [allAccounts, setAllAccounts] = useState([]);
  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);

  const handleDeleteConfirmVisible = () => setDeleteConfirmVisible(true);

  const closeDeleteConfirmHandler = () => {
    setDeleteConfirmVisible(false);
  };

  const filterAccounts = () => {
    if (allAccounts) {
      return allAccounts
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
            background: '$myColor',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '0',
            padding: '1rem',
            height: '10%',
            backdropFilter: 'blur(15px)',
          }}
        >
          {' '}
          <Text
            h1
            size={60}
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 50%',
              height: 'fit-content',
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
            color="secondary"
            size="xl"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPageNum(1);
              console.log(pageNum);
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

        {allAccounts.length > 0 ? (
          <table className="table borderless">
            <thead>
              <tr>
                <th>Username</th>
                <th>Platform</th>
                <th>Tags</th>
                <th>Active</th>
                <th>Config</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterAccounts().map((user) => (
                <tr key={user.id}>
                  <td className="username-column">
                    <Avatar
                      name={user.username}
                      round
                      value="25%"
                      size="45"
                      textSizeRatio={2}
                    />
                    <Link
                      to={`/accounts/instagram/${user.id}`}
                      style={{ color: '$font' }}
                    >
                      {user.username}
                    </Link>
                  </td>
                  <td>{user.platform}</td>
                  <td>{user.tags}</td>
                  <td>{user.active ? 'Yes' : 'No'}</td>
                  <td className="config-column">
                    {user.allow_like && <FiHeart title="Liking enabled" />}
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
                  <td className="actions-column">
                    <Link
                      to={`/accounts/instagram/${user.id}`}
                      css={{ color: '$font' }}
                    >
                      <FiEye title="View account" size="20" />
                    </Link>
                    <FiTrash2
                      title="Delete account"
                      onClick={() => {
                        handleDeleteConfirmVisible();
                        setUserToDelete(user);
                      }}
                      size="20"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Loading size="xl" />
          </div>
        )}
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
