import { Link } from 'react-router-dom';
import './scss/accountcard-styles.css';

const AccountCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h2>@USERNAME</h2>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <h5 className="card-title">
          FOLLOWERS: <span>23.5K</span>
        </h5>
        <h5 className="card-title">
          FOLLOWING: <span>23.5K</span>
        </h5>
        <Link to="/config" className="button outset">
          Edit
        </Link>
        &nbsp;
        <Link to="/account" className="button outset">
          Start Task
        </Link>
      </div>
    </div>
  );
};

export default AccountCard;
