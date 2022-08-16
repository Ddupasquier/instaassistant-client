import React from "react";
import { Table } from "@nextui-org/react";

const InteractionTable = () => {
  return (
    <Table
      shadow={false}
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>Interaction</Table.Column>
        <Table.Column>Sent</Table.Column>
        <Table.Column>Limit</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Follow</Table.Cell>
          <Table.Cell>750</Table.Cell>
          <Table.Cell>1000</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Like</Table.Cell>
          <Table.Cell>623</Table.Cell>
          <Table.Cell>1000</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Comment</Table.Cell>
          <Table.Cell>245</Table.Cell>
          <Table.Cell>1000</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>Message</Table.Cell>
          <Table.Cell>999</Table.Cell>
          <Table.Cell>1000</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default InteractionTable;
