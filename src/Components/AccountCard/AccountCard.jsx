/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { User, Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import './scss/accountcard-styles.css';

function AccountCard({ iconView }) {
  const [following, setFollowing] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [hover, setHover] = useState(false);

  const iconViewStyle = {
    background: hover ? '#999999' : 'none',
    border: 'none',
    padding: '.3rem',
    boxShadow: 'none',
  };

  const someNumber = 23.5;

  useEffect(() => {
    // some fetch to the API to grab followers and following
    // and set the state of the component
    setFollowing(someNumber);
    setFollowers(someNumber);
  }, []);

  return (
    <div
      className="card"
      style={iconView ? iconViewStyle : null}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      onFocus={() => setHover(!hover)}
      onBlur={() => setHover(!hover)}
    >
      <User
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        name="@Username"
        size="xl"
      />
      {!iconView ? (
        <>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
          FOLLOWERS: <span>{followers} K</span>
          <br />
          FOLLOWING: <span>{following} K</span>
        </>
      ) : null}

      <div className="card-buttons">
        <Button.Group size={iconView ? 'xs' : 'sm'} color="success" rounded>
          <Button>
            <Link to="/config" className="button">
              Edit
            </Link>
          </Button>
          <Button>/</Button>
          <Button>
            <Link to="/account" className="button">
              Start Task
            </Link>
          </Button>
        </Button.Group>
      </div>
    </div>
  );
}

export default AccountCard;

AccountCard.propTypes = {
  iconView: PropTypes.bool.isRequired,
};
