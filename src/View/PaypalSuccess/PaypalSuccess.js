const { Loading, Link } = require("@nextui-org/react");

const PaypalSuccess = () => {
  const handlePaymentUpdate = () => {
    //user update payment status to paid
  };

  return (
    <>
      <div>
        <p>Your payment is being processed please wait</p>
        <Loading size="xl" />
        <p>
          If you are not redirected in 30 seconds <Link>click here...</Link>
        </p>
      </div>
    </>
  );
};
