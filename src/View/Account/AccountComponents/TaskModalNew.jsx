import React, { useEffect, useState } from "react";
import {
  Modal,
  Textarea,
  Input,
  Button,
  Text,
  Checkbox,
  Dropdown,
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
      date: !schedule ? todaysDate : `${selectedDay}-${selectedValue}-0000;${selectedHour}:00`,
      task_type: action,
      list_type: `${listTarget}:${listType}`,
      target_url: "",
      // need to be added to api
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

  //* DATE SELECTION
  const [month, setMonth] = useState(new Set(["Month"]));
  const selectedValue = React.useMemo(
    () => Array.from(month).join(", ").replaceAll("_", " "),
    [month]
  );

  const [day, setDay] = useState(new Set(["Day"]));
  const selectedDay = React.useMemo(
    () => Array.from(day).join(", ").replaceAll("_", " "),
    [day]
  );

  const [hour, setHour] = useState(new Set(["Hour"]));
  const selectedHour = React.useMemo(
    () => Array.from(hour).join(", ").replaceAll("_", " "),
    [hour]
  );

  const Month_Days = {
    "January": 31,
    "February": 28,
    "March": 31,
    "April": 30, 
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31,
  }

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
            <h5>Description:</h5>
            <p>action.description</p>
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
                        ) : null}

                        {listTarget === "Post" ? (
                          <>
                            {" "}
                            <option
                              value="Interactors"
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
                        ) : null}
                      </select>
                      <br />
                    </div>

                    {listTarget === "Account" && listType != null ? (
                      <Input
                        status="secondary"
                        bordered
                        label="Username or account URL"
                        type="text"
                        className="form-control"
                      />)
                     : null}

                    {listTarget === "Post" && listType != null ? (
                      <Input
                        status="secondary"
                        bordered
                        labelPlaceholder="Post URL"
                        type="text"
                        className="form-control"
                      />
                    ) : null}
                    {listTarget != null && listType != null ? (<>
                    {action === "Interact" ||
                    action === "Message" ||
                    action === "Comment" ? (
                      <h5>Optional Arguments <IconsQuestionMark
                      content="Optional arguments will overwrite your config for this task alone."
                      local="right"
                    /> </h5>
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
                    </>) : null}
                    
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

                {schedule && (<>
                <div style={{display: "flex"}}>
                  <Dropdown>
                  <Dropdown.Button
                  flat
                  color="secondary"
                  css={{ tt: "capitalize" }}
                >
                  {selectedValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={month}
                  onSelectionChange={setMonth}
                >
                  <Dropdown.Item key="January">January</Dropdown.Item>
                  <Dropdown.Item key="Febuary">Febuary</Dropdown.Item>
                  <Dropdown.Item key="March">March</Dropdown.Item>
                  <Dropdown.Item key="April">April</Dropdown.Item>
                  <Dropdown.Item key="May">May</Dropdown.Item>
                  <Dropdown.Item key="June">June</Dropdown.Item>
                  <Dropdown.Item key="July">July</Dropdown.Item>
                  <Dropdown.Item key="August">August</Dropdown.Item>
                  <Dropdown.Item key="September">September</Dropdown.Item>
                  <Dropdown.Item key="October">October</Dropdown.Item>
                  <Dropdown.Item key="November">November</Dropdown.Item>
                  <Dropdown.Item key="December">December</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                  <Dropdown.Button
                  flat
                  color="secondary"
                  css={{ tt: "capitalize" }}
                >
                  {selectedDay}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={day}
                  onSelectionChange={setDay}
                >
                  <Dropdown.Item key="1">1</Dropdown.Item>
                  <Dropdown.Item key="2">2</Dropdown.Item>
                  <Dropdown.Item key="3">3</Dropdown.Item>
                  <Dropdown.Item key="4">4</Dropdown.Item>
                  <Dropdown.Item key="5">5</Dropdown.Item>
                  <Dropdown.Item key="6">6</Dropdown.Item>
                  <Dropdown.Item key="7">7</Dropdown.Item>
                  <Dropdown.Item key="8">8</Dropdown.Item>
                  <Dropdown.Item key="9">9</Dropdown.Item>
                  <Dropdown.Item key="10">10</Dropdown.Item>
                  <Dropdown.Item key="11">11</Dropdown.Item>
                  <Dropdown.Item key="12">12</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                  <Dropdown.Button
                  flat
                  color="secondary"
                  css={{ tt: "capitalize" }}
                >
                  {selectedHour}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={hour}
                  onSelectionChange={setHour}
                > 
                  <Dropdown.Item key="1">0:00 (12:00 am)</Dropdown.Item>
                  <Dropdown.Item key="1">1:00</Dropdown.Item>
                  <Dropdown.Item key="2">2:00</Dropdown.Item>
                  <Dropdown.Item key="3">3:00</Dropdown.Item>
                  <Dropdown.Item key="4">4:00</Dropdown.Item>
                  <Dropdown.Item key="5">5:00</Dropdown.Item>
                  <Dropdown.Item key="6">6:00</Dropdown.Item>
                  <Dropdown.Item key="7">7:00</Dropdown.Item>
                  <Dropdown.Item key="8">8:00</Dropdown.Item>
                  <Dropdown.Item key="9">9:00</Dropdown.Item>
                  <Dropdown.Item key="10">10:00</Dropdown.Item>
                  <Dropdown.Item key="11">11:00</Dropdown.Item>
                  <Dropdown.Item key="12">12:00 (12:00 noon)</Dropdown.Item>
                  <Dropdown.Item key="13">13:00</Dropdown.Item>
                  <Dropdown.Item key="14">14:00</Dropdown.Item>
                  <Dropdown.Item key="15">15:00</Dropdown.Item>
                  <Dropdown.Item key="16">16:00</Dropdown.Item>
                  <Dropdown.Item key="17">17:00</Dropdown.Item>
                  <Dropdown.Item key="18">18:00</Dropdown.Item>
                  <Dropdown.Item key="19">19:00</Dropdown.Item>
                  <Dropdown.Item key="20">20:00</Dropdown.Item>
                  <Dropdown.Item key="21">21:00</Dropdown.Item>
                  <Dropdown.Item key="22">22:00</Dropdown.Item>
                  <Dropdown.Item key="23">23:00</Dropdown.Item>
                  <Dropdown.Item key="24">24:00</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div></>
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
