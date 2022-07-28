import { Card, Grid, Text, User, Button } from "@nextui-org/react";
import { Link as LinkNext } from "@nextui-org/react";

import { Link } from "react-router-dom";

const AccountCardNext = () => {
  return (
    <Link to="/account">
      <Card
        isHoverable
        isPressable
        variant="flat"
        to="/account"
        css={{ p: "$6", mw: "250px" }}
      >
        <Card.Header>
          <User
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            name="@Username"
            size="xl"
          />
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <Text>
            Make beautiful websites regardless of your design experience.
          </Text>
        </Card.Body>
        <Card.Footer>
          <Button.Group>
            <Button>Edit</Button>
            <Button>Task</Button>
          </Button.Group>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default AccountCardNext;
