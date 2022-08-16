import { Checkbox, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";

const NewTaskFrom = () => {
  const [task, setTask] = useState();
  const [listTarget, setListTarget] = useState();
  const [listType, setListType] = useState();
  const [action, setAction] = useState();
  const [schedule, setSchedule] = useState(false);

  return (
    <>
      <div>
        <form>
          <h3>What would you like to schedule?</h3>
          <select
            name="TaskType"
            className="options"
            value={action}
            onChange={(e) => setAction(e.target.value)}
            style={{
              backgroundColor: "gray",
              borderRadius: "1rem",
              padding: ".3rem",
            }}
          >
            <option value={null} style={{ color: "black" }}>
              Select item
            </option>
            <option value="Action" style={{ color: "black" }}>
              Action
            </option>
            <option value="Post" style={{ color: "black" }}>
              Post
            </option>
          </select>
          {action === "Post" ? (
            <input
              status="secondary"
              alt="upload image"
              type="file"
              accept=".jpg, .JPG, .JPEG, .png"
              className="form-control"
            />
          ) : (
            <>
              <h5>List</h5>
              <select
                name="TaskType"
                className="options"
                value={listTarget}
                onChange={(e) => setListTarget(e.target.value)}
                style={{
                  backgroundColor: "gray",
                  borderRadius: "1rem",
                  padding: ".3rem",
                }}
              >
                <option value="" style={{ color: "black" }}>
                  Select List Target
                </option>
                <option value="Account" style={{ color: "black" }}>
                  Account
                </option>
                <option value="Post" style={{ color: "black" }}>
                  Post
                </option>
              </select>
              &nbsp;{" --> "}&nbsp;
              <select
                name="TaskType"
                className="options"
                value={listType}
                style={{
                  backgroundColor: "gray",
                  borderRadius: "1rem",
                  padding: ".3rem",
                }}
              >
                <option value="" style={{ color: "black" }}>
                  Select List Type
                </option>
                {listTarget == "Account" ? (
                  <>
                    <option value="" style={{ color: "black" }}>
                      Follower
                    </option>
                    <option value="" style={{ color: "black" }}>
                      Following
                    </option>
                    <option value="" style={{ color: "black" }}>
                      Recent Post
                    </option>
                  </>
                ) : (
                  <>
                    {" "}
                    <option value="" style={{ color: "black" }}>
                      Interactors
                    </option>
                    <option value="" style={{ color: "black" }}>
                      Likers
                    </option>
                    <option value="" style={{ color: "black" }}>
                      Commenters
                    </option>
                  </>
                )}
              </select>
              {listTarget == "Account" && (
                <Input
                  status="secondary"
                  bordered
                  labelPlaceholder="Username or account URL"
                  type="text"
                  className="form-control"
                />
              )}
              {listTarget == "Post" && (
                <Input
                  status="secondary"
                  bordered
                  labelPlaceholder="Post URL"
                  type="text"
                  className="form-control"
                />
              )}
              <h5>Action</h5>
              <select
                name="TaskType"
                className="options"
                value={action}
                style={{
                  backgroundColor: "gray",
                  borderRadius: "1rem",
                  padding: ".3rem",
                }}
              >
                <option value="" style={{ color: "black" }}>
                  Select Action
                </option>
                <option value="" style={{ color: "black" }}>
                  Interact
                </option>
                <option value="" style={{ color: "black" }}>
                  Like
                </option>
                <option value="" style={{ color: "black" }}>
                  Comment
                </option>
                <option value="" style={{ color: "black" }}>
                  Follow
                </option>
                <option value="" style={{ color: "black" }}>
                  Message
                </option>
                <option value="" style={{ color: "black" }}>
                  Black List
                </option>
                <option value="" style={{ color: "black" }}>
                  White List
                </option>
              </select>
              <br />
              <Textarea
                bordered
                color="secondary"
                labelPlaceholder="Bordered Textarea"
              />
            </>
          )}
          <br />
          <Checkbox isSelected={schedule} onChange={setSchedule}>
            Schedule
          </Checkbox>
          <p>
            <em>Leave unselected to have this task run immediately</em>
          </p>
          {schedule && (
            <input
              type="datetime-local"
              id="meeting-time"
              name="meeting-time"
              value="2018-06-12T19:30"
              min="2018-06-07T00:00"
              max="2018-06-14T00:00"
            />
          )}
        </form>
      </div>
    </>
  );
};

export default NewTaskFrom;
