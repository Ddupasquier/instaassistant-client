import { useParams } from 'react-router-dom';
import { Input, Text, Card, Link, Button } from '@nextui-org/react';
import { unstickAccount } from 'api';

const AccountUpdate = () => {
  const { account_id } = useParams();

  const handleUnstick = () => {
    unstickAccount(account_id);
  };

  return (
    <>
      <div style={{ zIndex: 10 }}>
        <Card>
          <Card.Header>
            <Text
              h1
              size={50}
              css={{
                textGradient: '45deg, $blue600 -20%, $pink600 50%',
              }}
              style={{ zIndex: 1 }}
              weight="bold"
            >
              Update Account Info
            </Text>
          </Card.Header>
          <Card.Body>
            <form>
              <div>
                <Input bordered label="Name:" placeholder="Name" />
              </div>
              <div>
                <Input bordered label="Username:" placeholder="Username" />
              </div>
              <div>
                <Input bordered label="Bio:" placeholder="Bio" />
              </div>
              <div>
                <Input bordered label="Email:" placeholder="Email" />
              </div>
              <div>
                <Input bordered label="Phone:" placeholder="Phone Number" />
              </div>
              <div>
                <Input bordered label="Full Name:" placeholder="Website" />
              </div>
              <div>
                <Input disabled bordered label="Gender:" placeholder="Gender" />
              </div>
              <div>
                <Input
                  disabled
                  bordered
                  label="Profile Photo:"
                  placeholder="Profile Photo"
                />
              </div>
            </form>
          </Card.Body>
          <Card.Footer>
            <Link to="/task">
              <Button rounded>
                <Text
                  h1
                  size={20}
                  css={{
                    textGradient: '45deg, $blue600 -20%, $pink600 50%',
                  }}
                  style={{ zIndex: 1 }}
                  weight="bold"
                >
                  Save & Exit
                </Text>
              </Button>
            </Link>
            <Button onClick={handleUnstick}>Un-stuck My Account</Button>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default AccountUpdate;
