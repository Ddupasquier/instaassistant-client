import React from "react";
import { Card, Button, Grid, Text, Table } from "@nextui-org/react";

function ActivityLog({ taskHandler, tasks }) {
  const columns = [
    {
      key: "task_type",
      label: "NAME",
    },
    {
      key: "list_type",
      label: "ROLE",
    },
    {
      key: "status",
      label: "STATUS",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];

  return (
    <Grid xs={12}>
      <Card css={{ minHeight: "400px" }}>
        <Card.Header>
          <Text>Activity Log</Text>
        </Card.Header>
        <Card.Body>
          <Table
          bordered
          shadow={false}
            aria-label="Example table with dynamic content"
            css={{
              height: "auto",
              minWidth: "100%",
            }}
          >
            <Table.Header columns={columns}>
              {(column) => (
                <Table.Column key={column.key}>{column.label}</Table.Column>
              )}
            </Table.Header>
            <Table.Body items={tasks}>
              {(item) => (
                <Table.Row key={item.key}>
                  {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </Card.Body>
      </Card>
    </Grid>
  );
}

export default ActivityLog;
