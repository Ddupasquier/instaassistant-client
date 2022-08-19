import React from 'react';
import { Card, Grid, Text, Button, Table } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { UserIcon } from 'Components/UserIcon';

function Task() {
  return (
    <section>
      <div className="account-head-buttons">
        <Button type="button" color="secondary" size="md" rounded>
          <Link to="/tasks">All Tasks</Link>
        </Button>
      </div>
      <div className="user">
        <section>
          <UserIcon
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            name="@Username"
            size="xl"
          />
        </section>
        <section>
          <legend>Followers</legend>
          <div className="followers">23.5 K</div>
        </section>
        <section>
          <legend>Following</legend>
          <div className="following">23.5 K</div>
        </section>
      </div>
      <Grid.Container gap={2}>
        <Grid sm={3} xs={12}>
          <Card variant="flat">
            <Card.Header>Follows</Card.Header>
            <Card.Divider />
            <Card.Body>
              <Text h3>0/50</Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid sm={3} xs={12}>
          <Card variant="flat">
            <Card.Header>Likes</Card.Header>
            <Card.Divider />
            <Card.Body>
              <Text h3>0/50</Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid sm={3} xs={12}>
          <Card variant="flat">
            <Card.Header>Comments</Card.Header>
            <Card.Divider />
            <Card.Body>
              <Text h3>0/50</Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid sm={3} xs={12}>
          <Card variant="flat">
            <Card.Header>Messages</Card.Header>
            <Card.Divider />
            <Card.Body>
              <Text h3>0/50</Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid sm={3}></Grid>
        <Grid sm={6} xs={12}>
          <Card variant="flat">
            <Card.Header>
              <Text h2>Log:</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Table
                compact
                aria-label="Example static compact collection table"
                selectionMode="multiple"
                css={{
                  height: 'auto',
                  minWidth: '100%',
                }}
              >
                <Table.Header>
                  <Table.Column>NAME</Table.Column>
                  <Table.Column>ROLE</Table.Column>
                  <Table.Column>STATUS</Table.Column>
                </Table.Header>
                <Table.Body>
                  <Table.Row key="1">
                    <Table.Cell>Tony Reichert</Table.Cell>
                    <Table.Cell>CEO</Table.Cell>
                    <Table.Cell>Active</Table.Cell>
                  </Table.Row>
                  <Table.Row key="2">
                    <Table.Cell>Zoey Lang</Table.Cell>
                    <Table.Cell>Technical Lead</Table.Cell>
                    <Table.Cell>Paused</Table.Cell>
                  </Table.Row>
                  <Table.Row key="3">
                    <Table.Cell>Jane Fisher</Table.Cell>
                    <Table.Cell>Senior Developer</Table.Cell>
                    <Table.Cell>Active</Table.Cell>
                  </Table.Row>
                  <Table.Row key="4">
                    <Table.Cell>William Howard</Table.Cell>
                    <Table.Cell>Community Manager</Table.Cell>
                    <Table.Cell>Vacation</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card.Body>
          </Card>
        </Grid>
        <Grid sm={3}></Grid>
      </Grid.Container>
    </section>
  );
}

export default Task;
