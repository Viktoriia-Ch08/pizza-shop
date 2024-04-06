const GreetingModal = ({ setShow }) => {
  return (
    <div>
      <p>
        Thank you a lot for ordering! Our manager will call you as soon as
        possible
      </p>
      <button
        type="button"
        onClick={() => {
          setShow(false);
        }}
      >
        OK
      </button>
    </div>
  );
};

export default GreetingModal;
