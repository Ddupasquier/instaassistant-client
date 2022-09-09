/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from "react";

import {
  Table,
  Row,
  Col,
  Tooltip,
  User,
  Text,
  Card,
  Button,
  Input,
  Dropdown,
} from "@nextui-org/react";

import "./scss/accounts-styles.css";
import { AccountCardNext } from "Components/AccountCardNext";
import NewAccountModal from "./NewAccountModal";
import NewAccountCardButtonNext from "Components/AccountCardNext/NewAccountCardButton";
import { indexAccounts } from "api";

import { StyledBadge } from "./StyledBadge";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import Avatar from "react-avatar";

function AccountsNew() {
  const [accountLoaded, setAcccountsLoaded] = useState(false);

  useEffect(() => {
    indexAccounts().then((data) => setAllAccounts(data));
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [allAccounts, setAllAccounts] = useState([]);

  const filteredAccounts = allAccounts
    .filter((account) => {
      return account.username.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => {
      return a.username.localeCompare(b.username);
    });

  const [newAccountVisible, setNewAccountVisible] = useState(false);
  const newAccountHandler = () => setNewAccountVisible(true);
  const closeNewAccountHandler = () => {
    setNewAccountVisible(false);
  };

  const columns = [
    { name: "ACCOUNT", uid: "username" },
    { name: "PLATFORM", uid: "platform" },
    { name: "STATUS", uid: "status" },
    { name: "TAGS", uid: "tags" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const users = [
    {
      id: 1,
      name: "Tony Reichert",
      role: "CEO",
      team: "Management",
      status: "active",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "tony.reichert@example.com",
    },
  ];

  // t.integer :user_id
  // t.string :platform
  // t.string :username
  // t.string :tags
  // t.boolean :allow_follow
  // t.boolean :allow_like
  // t.boolean :allow_comment
  // t.boolean :allow_dm

  // figure a way to have status on ruby json return

  const [platformFilter, setPlatformFilter] = useState("Filter Platform");

  const HandleFilter = (e) => {
    e.preventDefault();
    setPlatformFilter(e.target.value);
  };

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "username":
        return (
          <>
            <Avatar
              name={user.username}
              round
              value="25%"
              size="65"
              textSizeRatio={2}
            />
            <Text>@{user.username}</Text>
          </>
        );
      case "platform":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {"Instagram"}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {user.team}
              </Text>
            </Row>
          </Col>
        );
      case "status":
        return <StyledBadge type={user.status}>{cellValue}</StyledBadge>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton onClick={() => console.log("View user", user.id)}>
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <IconButton onClick={() => console.log("Edit user", user.id)}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log("Delete user", user.id)}
              >
                <IconButton>
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
      <div className="view-container">
        <div className="accounts-main">
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            style={{ zIndex: 1 }}
            weight="bold"
          >
            Account Management
          </Text>
          <Card css={{ background: "$myColor" }}>
            <div>
              <Button
                type="button"
                size="sm"
                color="warning"
                rounded
                onPress={newAccountHandler}
              >
                Add Account
              </Button>
              <Input
                clearable
                underlined
                Placeholder="Search"
                color="secondary"
                size="xl"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Dropdown>
                <Dropdown.Button color="default" flat>
                  {platformFilter}
                </Dropdown.Button>
                <Dropdown.Menu aria-label="Static Actions">
                  <Dropdown.Item onClick={HandleFilter} value="Instagram">
                    Instagram
                  </Dropdown.Item>
                  <Dropdown.Item key="Twitter">Twitter</Dropdown.Item>
                  <Dropdown.Item key="TikTok">TikTok</Dropdown.Item>
                  <Dropdown.Item key="Facebook">Facebook</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Input
                clearable
                underlined
                Placeholder="Search Tags"
                color="secondary"
                size="xl"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </Card>
          <Card>
            <Table
              aria-label="Example table with custom cells"
              css={{
                height: "auto",
                minWidth: "100%",
              }}
              selectionMode="none"
            >
              <Table.Header columns={columns}>
                {(column) => (
                  <Table.Column
                    key={column.uid}
                    hideHeader={column.uid === "actions"}
                    align={column.uid === "actions" ? "center" : "start"}
                  >
                    {column.name}
                  </Table.Column>
                )}
              </Table.Header>
              <Table.Body items={allAccounts}>
                {(item) => (
                  <Table.Row>
                    {(columnKey) => (
                      <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                    )}
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          </Card>
        </div>
      </div>
    </>
  );
}

export default AccountsNew;
