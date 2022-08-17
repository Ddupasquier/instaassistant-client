import React, { useState, useEffect, useRef } from 'react';
import { Switch, Grid, Loading, Button } from '@nextui-org/react';
import ConfigTextArea from './ConfigTextArea';
import { PatchAccount, ShowAccount } from '../../../api';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

function ConfigPopup() {
  const [divHeight, setDivHeight] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    setDivHeight(ref.current.offsetHeight);
    console.log(divHeight);
  }, [divHeight]);

  const { account_id } = useParams();
  const { Accounts: accounts, Loading: loading } = useSelector(
    (state) => state.accountsStore
  );
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
    setAllowLike(
      currentAccount.allow_like === null ? false : currentAccount.allow_like
    );
    setAllowComment(
      currentAccount.allow_comment === null
        ? false
        : currentAccount.allow_comment
    );
    setAllowFollow(
      currentAccount.allow_follow === null ? false : currentAccount.allow_follow
    );
    setAllowMessage(
      currentAccount.allow_dm === null ? false : currentAccount.allow_dm
    );
    setLookalike(
      currentAccount.look_alike === null ? '' : currentAccount.look_alike
    );
    setWhiteList(
      currentAccount.white_list === null ? '' : currentAccount.white_list
    );
    setBlackList(
      currentAccount.black_list === null ? '' : currentAccount.black_list
    );
    setComments(
      currentAccount.comments === null ? '' : currentAccount.comments
    );
    setMessages(
      currentAccount.messages === null ? '' : currentAccount.messages
    );
  }, [currentAccount]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log('Regular submit');
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
    console.log(body);
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
    bottom: -(divHeight - 32) + 'px',
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
                <Grid.Container
                  justify="center"
                >
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
                <Button type="button" color="secondary" size="md" rounded>
                  <Link
                    to={'/instagram/account/' + account_id}
                    className="button"
                  >
                    Cancel
                  </Link>
                </Button>
              </div>
            </form>
          </div>
        )}
      </>
    </div>
  );
}

export default ConfigPopup;
