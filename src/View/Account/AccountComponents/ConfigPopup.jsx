import React, { useState, useEffect, useRef } from 'react';
import { Switch, Grid, Loading, Button } from '@nextui-org/react';
import ConfigTextArea from './ConfigTextArea';
import { PatchAccount, ShowAccount } from 'api';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

function ConfigPopup() {
  const [divHeight, setDivHeight] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    setDivHeight(ref.current.offsetHeight);
  }, [divHeight]);

  const { account_id } = useParams();

  // ! DO WE STILL NEED THIS?
  const { Accounts: accounts, Loading: loading } = useSelector(
    (state) => state.accountsStore
  );
  // !

  const [currentAccount, setCurrentAccount] = useState({});
  const [configShown, setConfigShown] = useState(false);

  const [lookalike, setLookalike] = useState();
  const [whiteList, setWhiteList] = useState();
  const [blackList, setBlackList] = useState();
  const [comments, setComments] = useState();
  const [messages, setMessages] = useState();
  const [allowLike, setAllowLike] = useState();
  const [allowFollow, setAllowFollow] = useState();
  const [allowComment, setAllowComment] = useState();
  const [allowMessage, setAllowMessage] = useState();

  const toggleConfigShown = () => setConfigShown(!configShown);

  useEffect(() => {
    ShowAccount(account_id).then((data) => {
      setCurrentAccount(data);
    });
  }, [account_id]);

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
    };

    Object.keys(fields).forEach((key) => {
      fields[key][0](fields[key][1]);
    });
  }, [currentAccount]);

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
    };
    PatchAccount(body, account_id);
  };

  const shownStyle = {
    position: 'sticky',
    bottom: '0',
    alignSelf: 'center',
    width: '95%',
    background: 'black',
    borderRadius: '.5rem .5rem 0 0',
    zIndex: '1000',
    transition: 'all .8s ease-in-out',
  };

  const hiddenStyle = {
    position: 'sticky',
    bottom: -(divHeight - 30) + 'px',
    alignSelf: 'center',
    width: '95%',
    background: 'black',
    zIndex: '1000',
    transition: 'all .8s ease-in-out',
  };

  return (
    <div
      className="config"
      style={configShown ? shownStyle : hiddenStyle}
      ref={ref}
    >
      <div className="config-open" onClick={() => toggleConfigShown()}>
        Configuration
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
              <br />
              <div>
                <Grid.Container gap={1}>
                  <ConfigTextArea
                    label="Look Alike"
                    value={lookalike}
                    set={setLookalike}
                  />
                  <ConfigTextArea
                    label="White List"
                    value={whiteList}
                    set={setWhiteList}
                  />
                  <ConfigTextArea
                    label="Black List"
                    value={blackList}
                    set={setBlackList}
                  />
                  <ConfigTextArea
                    label="Comments"
                    value={comments}
                    set={setComments}
                  />
                  <ConfigTextArea
                    label="Direct Messages"
                    value={messages}
                    set={setMessages}
                  />
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
