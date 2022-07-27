import React from "react";
import { Button, Textarea, Switch, Grid } from "@nextui-org/react";
import "./scss/instaconfig-styles.css";
import { Link } from "react-router-dom";
import { Slider } from "../../Components/Slider";
import { UserIcon } from "../../Components/UserIcon";

function InstagramConfig() {
  const textareas = [
    {
      legend: "Look Alike",
    },
    {
      legend: "White List",
    },
    {
      legend: "Black List",
    },
    {
      legend: "Comments",
    },
    {
      legend: "Direct Messages",
    },
  ];

  return (
    <div className="insta-config">
      <div className="config-user">
        <h2>Configuration</h2>
        <UserIcon
          size="xl"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          name="@Username"
        />
      </div>
      <form>
        <div className="config-toggles">
          <section>
            <legend>Allow likes:</legend>
            <Switch name="likes" size="xl" />
          </section>
          <section>
            <legend>Allow follows:</legend>
            <Switch name="follows" size="xl" />
          </section>
          <section>
            <legend>Allow comments:</legend>
            <Switch name="comments" size="xl" />
          </section>
          <section>
            <legend>Allow messages:</legend>
            <Switch name="messages" size="xl" />
          </section>
        </div>
        <div className="config-textareas">
          <Grid.Container gap={2}>
            {textareas.map((textarea) => (
              <Grid sm={6} xs={12}>
                <Textarea
                  width="100%"
                  bordered
                  status="secondary"
                  key={textarea.legend}
                  labelPlaceholder={textarea.legend}
                  legend={textarea.legend}
                />
              </Grid>
            ))}
          </Grid.Container>
        </div>
        <div className="config-buttons">
          <Button type="button" color="secondary" size="md" rounded>
            Save
          </Button>
          <Button type="button" color="secondary" size="md" rounded>
            <Link to="/account" className="button">
              Save and Exit
            </Link>
          </Button>
          <Button type="button" color="secondary" size="md" rounded>
            <Link to="/account" className="button">
              Cancel
            </Link>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default InstagramConfig;
