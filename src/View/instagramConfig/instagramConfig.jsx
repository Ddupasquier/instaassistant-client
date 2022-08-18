import React, { useEffect, useState } from 'react';
import {
  Button,
  Textarea,
  Switch,
  Grid,
  Card,
  Loading,
} from '@nextui-org/react';
import './scss/instaconfig-styles.css';
import { Link, useParams } from 'react-router-dom';
import { UserIcon } from '../../Components/UserIcon';
import { useSelector } from 'react-redux';
import ConfigTextArea from '../Account/AccountComponents/ConfigTextArea';
import { PatchAccount, ShowAccount } from '../../api';

function InstagramConfig() {
  const { account_id } = useParams();
  const { Accounts: accounts, Loading: loading } = useSelector(
    (state) => state.accountsStore
  );
  const [currentAccount, setCurrentAccount] = useState({});

  const [lookalike, setLookalike] = useState();
  const [whiteList, setWhiteList] = useState();
  const [blackList, setBlackList] = useState();
  const [comments, setComments] = useState();
  const [messages, setMessages] = useState();

  const [allowLike, setAllowLike] = useState();
  const [allowFollow, setAllowFollow] = useState();
  const [allowComment, setAllowComment] = useState();
  const [allowMessage, setAllowMessage] = useState();

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

  return (
    <>
      {!currentAccount === {} ? (
        <Loading size="xl" />
      ) : (
        <div className="insta-config">
          <div className="config-user">
            <h2>Configuration</h2>
            <UserIcon
              size="xl"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              name={'@' + currentAccount.username}
            />
          </div>

          <form onSubmit={HandleSubmit}>
            <div className="config-toggles">
              <Grid.Container justify="space-evenly">
                <Grid sm={2} xs={5}>
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
                <Grid sm={2} xs={5}>
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
                <Grid sm={2} xs={5}>
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
                <Grid sm={2} xs={5}>
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
            <div className="config-textareas">
              <Grid.Container gap={2.5}>
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
  );
}

export default InstagramConfig;
