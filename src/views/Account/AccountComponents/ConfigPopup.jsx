import React, { useState, useEffect, useRef } from 'react';
import { Switch, Grid, Loading, Button, useTheme } from '@nextui-org/react';
import ConfigTextArea from './ConfigTextArea';
import { PatchAccount } from 'api';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function ConfigPopup({ currentAccount, account_id }) {
  const { theme } = useTheme();
  const ref = useRef(null);

  const [divHeight, setDivHeight] = useState(0);
  const [allowLike, setAllowLike] = useState();
  const [allowFollow, setAllowFollow] = useState();
  const [allowComment, setAllowComment] = useState();
  const [allowMessage, setAllowMessage] = useState();

  useEffect(() => {
    setDivHeight(ref.current.offsetHeight);
  }, [divHeight]);

  useEffect(() => {
    const fields = {
      switchLikes: [setAllowLike, currentAccount.allow_like],
      switchFollows: [setAllowFollow, currentAccount.allow_follow],
      switchComments: [setAllowComment, currentAccount.allow_comment],
      switchMessages: [setAllowMessage, currentAccount.allow_dm],
    };

    Object.keys(fields).forEach((key) => {
      fields[key][0](fields[key][1]);
    });
  }, [currentAccount]);

  const [configShown, setConfigShown] = useState(false);
  const toggleConfigShown = () => setConfigShown(!configShown);

  const textareaValues = [
    {
      name: 'lookalike',
      label: 'Look Alike',
      value: currentAccount.look_alike,
      tool: 'This list is used to store account that you think are similar to your own.',
    },
    {
      name: 'whiteList',
      label: 'White List',
      value: currentAccount.white_list,
      tool: 'This list is used to store accounts that we will not un-follow.',
    },
    {
      name: 'blackList',
      label: 'Black List',
      value: currentAccount.black_list,
      tool: 'This list is used to store accounts that we will not interact with.',
    },
    {
      name: 'comments',
      label: 'Comments',
      value: currentAccount.comments,
      tool: 'This list is used to store generic comments AntiSocialSuite can send on your behalf.',
    },
    {
      name: 'messages',
      label: 'Direct Poop',
      value: currentAccount.messages,
      tool: 'This list is used to store generic comments AntiSocialSuite can send on your behalf.',
    },
    {
      name: 'tags',
      label: 'Account Tags',
      value: currentAccount.tags,
      tool: 'use tags so you can easily find this account on the "accounts page."',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const payload = {
      allow_like: allowLike,
      allow_comment: allowComment,
      allow_follow: allowFollow,
      allow_dm: allowMessage,
      platform: currentAccount.platform,
      look_alike: data.lookalike,
      white_list: data.whiteList,
      black_list: data.blackList,
      comments: data.comments,
      messages: data.messages,
      tags: data.tags,
    };
    PatchAccount(payload, account_id);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  const configPosition = {
    position: 'sticky',
    bottom: configShown ? '0' : -(divHeight - 30) + 'px',
    alignSelf: 'center',
    width: '92.5%',
    backgroundColor: theme.colors.solid.value,
    borderRadius: '.5rem .5rem 0 0',
    zIndex: '1000',
    transition: 'bottom .8s ease-in-out',
  };

  const configButton = {
    backgroundColor: theme.colors.configButton.value,
  };

  return (
    <div className="config" style={configPosition} ref={ref}>
      <div
        className="config-open"
        onClick={() => toggleConfigShown()}
        style={configButton}
        aria-hidden="true"
      >
        {configShown ? (
          <IoIosArrowDown size={20} />
        ) : (
          <IoIosArrowUp size={20} />
        )}
        Configuration
        {configShown ? (
          <IoIosArrowDown size={20} />
        ) : (
          <IoIosArrowUp size={20} />
        )}
      </div>
      <>
        {!currentAccount === {} ? (
          <Loading size="xl" />
        ) : (
          <div className="config-main">
            <form onSubmit={handleSubmit}>
              <div className="config-toggles">
                <Grid.Container justify="center">
                  <Grid sm={2} xs={2}>
                    <section>
                      <label htmlFor="switchFollows">Allow Follow</label>
                      <br />
                      <Switch
                        name="switchFollows"
                        label="Allow Follow"
                        checked={allowFollow}
                        value={allowFollow}
                        onChange={(e) => setAllowFollow(e.target.checked)}
                        color="warning"
                      />
                    </section>
                  </Grid>
                  <Grid sm={2} xs={2}>
                    <section>
                      <label htmlFor="switchLikes">Allow Likes</label>
                      <br />
                      <Switch
                        name="switchLikes"
                        label="Allow Likes"
                        checked={allowLike}
                        value={allowLike}
                        onChange={(e) => setAllowLike(e.target.checked)}
                        color="warning"
                      />
                    </section>
                  </Grid>
                  <Grid sm={2} xs={2}>
                    <section>
                      <label htmlFor="switchComments">Allow Comment</label>
                      <br />
                      <Switch
                        name="switchComments"
                        label="Allow Comment"
                        checked={allowComment}
                        value={allowComment}
                        onChange={(e) => setAllowComment(e.target.checked)}
                        color="warning"
                      />
                    </section>
                  </Grid>
                  <Grid sm={2} xs={2}>
                    <section>
                      <label htmlFor="switchMessages">Allow Message</label>
                      <br />
                      <Switch
                        name="switchMessages"
                        label="Allow Message"
                        checked={allowMessage}
                        value={allowMessage}
                        onChange={(e) => setAllowMessage(e.target.checked)}
                        color="warning"
                      />
                    </section>
                  </Grid>
                </Grid.Container>
              </div>
              <div>
                <Grid.Container gap={1}>
                  {textareaValues.map((textarea) => (
                    <ConfigTextArea
                      key={textarea.label}
                      label={textarea.label}
                      value={textarea.value || ''}
                      name={textarea.name}
                      toolTipContent={textarea.tool}
                      toolTipLocal={'top'}
                    />
                  ))}
                </Grid.Container>
              </div>
              <div className="config-buttons">
                <Button type="submit" color="secondary" size="md" rounded>
                  Save
                </Button>
                <Link to={'/account/' + account_id}>
                  <Button type="button" color="secondary" size="md" rounded>
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        )}
      </>
    </div>
  );
}

export default ConfigPopup;
