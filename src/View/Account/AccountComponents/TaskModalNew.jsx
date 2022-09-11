import React, { useEffect, useState } from "react";
import {
  Modal,
  Textarea,
  Input,
  Button,
  Text,
  Checkbox,
} from "@nextui-org/react";
import { PostTask } from "api";
import { IconsQuestionMark } from "Components/icons/icons";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const TaskModalNew = ({ closeTaskHandler, taskVisible, account_id }) => {
  const [todaysDate, setTodaysDate] = useState();
  const [date, setDate] = useState();

  const [listTarget, setListTarget] = useState();
  const [listType, setListType] = useState();
  const [action, setAction] = useState();
  console.log(action)
  const [schedule, setSchedule] = useState(false);

  useEffect(() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    setTodaysDate(
      dd +
        "-" +
        mm +
        "-" +
        yyyy +
        ";" +
        today.getHours() +
        ":" +
        today.getMinutes()
    );
    setDate(todaysDate);
  }, [todaysDate]);

  const HandleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      account_id: account_id,
      schedule: schedule,
      date: date == null ? todaysDate : date,
      task_type: action,
      list_type: `${listTarget}:${listType}`,
      target_url: "",
      // arguments: args.join(';'),
    };
    PostTask(payload);
  };

  const actions = [
    { value: "", label: "Post - Coming Soon" },
    { value: "Interact", label: "Interact" },
    { value: "Follow", label: "Follow" },
    { value: "Like", label: "Like" },
    { value: "Comment", label: "Comment" },
    { value: "Message", label: "Message" },
    { value: "", label: "Clean - Coming Soon" },
    { value: "", label: "Black List - Coming Soon" },
    { value: "", label: "White List - Coming Soon" },
  ];

  const [firstArgSelected, setFirstArgSelected] = useState(false);
  const [thirdArgSelected, setThirdArgSelected] = useState(false);

  return (
    <>
      <Modal
        closeButton
        blur
        preventClose
        width="600px"
        aria-labelledby="modal-title"
        open={taskVisible}
        onClose={closeTaskHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Start a
            <Text b size={18}>
              {" "}
              New Task
            </Text>
          </Text>
        </Modal.Header>
        <form onSubmit={(e) => HandleSubmit(e)}>
          <Modal.Body>
            <h3>What would you like to schedule?</h3>
            <h5>
              Action
              <IconsQuestionMark
                content="Choose the action you would like your account to take."
                local="right"
              />
            </h5>

            <select
              name="TaskType"
              className="options"
              value={action}
              onChange={(e) => {
                setAction(e.target.value);
                setFirstArgSelected(true);
              }}
              style={{
                backgroundColor: "gray",
                borderRadius: "1rem",
                padding: ".3rem",
              }}
            >
              <option value="" style={{ color: "black" }}>
                Select Action
              </option>
              {actions.map((action) => (
                <option
                  key={action.id}
                  value={action.value}
                  style={{ color: "black" }}
                >
                  {action.label}
                </option>
              ))}
            </select>
            {action === "Post" ? (
              <input
                required
                status="secondary"
                alt="upload image"
                type="file"
                accept=".jpg, .JPG, .JPEG, .png"
                className="form-control"
              />
            ) : (
              <>
                {firstArgSelected ? (
                  <>
                    <h5>List</h5>
                    <div
                      className="list-target-inputs"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        gap: "1rem",
                      }}
                    >
                      <select
                        required
                        name="Target"
                        className="options"
                        value={listTarget}
                        onChange={(e) => {
                          setListTarget(e.target.value);
                        }}
                        style={{
                          backgroundColor: "gray",
                          borderRadius: "1rem",
                          padding: ".3rem",
                          width: "100%",
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
                      <div>
                        <BsFillArrowRightCircleFill />
                      </div>
                      <select
                        required
                        name="TaskType"
                        className="options"
                        value={listType}
                        onChange={(e) => {
                          setListType(e.target.value);
                          setThirdArgSelected(true);
                        }}
                        style={{
                          backgroundColor: "gray",
                          borderRadius: "1rem",
                          padding: ".3rem",
                          width: "100%",
                        }}
                      >
                        <option value="" style={{ color: "black" }}>
                          Select Target Type
                        </option>
                        {listTarget === "Account" ? (
                          <>
                            <option
                              value="Followers"
                              style={{ color: "black" }}
                            >
                              Followers
                            </option>
                            <option
                              value="Following"
                              style={{ color: "black" }}
                            >
                              Following
                            </option>
                            <option
                              value="Recent Post"
                              style={{ color: "black" }}
                            >
                              Recent Post
                            </option>
                          </>
                        ) : (
                          <>
                            {" "}
                            <option
                              value="Intewractors"
                              style={{ color: "black" }}
                            >
                              Interactors
                            </option>
                            <option value="Likers" style={{ color: "black" }}>
                              Likers
                            </option>
                            <option
                              value="Commenters"
                              style={{ color: "black" }}
                            >
                              Commenters
                            </option>
                          </>
                        )}
                      </select>
                      <br />
                    </div>
                    {listTarget === "Account" && (
                      <Input
                        status="secondary"
                        bordered
                        label="Username or account URL"
                        type="text"
                        className="form-control"
                      />
                    )}
                    {listTarget === "Post" && (
                      <Input
                        status="secondary"
                        bordered
                        labelPlaceholder="Post URL"
                        type="text"
                        className="form-control"
                      />
                    )}
                    {action === "Interact" ||
                    action === "Message" ||
                    action === "Comment" ? (
                      <h5>Optional Arguments </h5>
                    ) : null}
                    {action === "Interact" || action === "Message" ? (
                      <>
                        <br />
                        <Textarea
                          bordered
                          color="secondary"
                          labelPlaceholder="Custom Message(s)"
                        />
                      </>
                    ) : null}
                    {action === "Interact" || action === "Comment" ? (
                      <>
                        <br />
                        <Textarea
                          bordered
                          color="secondary"
                          labelPlaceholder="Custom Comment(s)"
                        />
                      </>
                    ) : null}
                  </>
                ) : null}
              </>
            )}
            {thirdArgSelected ? (
              <>
                <Checkbox isSelected={schedule} onChange={setSchedule}>
                  Schedule&nbsp;
                  <IconsQuestionMark
                    content="Leave unchecked to have this task run immediately"
                    local="right"
                  />
                </Checkbox>

                {schedule && (
                  <input
                    type="datetime-local"
                    id="meeting-time"
                    name="meeting-time"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    min={date}
                    max="2023-01-01;00:00"
                    style={{ color: "black" }}
                  />
                )}
              </>
            ) : null}
          </Modal.Body>
          <Modal.Footer>
            <Button rounded color="error" onPress={closeTaskHandler}>
              Close
            </Button>
            <Button rounded type="submit">
              RUN
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default TaskModalNew;
