const Account = () => {
  return (
    <>
      <div>
        <h1>@Username</h1>
        <div className="row">
          <div className="col-6">
            <span id="account-info-1">Followers:</span>35.6K
          </div>
          <div className="col-6">
            <span id="account-info-2">Interactions:</span>10K
          </div>
        </div>
        <div className="row">
          <div id="interaction-log" className="col-12"></div>
        </div>
      </div>
    </>
  );
};

export default Account;
