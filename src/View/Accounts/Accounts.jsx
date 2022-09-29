import React, { useEffect, useState } from 'react';

import {
  Table,
  Row,
  Col,
  Tooltip,
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
import { BsEmojiSunglasses } from 'react-icons/bs'; // follow
import { AiOutlineMessage } from 'react-icons/ai'; // comment
import { FaRegEnvelopeOpen } from 'react-icons/fa'; // dm
import { FiHeart } from 'react-icons/fi'; // like
import { StyledBadge } from './StyledBadge';
import { IconButton } from './IconButton';
import { EyeIcon } from './EyeIcon';
import { DeleteIcon } from './DeleteIcon';
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

  const columns = [
    { name: 'ACCOUNT', uid: 'username' },
    { name: 'PLATFORM', uid: 'platform' },
    { name: 'CONFIG', uid: 'config' },
    { name: 'TAGS', uid: 'tags' },
    { name: 'STATUS', uid: 'active' },
    { name: 'ACTIONS', uid: 'actions' },
  ];

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case 'username':
        return (
          <Link to={`/accounts/instagram/${user.id}`}>
            <div
              className="avatar"
              style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <Avatar
                name={user.username}
                round
                value="25%"
                size="45"
                textSizeRatio={2}
              />
              <Text>@{user.username}</Text>
            </div>
          </Link>
        );
      case 'platform':
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: 'capitalize' }}>
                {user.platform}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: 'capitalize', color: '$accents7' }}>
                {user.team}
              </Text>
            </Row>
          </Col>
        );
      case 'active':
        return (
          <StyledBadge type={user.active ? 'active' : 'idle'}>
            {user.active ? 'active' : 'idle'}
          </StyledBadge>
        );

      case 'config':
        return (
          <Col>
            <Row css={{ display: 'flex', gap: '.4rem' }}>
              {user.allow_follow && (
                <BsEmojiSunglasses title="Following enabled" />
              )}
              {user.allow_like && <FiHeart title="Liking enabled" />}
              {user.allow_comment && (
                <AiOutlineMessage title="Commenting enabled" />
              )}
              {user.allow_dm && <FaRegEnvelopeOpen title="Messaging enabled" />}
            </Row>
          </Col>
        );

      case 'actions':
        return (
          <Row justify="center" align="center">
            <Col css={{ d: 'flex' }}>
              <Tooltip content="Details">
                <IconButton onClick={() => console.log('View user', user.id)}>
                  <Link to={`/accounts/instagram/${user.id}`}>
                    <EyeIcon size={20} fill="#979797" />
                  </Link>
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: 'flex' }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log('Delete user', user.id)}
              >
                <IconButton
                  onClick={() => {
                    handleDeleteConfirmVisible();
                    setUserToDelete(user);
                  }}
                >
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };

  return (
    <>
      <div className="accounts-container">
        <Card
          css={{
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
        </Card>

        <Card
          css={{
            borderRadius: '0',
            height: '90%',
            overflow: 'auto',
          }}
        >
          {allAccounts.length > 0 ? (
            <Table
              aria-label="managed accounts pagination table"
              css={{
                height: '100%',
                minWidth: '100%',
              }}
              selectionMode="none"
              shadow={false}
            >
              <Table.Header columns={columns}>
                {(column) => (
                  <Table.Column
                    key={column.uid}
                    hideHeader={column.uid === 'actions'}
                    align={column.uid === 'actions' ? 'center' : 'start'}
                  >
                    {column.name}
                  </Table.Column>
                )}
              </Table.Header>
              <Table.Body items={filterAccounts()}>
                {(item) => (
                  <Table.Row>
                    {(columnKey) => (
                      <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                    )}
                  </Table.Row>
                )}
              </Table.Body>

              <Table.Pagination
                aria-label="Pagination"
                page={pageNum}
                onPageChange={(page) => {
                  setPageNum(page);
                }}
                rowsPerPage={2}
                align="center"
                rounded
                shadow
                noMargin
              />
            </Table>
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
        </Card>
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
