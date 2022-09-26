import React from 'react';
import { UserIcon } from '../UserIcon';
import { Card, Grid, Text } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const InteractionLimitPane = ({ username, path }) => {
  return (
    <Grid sm={4} xs={12}>
      <Card
        css={{
          backdropFilter: 'saturate(200%) blur(15px)',
          background: 'rgba(255, 255, 255, 0.2)',
        }}
      >
        <Card.Header>Interaction Limits</Card.Header>
        <Card.Divider />
        <Card.Body>
          <Table
            shadow={false}
            aria-label="Example table with static content"
            css={{
              height: 'auto',
              minWidth: '100%',
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
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default InteractionLimitPane;
