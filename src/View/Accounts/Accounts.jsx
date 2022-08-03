/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Collapse, Text, Button, Input } from '@nextui-org/react';
import './scss/accounts-styles.css';
import { AccountCardNext } from '../../Components/AccountCardNext';

function Accounts() {
  // const [listView, setListView] = useState(false);
  // console.log(listView)

  return (
    <>
      <div className="accounts-container">
        <div className="accounts-main">
          <Collapse.Group>
            <Collapse title="Instagram" expanded>
              <div className="instagram-container">
                <div className="options">
                  <Button
                    type="button"
                    // onPress={() => setListView(!listView)}
                    size="xs"
                    color="warning"
                    rounded
                  >
                    List View
                  </Button>
                  <Input
                    clearable
                    underlined
                    labelPlaceholder="Search"
                    color="secondary"
                    size="xl"
                  ></Input>
                </div>
                <div className="instagram-cards">
                  <AccountCardNext />
                </div>
              </div>
            </Collapse>
            <Collapse title="TikTok">
              <Text>Coming soon!</Text>
            </Collapse>
            <Collapse title="Twitter">
              <Text>Coming soon!</Text>
            </Collapse>
            <Collapse title="Facebook">
              <Text>Coming soon!</Text>
            </Collapse>
            <Collapse title="Youtube">
              <Text>Coming soon!</Text>
            </Collapse>
          </Collapse.Group>
        </div>
      </div>
    </>
  );
}

export default Accounts;
