import React, { useState, useEffect, useRef } from 'react';
import { Switch, Grid, Loading, Button } from '@nextui-org/react';
import ConfigTextArea from './ConfigTextArea';
import { PatchAccount } from 'api';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function ConfigPopup({ currentAccount, account_id, theme, darkTheme }) {
  const [divHeight, setDivHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setDivHeight(ref.current.offsetHeight);
  }, [divHeight]);

  useEffect(() => {
    const fields = {
      switchLikes: [setAllowLike, currentAccount.allow_like],
      switchFollows: [setAllowFollow, currentAccount.allow_follow],
      switchComments: [setAllowComment, currentAccount.allow_comment],
      switchMessages: [setAllowMessage, currentAccount.allow_dm],
      textLookalike: [setLookalike, currentAccount.look_alike],
      textWhiteList: [setWhiteList, currentAccount.white_list],
      textBlackList: [setBlackList, currentAccount.black_list],
      textComments: [setComments, currentAccount.comments],
      textMessages: [setMessages, currentAccount.messages],
      textTags: [setTags, currentAccount.tags],
    };

    Object.keys(fields).forEach((key) => {
      fields[key][0](fields[key][1]);
    });
  }, [currentAccount]);

  const [configShown, setConfigShown] = useState(false);
  const toggleConfigShown = () => setConfigShown(!configShown);

  const [lookalike, setLookalike] = useState();
  const [whiteList, setWhiteList] = useState();
  const [blackList, setBlackList] = useState();
  const [comments, setComments] = useState();
  const [messages, setMessages] = useState();
  const [tags, setTags] = useState();
  const [allowLike, setAllowLike] = useState();
  const [allowFollow, setAllowFollow] = useState();
  const [allowComment, setAllowComment] = useState();
  const [allowMessage, setAllowMessage] = useState();

  const textareaValues = [
    {
      label: 'Look Alike',
      value: lookalike,
      set: setLookalike,
      tool: 'This list is used to store account that you think are similar to your own.',
    },
    {
      label: 'White List',
      value: whiteList,
      set: setWhiteList,
      tool: 'This list is used to store accounts that we will not un-follow.',
    },
    {
      label: 'Black List',
      value: blackList,
      set: setBlackList,
      tool: 'This list is used to store accounts that we will not interact with.',
    },
    {
      label: 'Comments',
      value: comments,
      set: setComments,
      tool: 'This list is used to store generic comments AntiSocialSuite can send on your behalf.',
    },
    {
      label: 'Direct Messages',
      value: messages,
      set: setMessages,
      tool: 'This list is used to store generic comments AntiSocialSuite can send on your behalf.',
    },
    {
      label: 'Account Tags',
      value: tags,
      set: setTags,
      tool: 'use tags so you can easily find this account on the "accounts page."',
    },
  ];

  const HandleSubmit = (e) => {
    e.preventDefault();
    const body = {
      allow_like: allowLike,
      platform: 'instagram',
      allow_comment: allowComment,
      allow_follow: allowFollow,
      allow_dm: allowMessage,
      look_alike: lookalike,
      black_list: blackList,
      white_list: whiteList,
      comments: comments,
      messages: messages,
      tags: tags,
    };
    PatchAccount(body, account_id).then(window.location.reload());
  };

  const configPosition = {
    position: 'sticky',
    bottom: configShown ? '0' : -(divHeight - 30) + 'px',
    alignSelf: 'center',
    width: '92.5%',
    backgroundColor:
      theme === darkTheme ? 'rgb(34, 34, 34)' : 'rgb(212, 212, 212)',
    borderRadius: '.5rem .5rem 0 0',
    zIndex: '1000',
    transition: 'bottom .8s ease-in-out',
  };

  const configButton = {
    backgroundColor: theme === darkTheme ? '#5E1DAD' : '#af6eff',
  };

  return (
    <div className="config" style={configPosition} ref={ref}>
      <div
        className="config-open"
        onClick={() => toggleConfigShown()}
        style={configButton}
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
            <form onSubmit={HandleSubmit}>
              <div className="config-toggles">
                <Grid.Container justify="center">
                  <Grid sm={2} xs={2}>
                    <section>
                      <label>Allow Follow</label>
                      <br />
                      <Switch
                        label="Allow Follow"
                        checked={allowFollow}
                        value={allowFollow}
                        onChange={(e) => setAllowFollow(e.target.checked)}
                      />
                    </section>
                  </Grid>
                  <Grid sm={2} xs={2}>
                    <section>
                      <label>Allow Likes</label>
                      <br />
                      <Switch
                        label="Allow Likes"
                        checked={allowLike}
                        value={allowLike}
                        onChange={(e) => setAllowLike(e.target.checked)}
                      />
                    </section>
                  </Grid>
                  <Grid sm={2} xs={2}>
                    <section>
                      <label>Allow Comment</label>
                      <br />
                      <Switch
                        label="Allow Comment"
                        checked={allowComment}
                        value={allowComment}
                        onChange={(e) => setAllowComment(e.target.checked)}
                      />
                    </section>
                  </Grid>
                  <Grid sm={2} xs={2}>
                    <section>
                      <label>Allow Message</label>
                      <br />
                      <Switch
                        label="Allow Message"
                        checked={allowMessage}
                        value={allowMessage}
                        onChange={(e) => setAllowMessage(e.target.checked)}
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
                      set={textarea.set}
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
                <Link to={'/instagram/account/' + account_id}>
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
